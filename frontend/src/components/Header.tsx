import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props: { fontSize: number; selectedPage?: string }) => {
  
    const getLinkColor = (currentSelectedPage: string) =>
    props.selectedPage === currentSelectedPage ? "grey" : "wheat";
  return (
    <>
      <div className="header" style={{ fontSize: props.fontSize }}>
        <header>
          <nav>
            <h1>Ryans underground kitchen</h1>
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
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
