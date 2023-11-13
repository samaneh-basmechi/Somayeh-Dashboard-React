import React from 'react';
import { useTranslation } from 'react-i18next';

const Payload = ( props ) => {
  const {t} = useTranslation();

  return (
    <div className="mb-6 mt-2 mx-auto bg-white dark:bg-gray-800 rounded-md w-[100%]">
      <p className="font-normal text-md text-black dark:text-gray-100 mb-4">
        {t('dashboard.fileUploader.payload.title')}
      </p>

      <div className="mb-5 relative cursor-pointer">
        <input
          accept=".xml"
          onChange={props.handleFileChange}
          type="file"
          name="file"
          id="file"
          className="opacity-0 absolute w-full h-full"/>
        <label
          htmlFor="file"
          className="relative border-dashed border
                     border-black dark:border-gray-300 rounded-md flex items-center
                     justify-center p-4 text-center">
          <div className="flex flex-col gap-3">
                  <span className="font-normal text-black dark:text-gray-300 text-md">
                    {t('dashboard.fileUploader.payload.drop')}
                  </span>
            <span className="font-medium text-black dark:text-gray-300 text-lg">
              {t('dashboard.fileUploader.payload.or')}
            </span>
            <span
              className="font-normal text-black dark:text-gray-300 text-md
                        inline-block py-2 px-7 border border-black dark:border-gray-300
                        rounded-md cursor-pointer">
                    {t('dashboard.fileUploader.payload.browse')}
            </span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Payload;
