import React from 'react';
import logo from '../assets/logo.png'

function Logo() {
  return (
    <div className="absolute lg:p-6 p-4 max-w-xs max-h-xs cursor-pointer flex items-center">
      <img className="w-25 h-16 z-10" src={logo} alt="" />
    </div>
  );
}

export default Logo;
 