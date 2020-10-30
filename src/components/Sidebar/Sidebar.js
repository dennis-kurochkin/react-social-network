import React from 'react';

const Sidebar = () => {
  return (
    <div className="aside">
      <ul className="aside__nav">
        <li className="aside__nav-item"><a href="#c" className="aside__link">Profile</a></li>
        <li className="aside__nav-item"><a href="#c" className="aside__link">Feed</a></li>
        <li className="aside__nav-item"><a href="#c" className="aside__link">Messages</a></li>
        <li className="aside__nav-item"><a href="#c" className="aside__link">Music</a></li>
      </ul>
      <div className="aside__settings-link">Settings</div>
    </div>
  );
}

export default Sidebar;