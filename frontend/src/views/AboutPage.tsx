import Header from "../components/Header";
import "../AboutPage.css";
import NewsletterForm from "../components/NewsletterForm";

const AboutPage = () => {
  return (
    <>
      <Header fontSize={22} selectedPage="about" />
      <div className="banner-image">
        <img src="/göteborg.jpg" alt="story-img" className="gbg" />
      </div>
      <div className="main-container">
        <div className="story-container">
          <h1 style={{ textTransform: "uppercase" }}>Our Story</h1>
          <p style={{fontSize:"16px", lineHeight:"22px"}}>
            Beneath the city's hustle and bustle, a discreet door in a quiet
            alley led to the Underground Kitchen—a hidden culinary haven. A
            symphony of diverse chefs crafted exclusive dishes with rare
            ingredients from secret sources. The modest restaurant above, an
            entrance to this clandestine world, offered a secret menu for the
            initiated. Word spread, and soon, the Underground Kitchen became the
            city's worst-kept secret, a subterranean escape for those seeking an
            extraordinary dining experience.
          </p>
        </div>

        <div className="newsletter-container">
          <h1 style={{ textTransform: "uppercase" }}>Get Our newsletter</h1>
          <h4 style={{ fontStyle: "italic" }}>
            <p>
              Recieve important updates on our kitchen and be the first one{" "}
              <br /> to try out new recipes! <br /> <br />
              <span style={{ borderBottom: "3px solid pink" }}>
                Exclusive offers
              </span>{" "}
              on rare recipes can occur. <br />
              <br /> Don't miss out!
            </p>
          </h4>
          <NewsletterForm /> {/* inserting form component */}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
