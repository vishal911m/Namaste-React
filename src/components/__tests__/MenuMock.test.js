// test with mock data
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router";
import RestaurantMenu from "../RestaurantMenu";
import { MENU_DATA } from "../../mocks/data";
import useRestaurant from "../../utils/useRestaurant";
import Header from "../Header"

jest.mock("../../utils/useRestaurant");

useRestaurant.mockImplementation(() => MENU_DATA.data);

test("Renders menu items with Mock data", async () => {
  const { getByTestId, getAllByTestId, getAllByText } = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => getByTestId("menu"));

  const addBtn = getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  const cart = getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart- 2 items");

  // const menuItems = getAllByText(/Pizza/i);
  // expect(menuItems.length).toBe(2);
});
