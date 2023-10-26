import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecipePage } from "./views/RecipePage.tsx";
import HomePage  from "./views/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/recipes",
    element: <RecipePage />,
  },
    
  {
    path: "/",
    element: <HomePage />
  }


]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
