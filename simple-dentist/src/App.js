import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Procedure from "./components/Procedure"
import Contact from "./components/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/home">Go to Home Page</Link>
          <Link to="/procedures">See Our Procedures</Link>
          <Link to="/contact">Contact Us!</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/procedures" element={<Procedure />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
