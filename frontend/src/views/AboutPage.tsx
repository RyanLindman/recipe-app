import Header from "../components/Header";
import "../AboutPage.css";
import NewsletterForm from "../components/NewsletterForm";


 
const AboutPage = () => {

  







  


  return (
    <>
      <Header fontSize={22} selectedPage="about" />
      <div className="banner-image">
        <img src="/göteborg.jpg" alt="story-img" />
      </div>
      <div className="main-container">
        <div className="story-container">
          <h1 style={{ textTransform: "uppercase" }}>Our Story</h1>
        </div>

        <div className="newsletter-container">
          <h1 style={{ textTransform: "uppercase" }}>Get Our newsletter</h1>
          <h4 style={{ fontStyle: "italic" }}>
            <p>
              Recieve important updates on our kitchen and be the first one{" "}
              <br /> to try out new recipes! <br /> <br />
              <span style={{borderBottom:"3px solid pink"}}>Exclusive offers</span> on rare recipes can occur. <br />
             <br /> Don't miss out!
            </p>
          </h4>
          <NewsletterForm />
        </div>
      </div>
    </>

    
  );
};

export default AboutPage;
