import React from 'react';
import { useTranslation } from 'react-i18next';

const PayloadType = (props) => {
  const {t} = useTranslation();

  return (
    <div className="w-[250px]">
      <label htmlFor="payload-type" className="block mb-2 text-sm font-medium text-black dark:text-white">
        {t('dashboard.fileUploader.PayloadType.label')}
      </label>
      <select
        id="payload-type"
        defaultValue="Inline"
        className="bg-gray-50 border border-gray-300
                text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500"
        {...props.register('PayloadType', {
          required: t('dashboard.fileUploader.PayloadType.error')
        })}>
        <option value="" disabled>
          {t('dashboard.fileUploader.PayloadType.defaultOption')}
        </option>
        <option value="Inline">{t('dashboard.fileUploader.PayloadType.options.Inline')}</option>
        <option value="Url">{t('dashboard.fileUploader.PayloadType.options.Url')}</option>
      </select>
      <div className="h-[8px] text-[red] text-[10px] font-bold mt-1">
        {props.errors.PayloadType?.message}
      </div>
    </div>
  );
};

export default PayloadType;
