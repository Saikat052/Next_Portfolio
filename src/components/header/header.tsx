// src/components/Header.tsx
import React from 'react';
import './header.css';
const Header: React.FC = () => {

  return (
    <nav className="navBar">

        <div className='logo'>Logo</div>
        
        <div className='navContainerDesktop'>
        <a href="/" className='navLink'>Home</a>
        <a href="/" className='navLink'>Projects</a>
        <a href="/" className='navLink'>Personal Info</a>
        <a href="/" className='navLink'>Contact</a>
        </div>
        <div className='navContainerMobile'>
        <a href="/" className='navLink'>Home</a>
        <a href="/" className='navLink'>Projects</a>
        <a href="/" className='navLink'>Personal Info</a>
        <a href="/" className='navLink'>Contact</a>
        </div>

    </nav>
  );
};

export default Header;
