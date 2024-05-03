import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Card = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {productsArr.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <h3>₹ {item.price}</h3>
          <img src={item.imageUrl} alt="img" />
          <button onClick={() => handleAddItem(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
