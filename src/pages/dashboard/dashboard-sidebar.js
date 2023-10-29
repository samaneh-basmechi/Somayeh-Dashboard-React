import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Func from '../../assets/images/func.svg';
import Logout from '../../assets/images/logout.svg';
import User from '../../assets/images/user.svg';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function DashboardSidebar ( params ) {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <aside
      className={`flex flex-col ${window.outerWidth > 768 ? 'hidden sm:flex sm:flex-col' : ''} ${params.menu ? 'open' : 'close'}`}>
      <span className="inline-flex items-center justify-center h-20 w-full bg-gray-300 dark:bg-gray-800 ">
        {params.menu && <span className="text-black dark:text-gray-300 text-xl">
          {t('dashboard.sidebar.title')}
        </span>}
      </span>

      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-300 dark:bg-gray-800 ">
        <nav className="flex flex-col mx-4 my-6 space-y-4">
          <NavLink
            to="users"
            className={` text-black inline-flex items-center py-3 
            hover:bg-gray-500 focus:bg-gray-400 dark:text-white
             rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}>
            <svg className="stroke-black dark:stroke-white w-4 h-4" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
            </svg>
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.users')}
            </span>}
          </NavLink>

          <NavLink
            to="func-one"
            className={` inline-flex items-center py-3 text-black
            hover:bg-gray-500 focus:bg-gray-400 dark:text-white
             rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}>
            <svg className="fill-black dark:fill-white w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 18 18">
              <path
                d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/>
              <path
                d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"/>
            </svg>
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.funcOne')}
            </span>}
          </NavLink>

          <NavLink
            to="func-two"
            className={`inline-flex items-center py-3 text-black 
            dark:text-white hover:bg-gray-500 focus:bg-gray-400
            rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}>
            <svg className="fill-black dark:fill-white w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 18 18">
              <path
                d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/>
              <path
                d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"/>
            </svg>
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.funcTwo')}
            </span>}
          </NavLink>

          <NavLink
            to="func-three"
            className={`inline-flex items-center py-3 text-black 
            dark:text-white hover:bg-gray-500 focus:bg-gray-400
            rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}
            activeclassname="bg-white">
            <svg className="fill-black dark:fill-white w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 18 18">
              <path
                d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/>
              <path
                d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"/>
            </svg>
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.funcTwo')}
            </span>}
          </NavLink>

          <NavLink
            to="func-four"
            className={`inline-flex items-center py-3 text-black 
            dark:text-white hover:bg-gray-500 focus:bg-gray-400
            rounded-lg px-2 ${params.menu ? 'justify-start' : 'justify-center'}`}
            activeclassname="bg-white">
            <svg className="fill-black dark:fill-white w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 18 18">
              <path
                d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/>
              <path
                d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"/>
            </svg>
            {params.menu && <span className="ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.link.funcTwo')}
            </span>}
          </NavLink>
        </nav>

        <button
          onClick={logout}
          className="border-t-gray-600 border-t border-solid
          hover:bg-gray-500 px-2 w-full flex items-center py-2 px-4">
          <svg className="h-6 w-6 stroke-black dark:stroke-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 18 16">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
          </svg>
          {params.menu &&
            <span className="text-black dark:text-white menu-item-text
           ml-2 load-animation-nav-item">
              {t('dashboard.sidebar.logout')}
            </span>}
        </button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
