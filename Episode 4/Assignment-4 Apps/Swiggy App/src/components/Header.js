import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [authVariableName, setAuthVariableName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="no-style">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About Us</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
          <button
            onClick={() => {
              return authVariableName === "Login"
                ? setAuthVariableName("Logout")
                : setAuthVariableName("Login");
            }}
          >
            {authVariableName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
