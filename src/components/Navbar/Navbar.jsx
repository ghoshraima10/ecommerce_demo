import React from "react";
import './Navbar.css';
import search from '../../images/search.png';
import cart from '../../images/cart.png';


 const Navbar=()=>{
    return(
        <div className="navbar">
          <ul>
            <li><a href="#" className="link-text">Home</a></li>
            <li><a href="#"className="link-text">Shop</a></li>
            <li><a href="#"className="link-text">About</a></li>
            </ul>  

            <div className="search-box">
                <input type="text" placeholder="search"/>
                <a href="#"><img src={search} className="simage" alt="search"/></a>
            </div>
            <a href="#"><img src={cart} className="cimage" alt="cart"/></a>
            <button className="lbutton">Login</button>
            

        </div>
    )

};

export default Navbar;