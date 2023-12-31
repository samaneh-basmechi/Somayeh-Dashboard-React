import React, {useEffect, useState} from 'react';
import Profile from '../../assets/images/profile.png';
import ChangeLanguage from '../../shared/change-language';
import ThemeSwitch from '../../shared/theme-switch';
import {Link} from 'react-router-dom';

function DashboardHeader(params) {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        getUserInformation();
    }, []);

    const getUserInformation = (() => {
        setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
    });
    return (
        <header className="flex items-center
        h-20 px-6 sm:px-10 bg-white
        border-b-[black] border-b border-solid
        dark:border-b-gray-600 dark:bg-black">

            <div className="mr-8 cursor-pointer"
                 onClick={params.toggleMenu}>
                <svg className="w-8 h-8 stroke-black dark:stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24">
                    <path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </div>

            <div className="flex flex-shrink-0 items-center ml-auto">
                <Link
                    to="profile" className="relative inline-flex items-center
          p-2 hover:bg-gray-400 rounded-lg mr-2">
                    <div className="flex flex-col items-end leading-tight">
                        <span className="font-semibold text-black dark:text-white">{userInfo?.email}</span>
                        <span className="text-sm text-black dark:text-gray-300">{userInfo?.username}</span>
                    </div>
                    <span className="h-12 w-12 ml-2 sm:ml-3
          mr-2 bg-gray-100 rounded-full overflow-hidden">
            <img src={Profile} alt="user profile photo"
                 className="h-full w-full object-cover"/>
          </span>
                </Link>

                <div className="border-l-gray-600 border-l
        border-solid pl-4 space-x-1 flex gap-4 ">
                    <ThemeSwitch/>
                    <ChangeLanguage/>
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;
