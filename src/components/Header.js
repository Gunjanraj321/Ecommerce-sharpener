import { useState } from "react";
import Cart from "./Cart";

const Header = () => {

    const [showCart, setShowCart] = useState([false]);

    const handleCart = ()=>{
        setShowCart(!showCart)
    }

    return (
        <div >
            <ul className="font-bold justify-center">
                <li className="">HOME</li>
                <li>STORE</li>
                <li>ABOUT</li>
                <button onClick={handleCart}>Cart</button>
            </ul>
            {showCart && <Cart/>}
        </div>
    )
}

export default Header;