import { Link } from "react-router-dom";
import "./CardHover.css";
const CardHover = (props: { item: any }) => {
  return (
    <div className="test-container">
      <img src={props.item.ImagePath} loading="lazy" alt="Avatar" className="test-image" />  
      <div className="middle">
        <div className="text">
           <Link to={`/recipes/${props.item.id}`}><button className="hover-btn">View Recipe</button></Link>
            </div>
      </div>
      <div>
        <h2>{props.item.name}</h2>
      </div>
    </div>
  );
};

export default CardHover;
