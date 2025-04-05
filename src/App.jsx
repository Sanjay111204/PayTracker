import React from "react";
import NB from "../components/navbarHAV";
import HOME from "../components/home";
import Addele from "../components/Addele";
import Track from "../components/Track";
import { createBrowserRouter, RouterProvider } from "react-router";
let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NB />
        <HOME />
      </div>
    ),
  },
  {
    path: "/Home",
    element: (
      <div>
        <NB />
        <HOME />
      </div>
    ),
  },
  {
    path: "/Add",
    element: (
      <div>
        <NB />
        <Addele />
      </div>
    ),
  },
  {
    path: "/track",
    element: (
      <div>
        <NB />
        <Track />
      </div>
    ),
  },
]);
const App = () => {
  return <div>{<RouterProvider router={router} />}</div>;
};

export default App;
