import React from 'react';
import logo from './logo.svg';

const Logo = props => {
  return (
    <div className={`flex items-center flex-shrink-0 text-white ${props.className}`}>
      <img src={logo} className="mr-3" width="50" height="50" alt="Social Network" />
      <span className="font-semibold text-xl tracking-tight">Social Network</span>
    </div>
  );
}

export default Logo;