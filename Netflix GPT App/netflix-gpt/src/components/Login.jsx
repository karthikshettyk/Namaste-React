import { useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    const message = validate(name, email, password);
    setErrorMessage(message);
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-full md:w-3/12 z-0 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "SignUp"}
          </h1>
          {!isSignInForm ? (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              className="p-4 my-4 w-full bg-gray-700"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          ) : (
            <></>
          )}
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="p-4 my-4 w-full bg-gray-700"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="p-4 my-4 w-full bg-gray-700"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleSubmit}
          >
            {isSignInForm ? "Login" : "Sign Up"}
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
