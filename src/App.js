import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { Content } from "./components/home/content.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Content />
      </header>
    </div>
  );
}

export default App;
