import React from "react";
import { Header } from "./components/Header";
import { Project } from "./components/Project";
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
          <Project
            pname="Portfolio"
            ptags={["react", "mongodb", "bootstrap", "css", "html"]}
          />
          <Project
            pname="Blog"
            ptags={["wordpress", "php", "react", "gatsby"]}
          />
          <Project pname="Test" ptags={["this", "that"]} />
        </div>
      </section>
    </div>
  );
}

export default App;
