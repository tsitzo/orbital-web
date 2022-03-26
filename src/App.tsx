import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components";
import { Home, Launches, LaunchDetails, News } from "./pages";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:id" element={<LaunchDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
