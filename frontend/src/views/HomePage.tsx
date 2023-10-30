import Header from "../components/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../HomePage.css'

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
      <h1 style={{color:"wheat"}}>Featured recipes</h1>
        <Carousel responsive={responsive} containerClass="carousel" centerMode slidesToSlide={4}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
          
        </Carousel>
        
      </div>
    </>
  );
};

export default HomePage;
