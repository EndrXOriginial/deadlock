import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./Pages/Home";
import { Heroes } from "./Pages/Heroes";
import { RouterLayout } from "./RouterLayout";
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Heroes",
        element: <Heroes />,
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
