import { useParams } from "react-router-dom";
import Header from "../components/Header";
import recipe_data from "../recipe_data.json";
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();

  const recipe = recipe_data.find(
    (item) => item.id === parseInt(id as string, 10)
  );

  if (!recipe) {
    return (
      <div style={{ color: "tomato" }}>
        <h2>Recipe not found!</h2>
      </div>
    );
  }

  return (
    <div className="recipe-container">
      <Header fontSize={18} />

      <div id="recipe-card-id">
        <div className="recipe-id-header">
          
          
        </div>
        <div className="recipe-read">
          <h2 style={{ fontWeight: 200 }}>{recipe.name}</h2>
          <h4>{recipe.description}</h4>

          
          <img src={recipe.ImagePath} alt="recipe-img" />

          <div className="ingredients">
            
            <p style={{ fontWeight: 600 }}>Ingredients</p>
            <br />
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <br />
            
            <div className="estimated">
              <p style={{ fontWeight: 600 }}>Estimated time:</p>
              <p>{recipe.EstimatedCookingTime}</p>
            </div>
          </div>
          <hr />
          <div className="recipe-inst">
            <p style={{fontWeight:600, fontSize:"larger"}}>Do like this: </p>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      </div>
      
      <div className="space"></div>
    </div>
  );
};

export default Recipe;
