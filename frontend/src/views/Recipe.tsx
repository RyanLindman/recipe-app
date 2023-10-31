import { useParams } from "react-router-dom";
import Header from "../components/Header";
import recipe_data from '../recipe_data.json';


const Recipe = () => {

  const { id } = useParams<{ id: string }>();

  const recipe = recipe_data.find((item) => item.id === parseInt(id as string, 10));

  if (!recipe) {
    return <div style={{color:"tomato"}}>Recipe not found</div>
  }

  return (
    <div className="recipe-container">
        <Header fontSize={22} />
    
      <div>
        <h2>Enjoy our free recipes!</h2>
        <h4>{recipe.name}</h4>
        <h6>{recipe.description}</h6>
      </div>
    </div>
  );
};

export default Recipe;

