import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/topbar/Topbar"; // Sửa đường dẫn của TopBar
import Health from "./pages/heath/Health";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Workout from "./pages/workout/Workout";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <Router basename="/WebModify_reactJS_demo/">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Blog là trang chủ */}
        <Route path="/about" element={<About />} />
        <Route path="/heath" element={<Health />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;