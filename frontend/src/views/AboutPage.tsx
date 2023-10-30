import Header from "../components/Header";

const AboutPage = () => {
  return (
    <>
      <Header fontSize={22} selectedPage="about" />
      <div>
        <h1>Subscribe to our newsletter!</h1>
        <h4>Recieve updates our kitchen and be the first one to try out new recipes!</h4>
      </div>
    </>
  );
};

export default AboutPage;
