import Header from "../components/Header";
import Slider from "../components/Slider";


import "../HomePage.css";

const HomePage = () => {
  

  return (
    <>
      <Header fontSize={22} selectedPage="HomePage" />
      <div className="welcome-msg">
        <h2 style={{textTransform:"uppercase"}}>Welcome to our recipe depository!</h2>
        <h5 style={{fontStyle:"italic"}}>Find your favorite recipe or maybe discover a new one </h5>
      </div>
      <Slider />
      


      
    </>
  );
};

export default HomePage;
