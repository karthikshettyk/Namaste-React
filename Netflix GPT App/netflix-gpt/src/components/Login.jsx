import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg"
          alt="background-img"
        />
        <form className="w-full md:w-3/12 z-0 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "SignUp"}
          </h1>
          {!isSignInForm ? (
            <input
              type="name"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            ></input>
          ) : (
            <></>
          )}
          <input
            type="name"
            placeholder="Email or Mobile Number"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
         {isSignInForm?"Login":"Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
