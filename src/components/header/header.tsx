// src/components/Header.tsx
import React from 'react';
import './header.css';
import { BoxIcon } from 'boxicons';

const Header: React.FC = () => {

  return (
    <nav className="navBar">

        <div className='logo'>Logo</div>
        <label className="menuIcon">
        <box-icon name='menu' flip='vertical' ></box-icon>
        </label>
        
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
