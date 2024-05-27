import logo from "./logo.svg";
/////////////////////////////////////////////// importing Lib and modules
import "./App.css";
import "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/////////////////////////////////////////////// importing components and pages
import HeaderInfo from "./Components/Header-Info/HeaderInfo";
import FeaturedCourses from "./Components/FeaturedCourses/FeaturedCourses";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/Contact/ContactUs";

function App() {
  return (
    <div className="App">
      <HeaderInfo />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={""} />
          <Route path="/about" element={""} />
          <Route path="/services" element={""} />
          <Route path="/contact" element={""} />
        </Routes>
      </Router>
      {/* <Home /> */}
      <ContactUs />
    </div>
  );
}

export default App;
