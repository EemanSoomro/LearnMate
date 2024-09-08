import React, { useRef, useEffect } from 'react';
import './Auth.css';
import Login from './Login';
import Register from './Register';

const Auth = ({ isOpen, closeModal }) => {
  const authRef = useRef(null);

  const handleClickOutside = (e) => {
    if (authRef.current && !authRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay"> {/* Use modal-overlay to cover the entire screen */}
      <div className="auth-container" ref={authRef}> {/* Auth container for modal content */}
        <button className="close-btn" onClick={closeModal}>×</button> {/* Close button */}
        <Login closeModal={closeModal} />
        <Register closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Auth;
