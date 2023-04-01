import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Projects,
  ProjectDesc,
  Bookmarks,
  About,
  Notfound,
} from "./components/pages";
import { Navigation, Footer } from "./components/sections";

function App() {
  const project = {
    name: "Educate X",
    tech: ["ReactJS", "TailwindCSS"],
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="projects/desc"
          element={<ProjectDesc project={project} />}
        />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
