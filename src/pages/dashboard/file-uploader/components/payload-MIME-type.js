import React from 'react';
import { useTranslation } from 'react-i18next';

const PayloadMIMEType = (props) => {
  const {t} = useTranslation();

  return (
    <div className="w-[250px]">
      <label htmlFor="payload-type" className="block mb-2 text-sm font-medium text-black dark:text-white">
        {t('dashboard.fileUploader.PayloadMIMEType.label')}
      </label>
      <select
        id="Payload-MIME-Type"
        defaultValue="text/xml"
        className="bg-gray-50 border border-gray-300
               text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500
               block w-full p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400
               dark:text-white dark:focus:ring-blue-500
               dark:focus:border-blue-500"
        {...props.register('PayloadMIMEType', {
          required: t('dashboard.fileUploader.PayloadMIMEType.error')
        })}>
        <option value="" disabled>
          {t('dashboard.fileUploader.PayloadMIMEType.defaultOption')}
        </option>
        <option value="text/xml">
          {t('dashboard.fileUploader.PayloadMIMEType.options.text')}
        </option>
      </select>
      <div className="h-[8px] text-[red] text-[10px] font-bold mt-1">
        {props.errors.PayloadMIMEType?.message}
      </div>
    </div>
  );
};

export default PayloadMIMEType;
