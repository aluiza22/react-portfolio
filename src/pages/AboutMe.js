import React from "react";
import styled from "styled-components";
import "../App.css";
import Timeline from "../components/Timeline";

const InterestsStyle = styled.ol`
  list-style:none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 60px);
`;

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
        <InterestsStyle>
          <li>
            <svg title="Food" height="55px" width="45px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.242 336.242">
              <title>Food</title>
              <use href="#icon-donut"></use>
            </svg>      
          </li>
          <li>
            <svg title="Music" height="55px" width="45px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 487.997 487">
              <title>Music</title>
              <use href="#icon-music"></use>
            </svg> 
          </li>
          <li>
            <svg title="Spreadsheets" height="55px" width="45px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
              <title>Spreadsheets</title>
              <use href="#icon-excel"></use>
            </svg> 
          </li>
          <li>
            <svg title="Coffee" height="55px" width="45px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <title>Coffee</title>
              <use href="#icon-coffee"></use>
            </svg> 
          </li>
          <li>
            <svg title="Design" height="55px" width="45px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Design</title>
              <use href="#icon-design"></use>
            </svg> 
          </li>
          <li>
            <svg title="Technology" height="55px" width="45px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Technology</title>
              <use href="#icon-tech"></use>
            </svg> 
          </li>
          <li>
            <svg title="Dance" height="55px" width="45px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-131 0 511 512">
              <title>Dance</title>
              <use href="#icon-dance"></use>
            </svg> 
          </li>
        </InterestsStyle>
      </section>
  );
}

export default AboutMe;
