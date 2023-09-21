
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/portfolio.css";
import image1 from "../images/one.jpg";
import image2 from "../images/two.jpg";
import image3 from "../images/three.jpg";
import image4 from "../images/four.jpg";
import image5 from "../images/five.jpg";
import image6 from "../images/six.jpg";
import image7 from "../images/seven.jpg";
import image8 from "../images/eight.jpg";






function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        <div className="item">
        <img src={image2} alt="Project 1" ></img>
        <img src={image3} alt="Project 1" ></img>
          <h2>Happy days are here again!</h2>
          <p>We are so proud of you</p>
        </div>

        <div className="item">
        <img src={image4} alt="Project 1" ></img>
        <img src={image5} alt="Project 1" ></img>
          <h2>Happy days are here again!</h2>
          <p>We are so proud of you</p>
        </div>

        <div className="item">
        <img src={image1} alt="Project 1" ></img>
        <img src={image6} alt="Project 1" ></img>
          <h2>Happy days are here again!</h2>
          <p>We are so proud of you</p>
        </div>


       
      </div>


      <div className="portfolio-items">
        <div className="item">
        <img src={image7} alt="Project 1" ></img>
        <img src={image2} alt="Project 1" ></img>
       
       
          <h2>Happy days are here again!</h2>
          <p>We are so proud of you</p>
        </div>

        <div className="item">
        <img src={image5} alt="Project 1" ></img>
        <img src={image6} alt="Project 1" ></img>
          <h2>Happy days are here again!</h2>
          <p>We are so proud of you</p>
        </div>

        <div className="item">
        <img src={image8} alt="Project 1" ></img>
        <img src={image1} alt="Project 1" ></img>
          <h2>Happy days are here again!</h2>
          <p>We are so proud of you</p>
        </div>


       
      </div>

      
      <footer>
    <p>&copy; 2023 My Portfolio. hope you are successful with your career.</p>
   
  </footer>
    </>
  );
}

export default Portfolio;
