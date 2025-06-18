import ReactDOM from "react-dom/client";
import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaturantItemMenuCard from "./components/RestaturantItemMenuCard";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import About from "./components/AboutUs";
//import ContactUs from "./components/ContactUs";
const ContactUs = lazy(() => import("./components/ContactUs"));
import Login from "./components/Login";
import Logout from "./components/Logout";
import Error from "./components/Error";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/userContext";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

const App = () => {
  const [userName, setUserName] = useState("Karthik");
  useEffect(() => {
    const data = {
      name: "Shetty",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ userType: userName,setUserName }}>
      <div className="app-layout">
        <Header></Header>
        <br></br>
        <Outlet></Outlet>
        <br></br>
        <Footer></Footer>
      </div>
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<div>Loading Page..</div>}>
            <ContactUs></ContactUs>
          </Suspense>
        ),
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
