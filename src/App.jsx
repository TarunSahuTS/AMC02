import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Disclosures from "./Pages/Disclosures";
import Membership from "./Pages/Membership";
import ProductAndServices from "./Pages/ProductAndServices";
import Resources from "./Pages/Resources";
import AllCirculars from "./Pages/AllCirculars";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/product-and-services"
            element={<ProductAndServices />}
          />
          <Route path="/membership" element={<Membership />} />
          <Route path="/disclosures" element={<Disclosures />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/all-circulars" element={<AllCirculars />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
