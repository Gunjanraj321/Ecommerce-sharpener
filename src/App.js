import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useSelector } from "react-redux";
import Auth from "./hooks/useAuth";
import { useEffect } from "react";
import StoreProduct from "./components/StoreProduct";


const App = () => {

  const isAuthenticated = useSelector((state)=>state.auth.user);
  // console.log(isAuthenticated.token);
  const verifyUser = useSelector((state)=>state.auth.isAuth);

  const isAuth = Auth()
  useEffect(()=>{
    if(isAuthenticated?.token){
      const interval = setInterval(() => {
        isAuth();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
    }
  },[isAuthenticated])

  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={verifyUser ?  <Home /> : <Navigate to="/login" /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store" element={<StoreProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
