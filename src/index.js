import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Heroes } from "./Pages/Heroes";
import { RouterLayout } from "./RouterLayout";
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Heroes",
    element: <Heroes />,
  },
  // TO DO: Add when create new components
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<RouterLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        {/* <Route path="/items" element={<Items />} /> */}
        {/* <Route path="/guide" element={<Guide />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
