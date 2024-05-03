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

const Card = () => {
  return (
    <div>
      {productsArr.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <h3>₹ {item.price}</h3>
          <img src={item.imageUrl} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default Card;
