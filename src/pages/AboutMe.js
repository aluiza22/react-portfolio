import React from "react";
import "../App.css";
import Timeline from "../components/Timeline";

export const AboutMe = () => {

  return (   
      <section id="AboutMePage" className="page">
        <h2>About me</h2>
        <p>I work as a web developer since 2013 building websites, e-commerces, and blogs 
          <br/>using mainly HTML, CSS, JS, PHP, MySQL, WordPress and Magento. 
          <br/>I tried other technologies on the way, but recently I&#39;m focusing on React.
          <br/><strong>I love transforming design ideas to working applications</strong>, 
          <br/>so projects with innovative and beautiful designs make my heart glow!</p>
        <h3>my journey</h3>
        <Timeline />
        <h3>my interests</h3>
        <ol>
          <li>food</li>
          <li>music</li>
          <li>spreadsheets</li>
          <li>coffee</li>
          <li>design</li>
          <li>technology</li>
          <li>dance</li>
        </ol>
      </section>
  );
}

export default AboutMe;
