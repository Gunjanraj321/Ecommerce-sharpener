import Products from "../components/Products";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">The Generics</h1>
      <h2 className="text-2xl font-semibold mb-4">Get our Latest Album</h2>
      <Products />
    </div>
  );
};

export default Home;
