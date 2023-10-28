import React from 'react';
import { Link } from 'react-router-dom';

import Func from '../../assets/images/func.svg';
import Logout from '../../assets/images/logout.svg';
import User from '../../assets/images/user.svg';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function DashboardSidebar(params) {
  const { t } = useTranslation();

  return (
    <aside
      className={`flex flex-col ${window.outerWidth > 768 ? 'hidden sm:flex sm:flex-col' : ''} ${params.menu ? 'open' : 'close'}`}>
      <span className="inline-flex items-center justify-center h-20 w-full bg-gray-800 ">
        {params.menu && <span className="text-gray-300 text-xl">
          {t('dashboard.sidebar.title')}
        </span>}
      </span>

      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        <nav className="flex flex-col mx-4 my-6 space-y-4">
          <NavLink
            to="users"
            className={` text-white inline-flex items-center 
            py-3 hover:text-white hover:bg-gray-700 focus:text-white
             rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}
            activeclassname="bg-white">
            <img className="w-4 h-4" src={User} alt="" />
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.users')}
            </span>}
          </NavLink>

          <NavLink
            to="func-one"
            className={` text-white inline-flex items-center 
            py-3 hover:text-white hover:bg-gray-700 focus:text-white
             rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}
            activeclassname="bg-white">
            <img className="w-4 h-4" src={Func} alt="" />
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.funcOne')}
            </span>}
          </NavLink>

          <NavLink
            to="func-two"
            className={`inline-flex items-center py-3 text-white hover:text-white 
            hover:bg-gray-700 focus:text-gray-400 rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}
            activeclassname="bg-white">
            <img className="w-4 h-4" src={Func} alt="" />
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.funcTwo')}
            </span>}
          </NavLink>

          <NavLink
            to="func-three"
            className={`inline-flex items-center py-3 text-white hover:text-white 
            hover:bg-gray-700 focus:text-gray-400 rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}
            activeclassname="bg-white">
            <img className="w-4 h-4" src={Func} alt="" />
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.funcTwo')}
            </span>}
          </NavLink>

          <NavLink
            to="func-four"
            className={`inline-flex items-center py-3 text-white hover:text-white 
            hover:bg-gray-700 focus:text-gray-400 rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}
            activeclassname="bg-white">
            <img className="w-4 h-4" src={Func} alt="" />
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.funcTwo')}
            </span>}
          </NavLink>
        </nav>

        <button
          className="text-white border-t-gray-600 border-t border-solid
          hover:bg-gray-700 focus:bg-gray-700 px-2 w-full flex items-center py-2 px-4"
          onClick={params.toggleMenu}>
          <img className="w-6 h-6" src={Logout} alt="" />
          {params.menu &&
            <span className="text-white menu-item-text
            text-gray-400 ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.logout')}
            </span>}
        </button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
