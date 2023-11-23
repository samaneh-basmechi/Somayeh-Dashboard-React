import React from "react";
import ChangeLanguage from "../../shared/change-language";
import ThemeSwitch from "../../shared/theme-switch";

export default function LandingNavbar() {
  return (
    <div className="navbar fixed top-0 inset-x-0 z-[2] bg-white border-b-2 border-black 
    dark:bg-gray-700 dark:shadow-md dark:border-gray-700 ">
      <nav className="flex items-center justify-between h-16 px-10 ">
        <div className="flex items-center">
          <img className="w-24" src="#" alt="Logo" />
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <ChangeLanguage />
        </div>
      </nav>
    </div>
  );
}
