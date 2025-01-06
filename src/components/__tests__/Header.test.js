import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom";

test("Logo should load on rendering header", ()=>{

  // Load the header
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
    );
  // console.log(header);

  const logo = header.getAllByTestId("logo");

  // console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/dummy.png");

  //Check if logo is loaded
});

test("Online status should be displayed as online", ()=>{

  // Load the header
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
    );
  // console.log(header);

  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("online");
});

test("Online status should be displayed as online", ()=>{

  // Load the header
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
    );
  // console.log(header);

  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart- 0 items");
});