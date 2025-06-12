import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [authVariableName, setAuthVariableName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                return authVariableName === "Login"
                  ? setAuthVariableName("Logout")
                  : setAuthVariableName("Login");
              }}
            >
              {authVariableName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
