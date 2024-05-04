import { useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {isAuth, login} from "../utils/authSlice";

const Header = () => {
    const isAuthenticated = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        if(isAuthenticated !== null){ 
          dispatch(login(null));
          dispatch(isAuth(false));
        }
      };
    return (
        <div >
            <ul className="font-bold justify-center">
                <li className=""><Link to="/">HOME</Link></li>
                <li><Link to="/store">STORE</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/cart">CART</Link></li>
                <button
            className="bg-green-200 hover:bg-green-300 "
            onClick={handleLogout}
          >
            {isAuthenticated !== null ? "Logout" :<Link to="/login">Login</Link>}
          </button>
            </ul>

        </div>
    )
}

export default Header;