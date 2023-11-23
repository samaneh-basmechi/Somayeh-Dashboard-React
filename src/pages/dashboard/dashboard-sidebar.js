import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useTranslation} from 'react-i18next';
import {NavLink} from 'react-router-dom';

function MenuItem({menuItem, menu}) {
    const {t} = useTranslation();
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

                    <svg className="stroke-black dark:stroke-white w-6 h-6" aria-hidden="true"
                         viewBox="0 0 24 24" width="512" height="512">
                        <g id="_01_align_center" data-name="01 align center">
                            <path
                                d="M12,19a7,7,0,1,1,7-7A7.008,7.008,0,0,1,12,19ZM12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Z"/>
                        </g>
                    </svg>

                    {menu && <span
                        className="ml-2 load-animation-nav-item">{t(`dashboard.sidebar.link.${menuItem.title}`)}</span>}

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

                    <svg className="stroke-black dark:stroke-white w-6 h-6" aria-hidden="true"
                         viewBox="0 0 24 24" width="512" height="512">
                        <g id="_01_align_center" data-name="01 align center">
                            <path
                                d="M12,19a7,7,0,1,1,7-7A7.008,7.008,0,0,1,12,19ZM12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Z"/>
                        </g>
                    </svg>

                    {menu && <span
                        className="ml-2 load-animation-nav-item">{t(`dashboard.sidebar.link.${menuItem.title}`)}</span>}

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
                </button>
            }

            {isOpen && menuItem.subItems && (
                <ul className="flex flex-col mx-4 my-6 space-y-4">
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
        localStorage.removeItem('token');
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
        },
        {
            title: 'Dev',
            permission: "f1Access",
            subItems: [
                {title: 'Online', subItems: [], to: "dev/online"},
                {title: 'Batch', subItems: [], to: "dev/batch"},
            ],
        },
        {
            title: 'Int',
            subItems: [],
            permission: "f2Access",
            to: "int",
        },
        // {title: 'Prod', subItems: [] ,permission: "f3Access", to: "prod",},
    ];

    return (
        <aside
            className={`flex flex-col ${window.outerWidth > 768 ? 'hidden sm:flex sm:flex-col' : ''} ${params.menu ? 'open' : 'close'}`}>
      <span
          className="inline-flex items-center justify-center h-20
          w-full bg-white border-r-[black] border-r border-solid dark:bg-gray-800 ">
        {params.menu &&
            <span className="text-black dark:text-gray-300 text-xl">
          {t('dashboard.sidebar.title')}
        </span>
        }
      </span>

            <div
                className="flex-grow flex flex-col justify-between text-gray-500 bg-white border-r-[black] border-r border-solid  dark:bg-gray-800 ">
                <ul className="flex flex-col mx-4 my-6 space-y-4">
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

