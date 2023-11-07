import { Dispatch, SetStateAction, useState } from "react";
import Header from "../components/Header";
import "./RecipeListPage.css";
import Searchbar from "../components/Searchbar";
import recipe_data from "../recipe_data.json";

export const RecipeListPage = (props: {
  setLikedRecipes?: Dispatch<SetStateAction<any>>;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery);

  const searchInput = searchQuery.toLowerCase();
  const filteredRecipes = recipe_data.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchInput)
  );
  console.log(filteredRecipes);

  return (
    <>
      <Header selectedPage="recipes" fontSize={22} />
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="main-container">
        {searchQuery === ""
          ? recipe_data.map((item) => (
              <div className="list" key={item.id}>
                <ul>
                  <li>
                    <img
                      src={item.ImagePath}
                      alt="recipe-image"
                      className="recipe-img"
                    />
                    <h2>{item.name}</h2>
                  </li>
                  <li></li>
                </ul>
              </div>
            ))
          : filteredRecipes.map((item) => (
              <div className="list" key={item.id}>
                <ul>
                  <li>
                    <img
                      src={item.ImagePath}
                      alt="recipe-image"
                      className="recipe-img"
                    />
                    
                      <h2>{item.name}</h2>

                    
                    

                  </li>
                  <li></li>
                </ul>
              </div>
            ))}
      </div>
    </>
  );
};
