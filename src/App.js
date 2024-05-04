import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Navigate, Route, Routes } from "react-router-dom";
import Store from "./components/Store";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useSelector } from "react-redux";
import Auth from "./utils/useAuth";
import { useEffect } from "react";


const App = () => {

  const isAuthenticated = useSelector((state)=>state.auth.user);
  // console.log(isAuthenticated.token);
  const verifyUser = useSelector((state)=>state.auth.isAuth);
console.log(verifyUser)

  const isAuth = Auth()
  useEffect(()=>{
    if(isAuthenticated?.token){
      isAuth();
    }
  },[isAuthenticated])

  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={verifyUser ? <Body /> : <Navigate to="/login" /> } />
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
