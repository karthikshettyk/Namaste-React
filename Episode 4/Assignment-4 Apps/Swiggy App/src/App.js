import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaturantItemMenuCard from "./components/RestaturantItemMenuCard";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import About from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Error from "./components/Error";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

const App = () => {
  return (
    <div className="app-layout">
      <Header></Header>
      <br></br>
      <Outlet></Outlet>
      <br></br>
      <Footer></Footer>
    </div>
  );
};

const configRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      { path: "/login", element: <Login></Login> },
      {
        path: "/restaturantmenucard/:resId",
        element: <RestaturantItemMenuCard></RestaturantItemMenuCard>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/logout",
        element: <Logout></Logout>,
      },
    ],
  },
]);

reactRoot.render(<RouterProvider router={configRoutes}></RouterProvider>);
