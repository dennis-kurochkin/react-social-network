import React from 'react';
import Nav from './Nav/Nav';

const Sidebar = props => {
  return (
    <aside className={`flex flex-col items-start ${props.className}`}>

      <Nav className="mb-12" />

      <button type="button" className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Settings</button>

    </aside>
  );
}

export default Sidebar;