import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../assets/images/Cover.png';
import FileUploader from '../shared/file-uploader';

export default function LandingPge () {
  return (
    <div className="relative flex items-center h-full p-20">
  
      <div className="w-2/5 p-2">

        <p className="font-semibold text-3xl mb-5">
          Willkommen bei der Testumgebung
        </p>

        < p className=" text-base">Erleben Sie die Zukunft der Dokumentenbearbeitung mit uns.
          Melden Sie sich noch heute an und entdecken Sie die unzähligen Möglichkeiten, Ihre Dokumente auf die nächste
          Stufe zu bringen.
        </p>

        <Link to="/Login">
          <button
            type="button"
            className="mt-8 text-white bg-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-md text-xl px-14 py-4 text-center">
            Let's Go
          </button>
        </Link>

      </div>

      <img className="absolute z-[-1] right-[50px] top-20 bottom-0 max-h-[calc(100vh_-_80px)] h-full" src={Cover}
           alt="cover"/>

    </div>
  );
}
