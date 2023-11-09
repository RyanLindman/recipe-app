import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import recipe_data from "../recipe_data.json";
import './Slider.css'

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
      centerMode: true,
      draggable: false,
      swipeable: false,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1920 },
      items: 4,
      slidesToSlide: 2,
      centerMode: true,
    },

    tabletXL: {
      breakpoint: {max: 1920, min:1024},
      items : 4, 
      slidesToSlide: 3,
      centerMode: false

    },

    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 2,
      slidesToSlide: 2,
      centerMode: false,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1,
      
    },
  };

  return (
    <div className="carousel">
      <h1 style={{ color: "wheat" }}>featured recipes</h1>
      <Carousel
        responsive={responsive}
        containerClass="carousel"
        slidesToSlide={2}
        itemClass="card"
      >
        {recipe_data.slice(0, 6).map((recipe) => (
          <div key={recipe.id} className="card">
            <img
              src={recipe.ImagePath}
              alt="recipe-image"
              className="recipe-image"
            />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>

            <Link to={`/recipes/${recipe.id}`}>
              <button className="goto-btn">Go to recipe</button>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
