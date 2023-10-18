import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./src/components/About";
import Error from "./src/components/ErrPage";
import { Outlet } from "react-router-dom";
import RestaurantDetails from "./src/components/RestaurantDetails";
import { Provider } from "react-redux";
import store from "./src/Utils/store";
import Cart from "./src/components/Cart";

const App = function () {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/", element: <Body /> },
      { path: "/restaurant/:id", element: <RestaurantDetails /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
