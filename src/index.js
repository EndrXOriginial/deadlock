import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./Pages/Home";
import { Heroes } from "./Pages/Heroes";
import { RouterLayout } from "./RouterLayout";
import { SingleHero } from "./Pages/SingleHero";
import { Items } from "./Pages/Items";
// import reportWebVitals from './reportWebVitals';
export const baseURL = 'https://assets.deadlock-api.com/v2';

const router = createBrowserRouter([
  {
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/heroes",
        element: <Heroes />,
      },
      {
        path: "/heroes/:id",
        element: <SingleHero />,
      },
      {
        path: '/items',
        element: <Items />
      },
      // TO DO: Add when create new components
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
