import React from "react";
import { Header } from "./components/Header";
import { ProjectListing } from "./components/ProjectListing";
import { ProjectFilter } from "./components/ProjectFilter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="full_section container">
        <h2>Projects</h2>
        <ProjectFilter />
        <div className="card-deck">
          
        </div>
      </section>
    </div>
  );
}

export default App;
