import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/LearnMateLogo.png';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const location = useLocation();

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <li className={isActive('/')}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive('/courses')}>
          <Link to="/courses">Courses</Link>
        </li>
        <li className={isActive('/about')}>
          <Link to="/about">About Us</Link>
        </li>
        <li onClick={handleLoginClick} className={isActive('/login')}>
          Login
        </li>
        <li onClick={handleRegisterClick} className={isActive('/register')}>
          Register
        </li>
        <li>
          <button className='btn'>
            <Link to="/contact">Contact Us</Link>
          </button>
        </li>
        
      </ul>

      {showLogin && <div className="modal-overlay"><Login closeModal={closeModal} /></div>}
      {showRegister && <div className="modal-overlay"><Register closeModal={closeModal} /></div>}
    </nav>
  );
};

export default Navbar;
