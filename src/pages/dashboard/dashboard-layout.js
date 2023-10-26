import React, { useState } from 'react';
import DashboardSidebar from './dashboard-sidebar';
import DashboardHeader from './dashboard-header';
import { Outlet } from 'react-router-dom';

function DashboardLayout () {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`flex bg-gray-100 
    min-h-screen anime ${menu ? 'menu' : ''}`}>
      <DashboardSidebar menu={menu}/>
      <div
        className={`anime flex-grow text-gray-800 
        absolute inset-0 overflow-hidden 
        ${menu ? 'ml-200px' : 'ml-50px'}`}>
        <DashboardHeader toggleMenu={toggleMenu}/>
        <Outlet/>
      </div>
    </div>
  );
}

export default DashboardLayout;
