import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/About";
import Error from "./components/ErrPage";
import { Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";

const App = function () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/about", element: <AboutUs /> },
      { path: "/", element: <Body /> },
      { path: "/restaurant/:id", element: <RestaurantDetails /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
