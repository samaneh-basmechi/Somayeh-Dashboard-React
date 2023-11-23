import React from 'react';
import { useTranslation } from 'react-i18next';

const Client = (props) => {
  const {t} = useTranslation();

  return (
    <div className="w-[250px]">
      <label htmlFor="Mandant" className="block mb-2 text-sm font-medium text-black dark:text-white">
        {t('dashboard.fileUploader.client.label')}
      </label>
      <select
        id="Mandant"
        defaultValue="DFDB"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props.register('Mandant', {
          required: t('dashboard.fileUploader.client.error')
        })}>
        <option value="" disabled>
          {t('dashboard.fileUploader.client.defaultOption')}
        </option>
        <option value="DFDB">
          {t('dashboard.fileUploader.client.options.DKBU')}
        </option>
        <option value="DKBU">
          {t('dashboard.fileUploader.client.options.error')}
        </option>
      </select>
      {
        props.errors.Mandant && props.errors.Mandant?.type === 'required' && (
          <p className="text-[red] text-[10px] font-bold mt-1">
            {props.errors.Mandant?.message}
          </p>
        )
      }
    </div>
  );
};

export default Client;
