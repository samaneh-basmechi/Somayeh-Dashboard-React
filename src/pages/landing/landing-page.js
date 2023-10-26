import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../assets/images/Cover.png';
import { useTranslation } from 'react-i18next';

export default function LandingPge () {
  const {t} = useTranslation();

  return (
    <div className="relative flex items-center h-full p-20">

      <div className="w-2/5 p-2">

        <p className="font-semibold text-3xl mb-5">
          {t('home.title')}
        </p>

        < p className="text-base">
          {t('home.description')}
        </p>

        <Link to="/login">
          <button
            type="button"
            className="mt-8 text-white bg-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-md text-xl px-14 py-4 text-center">
            {t('home.button')}
          </button>
        </Link>

      </div>

      <img className="absolute z-[-1] right-[50px]
       top-20 bottom-0 max-h-[calc(100vh_-_80px)] h-full"
           src={Cover}
           alt="cover"/>
    </div>
  );
}
