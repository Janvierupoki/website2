import React from 'react';
import {NavLink } from 'react-router-dom';
import "../style/home.css";



const Home = () => {
  return (
    <>
    <div className="container" style={{backgroundImage: 'url(${seven.jpg})'}}>
      <h1 class="heading">HI, AM</h1>
    <h1 class="heading">JANVIER UPOKI</h1>
    <p>Innovative Solution for a better future,Get in touch</p>
   
         <NavLink to ="/portfolio">
         <button>Portfolio</button>
         </NavLink>

         
    </div>

    </>
  );
};

export default Home;