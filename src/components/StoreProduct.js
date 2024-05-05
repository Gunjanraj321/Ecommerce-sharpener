import { useDispatch } from "react-redux";
import { setCartItems } from "../redux/cartSlice";
import axios from "axios";
import { useSelector } from "react-redux";


const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const StoreProduct = ({cartClick}) => {
  const dispatch = useDispatch();

const userLoginData = useSelector((state)=>state.auth.user);
const token = userLoginData?.token;
// const item = useSelector((state)=>state.cart.items)
// console.log(item)
  const handleAddItem = async ({ title, price, imageUrl, quantity }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/cart", {
        title,
        price,
        imageUrl,
        quantity,
      },{
        headers:{
          Authorization:token
        }
      });
      cartClick();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsArr.map((item) => (
          <div
            key={item.title}
            className="border border-gray-300 rounded-md p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <h3 className="text-gray-600">₹ {item.price}</h3>
              <img src={item.imageUrl} alt={item.title} className="mt-2" />
            </div>
            <button
              className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
              onClick={() =>
                handleAddItem({
                  title: item.title,
                  price: item.price,
                  imageUrl: item.imageUrl,
                  quantity: 1,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreProduct;
