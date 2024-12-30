import React, { lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Instamart = lazy(() => import("./components/Instamart"));

const About = lazy(() => import("./components/About"));

const App = () => {
  const[user, setUser] = useState({
    name: "FoodVilla",
    title: "FoodVilla",
    email: "support@foodvilla.com",
  });

  return (
    <>
    {/* put header component here to see the differenct between hard coded data and context data*/}
    <UserContext.Provider value={{
      user: user,
      setUser: setUser,
      }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body userContent={{
          name: "FoodVilla",
          email: "support@foodvilla.com",
        }}/>
      },
      {
        path: "/about",
        element: (
        <Suspense fallback={<h1>About Loading!</h1>}>
          <About />
        </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense> 
          ),
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);