import React, {useState} from "react";
import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import { About } from "./components/about/about";
import { Login } from "./components/login/login";
import { AppContextProvider } from "./app-context"

import { Content } from "./components/content/content.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
const [appState, setAppState] = useState("");

  return (
    <Router>
      <AppContextProvider
        value={{
          // o change muda o appState do content
          change: (value) => setAppState(value),
        }}
      >
        <div className="App">
          <header className="App-header">
            <NavBar />
            <Routes>
              {/* atras do appState está fazendo um set para content que irá fazer um set para CardPosts (que irá renderizar o conteúdo para os cards) */}
              <Route path="/" element={<Content searchingTerm={appState} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </header>
        </div>
      </AppContextProvider>
    </Router>
  );
}

export default App;
