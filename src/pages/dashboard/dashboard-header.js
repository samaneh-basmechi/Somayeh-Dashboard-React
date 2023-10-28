import React from 'react';
import Menu from '../../assets/images/menu.svg';
import Profile from '../../assets/images/profile.png';
import ChangeLanguage from '../../shared/change-language';
import ThemeSwitch from '../../shared/theme-switch';
import { Link } from 'react-router-dom';

function DashboardHeader(params) {
  return (
    <header className="flex items-center
    h-20 px-6 sm:px-10 bg-black
    border-b-gray-600 border-b border-solid">

      <div className="mr-8 cursor-pointer"
        onClick={params.toggleMenu}>
        <img className="w-8 h-8" src={Menu} alt="" />
      </div>

      <div className="flex flex-shrink-0 items-center ml-auto">
        <Link
          to="profile" className="relative inline-flex items-center
        p-2 hover:bg-gray-800 rounded-lg mr-2">
          <div className="hidden md:flex md:flex-col
          md:items-end md:leading-tight">
            <span className="font-semibold text-white">
              userName@gmail.com
            </span>
            <span className="text-sm text-gray-300">
              userName
            </span>
          </div>
          <span className="h-12 w-12 ml-2 sm:ml-3
          mr-2 bg-gray-100 rounded-full overflow-hidden">
            <img src={Profile} alt="user profile photo"
              className="h-full w-full object-cover" />
          </span>
        </Link>

        <div className="border-l-gray-600 border-l
        border-solid pl-4 space-x-1 flex gap-4 ">
          <ThemeSwitch />
          <ChangeLanguage />
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
