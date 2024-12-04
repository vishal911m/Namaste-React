import React from "react";
import ReactDOM from "react-dom/client";
import { IMG_CDN_URL, LOGO_URL } from "./utils/constants";
import { restaurantList } from "./utils/mockData";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    );
};

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);