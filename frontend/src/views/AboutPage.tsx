import Header from "../components/Header";
import "../AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <Header fontSize={22} selectedPage="about" />
      <div className="banner-image">
        <img src="/göteborg.jpg" alt="story-img" />
      </div>
      <div className="main-container">
        <div className="story-container">
          <h1 style={{textTransform:"uppercase"}}>Our Story</h1>
        </div>

        <div className="newsletter-container">
          <h1 style={{textTransform:"uppercase"}}>Subscribe to our newsletter</h1>
          <h4 style={{fontStyle:"italic"}}>
            Recieve updates our kitchen and be the first one to try out new
            recipes!
          </h4>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
