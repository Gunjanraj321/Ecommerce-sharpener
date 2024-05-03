import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Store from "./components/Store";

const App = () => {
    return <div>   
        <Header />
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/store" element={<Store />} />
        </Routes>
        <Footer />
    </div>
}

export default App;