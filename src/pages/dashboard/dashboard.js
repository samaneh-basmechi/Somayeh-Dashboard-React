import React, { useState } from 'react';
import Sidebar from './sidebar';
import DashboardHeader from './dashboard-header';
import { Outlet } from 'react-router-dom';

function Dashboard () {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`flex bg-gray-100 
    min-h-screen anime ${menu ? 'menu' : ''}`}>
      <Sidebar menu={menu}/>
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

export default Dashboard;
