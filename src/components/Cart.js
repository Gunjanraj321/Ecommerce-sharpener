// const cartElements = [
//   {
//     id: 1,
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },

//   {
//     id: 2,
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//     quantity: 3,
//   },

//   {
//     id: 3,
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";


const Cart = () => {

  const cartItems = useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart =() =>{
    dispatch(clearCart());
  }

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  }
  return (
    <div>
      <h1>Cart</h1>
      <button
          className="p-2 m-2 rounded-md bg-green-400 text-red-500 font-bold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is Empty. Add some food to your cart</h1>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <h3>₹ {item.price}</h3>
          <img src={item.imageUrl} alt="img" />
          <h3>{item.quantity}</h3>
          <button onClick={handleRemoveItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
