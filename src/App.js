import React from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { NewsContent } from "./components/home/newscontent.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <NewsContent />
      </header>
    </div>
  );
}

export default App;
