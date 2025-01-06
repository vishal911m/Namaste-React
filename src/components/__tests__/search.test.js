import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  })
});

test("Restaurants should load on homepage", async() => {

  const body = render(
    <StaticRouter>
    <Provider store={store}>
      <Body />
    </Provider>
    </StaticRouter>
  );

  // await waitFor(()=> expect(screen.getByTestId("search-btn")));
  await waitFor(()=> expect(body.getByTestId("search-btn")));

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(20); 
  // const shimmer = body.getByTestId("shimmer");
  // expect(shimmer.children.length).toBe(18);
  

  // console.log(shimmer);

  // console.log(body);

});

test("Search for string(food) on homepage", async() => {

  const body = render(
    <StaticRouter>
    <Provider store={store}>
      <Body />
    </Provider>
    </StaticRouter>
  );

  await waitFor(()=> expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target:{
      value: "pizza",
    }
  }); 

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(2);

});