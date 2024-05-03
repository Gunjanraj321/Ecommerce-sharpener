import { useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
const Header = () => {

    return (
        <div >
            <ul className="font-bold justify-center">
                <li className=""><Link to="/">HOME</Link></li>
                <li><Link to="/store">STORE</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/cart">CART</Link></li>
            </ul>

        </div>
    )
}

export default Header;