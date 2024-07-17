import React from 'react'
import Baanner from './a.png';
import './About.css';

const About = () => {
  return (
    <div className='about'>
        <div>
            <img className='images' src={Baanner} alt="" />
        </div>

        <div className='details'> 
            <p className='about-head'>About Us</p>
            <h1>Food is an Important</h1>
            <h1>Part of A Balanced Diet</h1>
            <br></br>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <br></br>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

        </div>
    </div>
  )
}

export default About