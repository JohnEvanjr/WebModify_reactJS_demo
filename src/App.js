import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heath from "./pages/heath/Heath";
import TopBar from "./components/topbar/Topbar";

function App() {
  return (
    <Router>
      <TopBar/>
      <Heath/>
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
