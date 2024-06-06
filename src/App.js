import logo from "./logo.svg";
/////////////////////////////////////////////// importing Lib and modules
import "./App.css";
import "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Snow from 'react-quill/dist/quil'
/////////////////////////////////////////////// importing components and pages
import HeaderInfo from "./Components/Header-Info/HeaderInfo";
import ModernNavbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/Contact/ContactUs";
import Courses from "./Pages/Courses/Courses";
import BlogPage from "./Pages/BLogPage/BlogPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Detail from "./Components/Detail/Detail";
import Dashboard from "./Components/Dashboard/Dashboard";
import BlogDetail from './Components/Detail/BlogDetail'
import Services from "./Pages/Services/Services";
function App() {
  return (
    <div className="App">
      <HeaderInfo />
      <Router>
        <ModernNavbar />
        <Routes>
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Blog" element={<BlogPage/>} />
          <Route path="/Service" element={<Services/>} />
          <Route path="/About" element={<AboutUs/>} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Detail/:courseId" element={<Detail />} />
          <Route path="/BlogDetail/:blogId" element={<BlogDetail/>} />
        
        </Routes>
          <Footer/>
      </Router>


    </div>
  );
}

export default App;
