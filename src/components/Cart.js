const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];


const Cart = () => {
    return (
      <div>
        <h1>Cart</h1>
        {cartElements.map((item) => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <h3>₹ {item.price}</h3>
            <img src={item.imageUrl} alt="img" />
            <h3>{item.quantity}</h3>
          </div>
        ))}
      </div>
    );
  };

export default Cart;