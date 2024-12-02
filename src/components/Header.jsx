
import "./Header.css"
import {Link} from "react-router-dom";

const Header =()=>{
    const headerStyles ={
        display:"flex",
        alignItems:"center",
        padding:"10px",
    }
    return(
        <div className={'header'} style={headerStyles}>
            <Link to={"/"}><h2>Home</h2></Link>
            <Link to={"/about"}><h2>About Movie</h2></Link>
            <Link to={"/characters"}><h2>Characters</h2></Link>
        </div>
    )
}
export default Header