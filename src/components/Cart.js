import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../redux/cartSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = ({ item }) => {
  const isAuthenticated = useSelector((state) => state.auth.user);
  const token = isAuthenticated?.token;

  const [cartItem, setCartItem] = useState([]);

  const handleClearCart = async () => {
    try {
      console.log(`frontend clearkart`);

      await axios.delete("http://localhost:3000/api/clearCart", {
        headers: { Authorization: token },
      });
      console.log(token);
      setCartItem([]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemoveItem = async (itemId) => {
    console.log(`from remove data or updating`);
    console.log(itemId);
    try {
       await axios.put(
        `http://localhost:3000/api/cart/${itemId}`,
        {
          token: token,
        }
      );
      console.log(token);
      fetchCartItems();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/cart", {
        headers: {
          Authorization: token,
        },
      });
      
      setCartItem(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(`from useEffect`);
    fetchCartItems();
  }, [item]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <button
        className="py-2 px-4 bg-green-500 text-white font-semibold rounded hover:bg-green-600 mb-4"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {/* {cartItems?.length === 0 && (
        <h2 className="text-xl">Cart is Empty. Add some items to your cart</h2>
      )} */}
      {cartItem?.map((item) => (
        <div
          key={item.title}
          className="border border-gray-300 rounded-md p-4 mb-4 flex items-center"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-16 h-16 mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <h3 className="text-gray-600">₹ {item.price}</h3>
            <h3 className="text-gray-600">Quantity: {item.quantity}</h3>
          </div>
          <button
            className="ml-auto py-1 px-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            onClick={() => handleRemoveItem(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
