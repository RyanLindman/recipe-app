import { Dispatch, SetStateAction } from "react";
import Header from "../components/Header";
import "../RecipeList.css";
import Searchbar from "../components/Searchbar";

export const RecipeListPage = (props: {
  setLikedRecipes?: Dispatch<SetStateAction<any>>;
}) => {
  return (
    <>
      <Header selectedPage="recipes" fontSize={22} />
      <Searchbar />





      <div className="main-container">

        <div className="list">
          <ul>
            <li>recipe 1</li>
            <li>recipe 2</li>


          </ul>
          
        </div>
      </div>
    </>
  );
};
