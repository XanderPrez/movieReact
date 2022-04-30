import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App--navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-movie">Add movie</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/edit-movie/:id" element={<EditMovie />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;