import React from 'react';

const NavItem = props => {
  return (
    <li className={`${props.className}`}>
      <a href="#c" className="block py-2 px-6 font-medium">
        {props.children}
      </a>
    </li>
  );
}

export default NavItem;