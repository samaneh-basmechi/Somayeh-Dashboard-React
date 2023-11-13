import React from 'react';
import { useTranslation } from 'react-i18next';

const DeliverySystem = (props) => {
  const {t} = useTranslation();

  return (
    <div className="w-[250px]">
      <label htmlFor="Liefersystem"
             className="block mb-2 text-sm font-medium text-black dark:text-white">
        {t('dashboard.fileUploader.DeliverySystem.label')}
      </label>
      <input type="text" id="Liefersystem"
             className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
             placeholder={t('dashboard.fileUploader.DeliverySystem.placeholder')}
             {...props.register('Liefersystem', {
               required: t('dashboard.fileUploader.DeliverySystem.error')
             })} />
      <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
        {props.errors.Liefersystem?.message}
      </div>
    </div>
  );
};

export default DeliverySystem;
