import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/topbar/Topbar"; // Sửa đường dẫn của TopBar
import Heath from "./pages/heath/Heath";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";

function App() {
  return (
    <Router basename="/WebModify_reactJS_demo/">
      <TopBar />
      <Routes>
        <Route path="/" element={<Blog />} /> {/* Blog là trang chủ */}
        <Route path="/about" element={<About />} />
        <Route path="/heath" element={<Heath />} />
      </Routes>
    </Router>
  );
}

export default App;
