
import {Link} from "react-router-dom";
import './Header.css'



function  Header(){
    return(
        <>
         <div className="navbar">
        <div className="logo">Food Junction</div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/cart">Cart</Link></li>

        </ul>
      
        
        </div>
        </>
    )
}


export default Header;