import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import recipe_data from "../recipe_data.json";
import { useNavigate } from "react-router-dom";

import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  {
    /* useParams hook for getting each unique item by Id */
  }
  const navigate = useNavigate();
  {
    /* useNavigate hook, allows user to navigate backwards one step in this case, hence: -1 */
  }

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
        <div className="recipe-id-header"></div>
        <div className="recipe-read">
          <div className="title-box">
            <div>
              <h2 style={{ fontWeight: 200 }}>{recipe.name}</h2>
              <h4>{recipe.description}</h4>
            </div>
            <Link to={""} onClick={() => navigate(-1)} className="goback-btn">
              Go back
            </Link>
          </div>

          <img src={recipe.ImagePath} alt="recipe-img" />

          <div className="ingredients">
            <p style={{ fontWeight: 600 }}>Ingredients:</p>
            <br />
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {/* mapping ingredients to a list */}
            <br />
            <div className="estimated">
              <p style={{ fontWeight: 600 }}>Estimated time:</p>
              <p>{recipe.EstimatedCookingTime}</p>
            </div>
          </div>
          <hr />
          <div className="recipe-inst">
            <p style={{ fontWeight: 600, fontSize: "larger" }}>
              Do like this:{" "}
            </p>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      </div>
      <div className="space"></div> {/* quick fix for some extra spacing */}
    </div>
  );
};

export default Recipe;
