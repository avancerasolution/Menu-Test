import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./component/Contact";
import About from "./component/About";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Policy from "./component/Policy";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
