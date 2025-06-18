import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [authVariableName, setAuthVariableName] = useState("Login");
  const { userType,setUserName } = useContext(UserContext);
  const cartItemsLen= useSelector((store) => store.cart.items.length);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="no-style">
          <Link to={"/"}>
          <li>
            <input type="text" value={userType} onChange={(e)=>{
              setUserName(e.target.value);
            }}></input>
          </li>
          </Link>
          <Link>
            <li>
              Internet Status :{useOnlineStatus() ? "🟢 online" : " 🔴offline"}
            </li>
          </Link>
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
            <li>Cart ({cartItemsLen}) Items</li>
          </Link>
          <Link>
            {authVariableName == "Logout" ? <li>{userType}</li> : null}
          </Link>
          <Link>
            <button
              onClick={() => {
                return authVariableName === "Login"
                  ? setAuthVariableName("Logout")
                  : setAuthVariableName("Login");
              }}
            >
              {authVariableName}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
