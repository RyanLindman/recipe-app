import CardHover from "./CardHover"; // Import the CardHover component

const RecipeItem = (props: { recipe: any }) => {
  return (
    <div className="list" key={props.recipe.id}>
      <ul>
        
        <li>
          <CardHover item={props.recipe} /> {/* Pass the recipe data to CardHover */}
        </li>
      </ul>
    </div>
  );
};

export default RecipeItem;
