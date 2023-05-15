import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./component/Contact";
import About from "./component/About";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Policy from "./component/Policy";
import Cart from "./common/Cart";
import { useState } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";
function App() {
  const [orderCount, setorderCount] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
        <Header orderCount={orderCount} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/cart" element={<Cart setorderCount={setorderCount} orderCount={orderCount} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
