import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../assets/images/Cover.png';
import { useTranslation } from 'react-i18next';

export default function LandingPage () {
  const {t} = useTranslation();

  return (
    <div className="relative flex items-center h-full p-20">

      <div className="w-2/5 p-2 flex flex-col items-start gap-4">

        <p className="font-semibold text-3xl dark:text-white">
          {t('home.title')}
        </p>

        < p className="text-base dark:text-white">
          {t('home.description')}
        </p>

        <Link to="/login"
              type="button"
              className="text-white bg-black hover:bg-gradient-to-r
          from-indigo-500 via-purple-500 to-pink-500 rounded-md
          text-xl px-14 py-4 text-center dark:bg-gray-700 dark:border-gray-700">
          {t('home.button')}
        </Link>

      </div>

      <img className="absolute z-[-1] right-[50px]
       top-20 bottom-0 max-h-[calc(100vh_-_80px)] h-full"
           src={Cover}
           alt="cover"/>
    </div>
  );
}
