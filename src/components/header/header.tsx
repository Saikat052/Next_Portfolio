// src/components/Header.tsx
import React from 'react';
import './header.css';
const Header: React.FC = () => {

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex item-center ">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                LOGO
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className='ml-4 flex item-center space-x-4'>
              <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                HOME
              </a>
              <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                PROJECTS
              </a>
              <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                PERSONAL INFO
              </a>
              <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                CONTACTS
              </a>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <button className='inline-flex items-center justify-center p-2 rounded-nd text-white nd:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focuse;ring-white'></button>
          </div>
        </div>

      </div>

    </nav>
  );
};

export default Header;
