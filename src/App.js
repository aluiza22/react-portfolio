import React from "react";
import { Router } from "@reach/router";
import { Header } from "./components/Header";
import { Projects } from "./pages/Projects";
import { Curriculum } from "./pages/Curriculum";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router className="full_section container">
        <Projects path="/" />
        <Curriculum path="cv" />
      </Router>
    </div>
  );
}

export default App;
