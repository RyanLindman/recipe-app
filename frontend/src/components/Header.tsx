import { Link } from "react-router-dom"

const Header = (props: {
    fontSize: number

}) => {
  return (

    <>
    <div className="header" style={{fontSize:props.fontSize}}>
        <header>
            <nav>
                <ul>
                    <li><Link to={"/recipes"}>All recipes</Link></li>
                    <li><Link to={"/about"}>About us</Link> </li>
                </ul>


            </nav>
        </header>
    </div>
        

    

    </>
    
  )
}

export default Header