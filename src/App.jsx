import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Projects,
  ProjectDetail,
  Bookmarks,
  About,
  Notfound,
} from "./components/pages";
import { Navigation, Footer } from "./components/sections";
import { projects } from "./db";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        {projects.map((item) => (
          <Route
            path={`projects/desc/${item.id}`}
            element={<ProjectDetail project={item} />}
          />
        ))}
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
