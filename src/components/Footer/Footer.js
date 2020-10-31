import React from 'react';

const Footer = props => {
  return (
    <footer className={`p-6 bg-white shadow-xs ${props.className}`}>
      <p className="text-center">
        Made by <a
          href="#c"
          className="text-teal-600 hover:text-teal-700 hover:underline transition-all"
        > Dennis Kurochkin </a> with 💖
      </p>
    </footer>
  );
}

export default Footer;