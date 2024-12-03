import React from "react";
import ReactDOM from "react-dom/client";
// Default import
import Header from "./components/Header";
// Named import
import {Title} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
return(
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// achoda ponnu, of course...i will pull you close and reming you that we are a team, when life gets messy, i will stay and fight for us, you are not hard to love, i wll always choose you, when you stumble, i'll remind you who you are in god's eyes, i'll hold your hand throughout the storm, listen to you when you pour your heart and never let go.