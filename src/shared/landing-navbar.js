import React from "react";
import { Link } from "react-router-dom";
import AppSwitch from "./switch";
import tranlator from '../assets/images/translator.svg';
import ChangeLanguage from "./change-language";

export default function LandingNavbar() {
  return (
    <div className="navbar fixed top-0 inset-x-0 z-[2] bg-white border-b-2 border-black">
      <nav className="flex items-center justify-between h-16 px-10 ">
        <div className="flex items-center">
          <img className="w-24" src="#" alt="Logo" />
        </div>
        <div className="hidden md:flex md:items-center md:justify-center flex-1">
          <div className="flex items-baseline space-x-4">
            <div>
              <Link to="/" className="text-gray-800 hover:text-gray-300 text-2xl font-semibold text-lg">
                Home
              </Link>
            </div>
            <div>
              <Link to="/" className="text-gray-800 hover:text-gray-300 text-2xl font-semibold text-lg">
                contact
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <AppSwitch />
          <ChangeLanguage />
        </div>
      </nav>
    </div>
  );
}
