// src/components/Header.tsx
import React from 'react';
import './header.css';
const Header: React.FC = () => {

  return (
    <nav className="navBar">

        <div className='logo'>Logo</div>
        <div className='navContainerDesktop'>
          <button className='navIcon'>Home</button>
          <div className='navIcon'>projects</div>
          <div className='navIcon'>personal info</div>
          <div className='navIcon'>contact</div>
        </div>
        <div className='navContainerMobile'>
          <div className='navIcon'>Home</div>
          <div className='navIcon'>projects</div>
          <div className='navIcon'>personal info</div>
          <div className='navIcon'>contact</div>
        </div>

    </nav>
  );
};

export default Header;
