
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './component/Contact';
import About from './component/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
