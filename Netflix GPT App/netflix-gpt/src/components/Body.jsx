import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/browse",
    element: <Browse></Browse>,
  },
]);

const Body = () => {
  return (
    <RouterProvider router={routes}>
      <div>Body</div>
    </RouterProvider>
  );
};

export default Body;
