import React from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { About } from "./components/about/about";
import { Login } from "./components/login/login";

import { Content } from "./components/home/content.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
