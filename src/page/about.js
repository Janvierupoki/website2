
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/about.css";
import image1 from "../images/eight.jpg"




function About() {
  return (
    <>
    <div className='about'>
      <h2>About Me</h2>
     <img src={image1} alt="Project 1" ></img>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nemo
        consequatur accusantium perferendis sequi, cupiditate ad, praesentium
        molestias deleniti harum officiis, quibusdam aperiam necessitatibus ullam
        sapiente! Blanditiis, aliquam esse. Facilis?
      </p>
    </div>
     
    </>
  );
}

export default About;
