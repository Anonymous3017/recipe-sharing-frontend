import React from 'react';
import Home from '../home/Home';
import About from '../about/About';
import Work from '../work/Work';
import Testimonials from '../testimonials/Testimonials';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Recipe from '../receipe/Recipe';


const MainContent = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="recipe">
        <Recipe />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;
