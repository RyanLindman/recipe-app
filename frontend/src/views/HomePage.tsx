import Header from "../components/Header";
import Slider from "../components/Slider";


import '../views/HomePage.css'

const HomePage = () => {
  

  return (
    <>
      <Header fontSize={22} selectedPage="HomePage" />
      <div className="welcome-msg">
        <h1 style={{textTransform:"uppercase"}}>Welcome to our recipe depository!</h1>
        <br />
        <h3 style={{fontStyle:"italic"}}>Find your favorite recipe or maybe discover a new one </h3>
      </div>
      <Slider />
      


      
    </>
  );
};

export default HomePage;
