import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useTranslation} from 'react-i18next';
import {NavLink} from 'react-router-dom';
import userIcon from '../../assets/images/user.svg';
import funcIcon from '../../assets/images/func.svg';

function MenuItem({menuItem, menu}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            {menuItem.to &&
                <NavLink to={menuItem.to}
                         className={`w-full text-black inline-flex items-center py-3
                                 hover:bg-gray-500 focus:bg-gray-400 dark:text-white
                                 rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`}>


                    {menuItem.icon && (
                        <img
                            className="w-4 h-4 dark:invert"
                            src={menuItem.icon}
                            alt="menu-icon"
                        />
                    )}

                    {menu && <span
                        className="ml-2 load-animation-nav-item">{menuItem.title}</span>}

                    {
                        (menu && menuItem.subItems.length > 0) &&
                        <svg className="stroke-black dark:stroke-white w-4 h-4 ml-auto" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 10">
                            <path stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1.707 2.707 5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586A1 1 0 0 0 13.586 1H2.414a1 1 0 0 0-.707 1.707Z"></path>
                        </svg>
                    }

                </NavLink>
            }
            {!menuItem.to &&
                <button onClick={toggleSubMenu}
                        className={`w-full text-black inline-flex items-center py-3
                                 hover:bg-gray-500 focus:bg-gray-400 dark:text-white
                                 rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`}>


                    {menuItem.icon && (
                        <img
                            className="w-4 h-4 dark:invert"
                            src={menuItem.icon}
                            alt="menu-icon"
                        />
                    )}

                    {menu && <span
                        className="ml-2 load-animation-nav-item">{menuItem.title}</span>}

                    {
                        (menu && menuItem.subItems.length > 0) &&
                        <svg className="stroke-black fill-black  dark:stroke-white dark:fill-white w-3 h-3 ml-auto"
                             aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10">
                            <path stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1.707 2.707 5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586A1 1 0 0 0 13.586 1H2.414a1 1 0 0 0-.707 1.707Z"></path>
                        </svg>
                    }
                </button>
            }

            {isOpen && menuItem.subItems && (
                <ul className="flex flex-col mx-8 space-y-1 my-1">
                    {menuItem.subItems.map((subItem, index) => (
                        <MenuItem key={index} menuItem={subItem} menu={menu}/>
                    ))}
                </ul>
            )}
        </li>
    );
}


function DashboardSidebar(params) {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [permissions, setPermissions] = useState([]);

    useEffect(() => {
        getPermissions();
    }, []);
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const getPermissions = (() => {
        setPermissions(JSON.parse(localStorage.getItem('permissions')));
    });

    const menuItems = [
        {
            title: 'Users',
            subItems: [],
            permission: "isAdmin",
            to: "users",
            icon: userIcon
        },
        {
            title: 'Dev',
            permission: "f1Access",
            subItems: [
                {title: 'Online', subItems: [], to: "dev/online"},
                {title: 'Batch', subItems: [], to: "dev/batch"},
            ],
            icon: funcIcon
        },
        {
            title: 'Int',
            permission: "f2Access",
            subItems: [
                {title: 'Online', subItems: [], to: "int/online"},
                {title: 'Batch', subItems: [], to: "int/batch"},
            ],
            icon: funcIcon
        },
        {
            title: 'Test',
            permission: "f3Access",
            subItems: [
                {title: 'Online', subItems: [], to: "test/online"},
                {title: 'Batch', subItems: [], to: "test/batch"},
            ],
            icon: funcIcon
        },
        {
            title: 'Entwickler',
            subItems: [],
            permission: "f4Access",
            to: "entwickler",
            icon: funcIcon
        },
    ];

    return (
        <aside
            className={`flex flex-col ${window.outerWidth > 768 ? 'hidden sm:flex sm:flex-col' : ''} ${params.menu ? 'open' : 'close'}`}>
      <span
          className="inline-flex items-center justify-center h-20
          w-full bg-white border-r-[black] border-r border-solid dark:bg-gray-800 ">
        {params.menu &&
            <span className="text-black dark:text-gray-300 text-xl">
         Dashboard
        </span>
        }
      </span>

            <div
                className="flex-grow flex flex-col justify-between text-gray-500 bg-white border-r-[black] border-r border-solid  dark:bg-gray-800 ">
                <ul className="flex flex-col mx-4 my-6 space-y-2">
                    {menuItems.map((menuItem, index) => (
                        permissions[menuItem.permission] &&
                        <MenuItem key={index}
                                  menuItem={menuItem}
                                  menu={params.menu}/>
                    ))}
                </ul>

                <button
                    onClick={logout}
                    className="border-t-gray-600 border-t border-solid
                               hover:bg-gray-500 px-2 w-full flex items-center py-2 px-4">
                    <svg className="h-6 w-6 stroke-black dark:stroke-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 18 16">
                        <path strokeLinejoin="round" strokeWidth="2"
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

