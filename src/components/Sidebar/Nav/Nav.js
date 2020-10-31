import React from 'react';
import NavItem from './NavItem/NavItem';

const Nav = props => {
  return (
    <nav className={`w-full bg-white shadow-sm ${props.className}`}>
      <ul className="py-5">

        <NavItem>My Profile</NavItem>

        <NavItem>News</NavItem>

        <NavItem>Messages</NavItem>

        <NavItem>Music</NavItem>

      </ul>
    </nav>
  );
}

export default Nav;