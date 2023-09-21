
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './page/navbar';
import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import Portfolio from './page/portfolio';




import './App.css';









function App() {
    return(
        <>
        <Navbar/>
       
        <Routes>
        <Route path="/home" element={<Home/>} />;
        <Route path="/portfolio" element={<Portfolio/>} />;
        <Route path="/about" element={<About/>} />;
        <Route path="/contact" element={<Contact/>} />;
        
           
           
        </Routes>

       
       
        </>
        
    );
}
export default App