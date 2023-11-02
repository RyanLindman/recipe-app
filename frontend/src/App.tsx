import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecipeListPage } from "./views/RecipeListPage";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import { useState } from "react";
import Recipe from "./views/Recipe";

function App() {
  const [likedRecipes, setLikedRecipes] = useState([]);


  

  const router = createBrowserRouter([
    {
      path: "/recipes",
      element: <RecipeListPage setLikedRecipes={setLikedRecipes} />,
    },

    {
      path: "/recipes/:id",
      element: <Recipe />,
    },

    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
