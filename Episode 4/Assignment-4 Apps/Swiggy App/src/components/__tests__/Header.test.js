import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";

test("should render Header componnet with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0) Items");

  expect(cartItems).toBeInTheDocument();
});


it("Should click Login button into the logout button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button");
  
  fireEvent.click(logInButton);

  const logOutButton = screen.getByRole("button");

  expect(logOutButton).toBeInTheDocument();
});

