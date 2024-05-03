import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Store from "./components/Store";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
