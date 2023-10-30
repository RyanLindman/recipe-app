import Header from "../components/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../HomePage.css";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Header fontSize={22} selectedPage="HomePage" />

      <div className="carousel">
        <h1 style={{ color: "wheat" }}>featured recipes</h1>
        <Carousel
          responsive={responsive}
          containerClass="carousel"
          centerMode
          slidesToSlide={2}
        >
          <div className="card">
            <img
              src="../pancakes.jpg"
              alt="recipe-image"
              className="recipe-image"
            />
            <h3>Swedish Pancakes</h3>
            <p>The swedish favorite! <br /> Easy and quick to make</p>
            <button>Go to recipe</button>
          </div>
          <div><img
              src="../pizza.jpg"
              alt="recipe-image"
              className="recipe-image"
            />
            <h3>Mozarella Pizza</h3>
            <p>The italian go-to <br /> Got an oven? Lets go!</p>
            <button>Go to recipe</button></div>
          <div><img
              src="../carbonara.jpg"
              alt="recipe-image"
              className="recipe-image"
            />
            <h3>Pasta Carbonara</h3>
            <p>The swedish favorite! <br /> Easy and quick to make.</p>
            <button>Go to recipe</button></div>
          <div><img
              src="../pancakes.jpg"
              alt="recipe-image"
              className="recipe-image"
            />
            <h3>Swedish Pancakes</h3>
            <p>The swedish favorite! <br /> Easy and quick to make.</p>
            <button>Go to recipe</button></div>
          <div><img
              src="../pancakes.jpg"
              alt="recipe-image"
              className="recipe-image"
            />
            <h3>Swedish Pancakes</h3>
            <p>The swedish favorite! <br /> Easy and quick to make.</p>
            <button>Go to recipe</button></div>
          <div><img
              src="../pancakes.jpg"
              alt="recipe-image"
              className="recipe-image"
            />
            <h3>Swedish Pancakes</h3>
            <p>The swedish favorite! <br /> Easy and quick to make.</p>
            <button>Go to recipe</button></div>
        </Carousel>
      </div>
    </>
  );
};

export default HomePage;