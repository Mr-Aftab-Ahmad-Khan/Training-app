import React, { useEffect } from "react";
import "./App.css";
import "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
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

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scroll to top whenever location.pathname changes

  const MainContent = () => {
    const isAdminRoute = location.pathname.startsWith("/admin");

    return (
      <>
        <ModernNavbar />
        {!isAdminRoute && <Support />}
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
        {!isAdminRoute && <Footer />}
      </>
    );
  };

  return (
    <div className="App">
      <HeaderInfo />
      <MainContent />
    </div>
  );
}

export default App;
