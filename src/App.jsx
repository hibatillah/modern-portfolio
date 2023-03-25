import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Projects, Bookmarks, About, Notfound } from "./components/pages";
import { Navigation, Footer } from "./components/sections";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;