import React from "react";
import ReactDOM from "react-dom/client";
const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
import foodlogo from "./assets/foodlogo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img src={foodlogo} width={"20px"} height={"20px"} alt="food logo"></img> */}
        <img
          className="logo"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return <>Body</>;
};

const Footer = () => {
  return <>Footer</>;
};

const App = () => {
  return (
    <div className="app-layout">
      <Header></Header>
      <br></br>
      <Body></Body>
      <br></br>
      <Footer></Footer>
    </div>
  );
};

reactRoot.render(<App></App>);
