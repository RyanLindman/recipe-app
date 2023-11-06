import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props: { fontSize?: number; selectedPage?: string }) => {
  const getLinkColor = (currentSelectedPage: string) =>
    props.selectedPage === currentSelectedPage ? "grey" : "wheat";

  return (
    <>
      <header style={{ fontSize: props.fontSize }} className="header-content">
        <nav className="logo-content">
          <img src="logo.png" alt="logo" id="logo" />
          <h3 style={{ textTransform: "uppercase" }}>
            Ryan's underground kitchen
          </h3>
        </nav>
        <div className="nav-content">
          <ul className="nav-list">
            <li
              style={{
                color: getLinkColor("HomePage"),
              }}
            >
              <Link to={"/"}> Home</Link>{" "}
            </li>
            <li
              style={{
                color: getLinkColor("recipes"),
              }}
            >
              <Link to={"/recipes"}>All recipes</Link>
            </li>
            <li
              style={{
                color: getLinkColor("about"),
              }}
            >
              <Link to={"/about"}>About us</Link>
            </li>
          </ul>
        </div>
        
      </header>
    </>
  );
};

export default Header;
