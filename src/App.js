import logo from "./logo.svg";
/////////////////////////////////////////////// importing Lib and modules
import "./App.css";
import "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes,Navigate  } from "react-router-dom";
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
import BlogDetail from "./Components/Detail/BlogDetail";
import ProjectDetail from "./Components/Detail/ProjectDetail";
import Services from "./Pages/Services/Services";
import Support from "./Components/support/Support";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <HeaderInfo />
      <Router>
      <ModernNavbar />
       {/* {path="/admin" ? '' : }  */}
        <Support/>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Detail/:courseId" element={<Detail />} />
          <Route path="/BlogDetail/:blogId" element={<BlogDetail />} />
          <Route path="/ProjectDetail/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
