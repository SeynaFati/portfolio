import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home"; // Importer ta nouvelle page
import Projects from "./component/Projects"; // Importer ta page de projets

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/projects" element={<Projects />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
