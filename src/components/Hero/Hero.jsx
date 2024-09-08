import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Hero.css';
import arrow from '../../assets/arrow.png';

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate

  // Only render Hero if the path is '/'
  if (location.pathname !== '/') {
    return null;
  }

  const handleExploreMoreClick = () => {
    navigate('/courses'); // Navigate to the Courses page
  };

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Unlock Your Learning Potential: Dive into Expert-Led Courses Tailored Just for You!</h1>
        <p>Welcome to your gateway of knowledge! Explore expertly crafted courses designed to empower your academic journey. Whether you're mastering new subjects or deepening your understanding, our platform guides you every step of the way.</p>
        <button className='btn' onClick={handleExploreMoreClick}>Explore More<img src={arrow} alt="Arrow icon" /></button>
      </div>
    </div>
  );
}

export default Hero;
