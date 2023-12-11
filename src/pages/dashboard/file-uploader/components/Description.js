import React from "react";
import { useTranslation } from "react-i18next";

const Description = (props) => {
  const { t } = useTranslation();

  return (
    <div className="w-[250px]">
      <label
        htmlFor="Description"
        className="block mb-2 text-sm font-medium text-black dark:text-white"
      >
        Description
      </label>
      <input
        type="text"
        id="Description"
        defaultValue={'Laufnummer 123'}
        className="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500"
        placeholder={t("dashboard.fileUploader.Description.placeholder")}
        {...props.register("Description", {
         
        })}
      />
      <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
        
      </div>
    </div>
  );
};

export default Description;
