import React from 'react';
import { useTranslation } from 'react-i18next';

const DocumentType = (props) => {
  const {t} = useTranslation();

  return (
    <div className="w-[250px]">
      <label htmlFor="document-type" className="block mb-2 text-sm
              font-medium text-black dark:text-white">
          Dokumentenart
      </label>
      <select
        id="document-type"
        defaultValue="OM001"
        className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props.register('Dokumentenart', {
          required: t('dashboard.fileUploader.DocumentType.error')
        })}>
        <option value="" disabled>
          {t('dashboard.fileUploader.DocumentType.defaultOption')}
        </option>
        <option value="OM0001">
          {t('dashboard.fileUploader.DocumentType.options.OM0001')}
        </option>
        <option value="OM0002">
          {t('dashboard.fileUploader.DocumentType.options.OM0002')}
        </option>
        <option value="OM0003">
          {t('dashboard.fileUploader.DocumentType.options.OM0003')}
        </option>
        <option value="OM0004A">
          {t('dashboard.fileUploader.DocumentType.options.OM0004A')}
        </option>
        <option value="OM0005">
          {t('dashboard.fileUploader.DocumentType.options.OM0005')}
        </option>
        <option value="OM0005A">
          {t('dashboard.fileUploader.DocumentType.options.OM0005A')}
        </option>
      </select>
      <div className="h-[8px] text-[red] text-[10px] font-bold mt-1">
        {props.errors?.Dokumentenart?.message}
      </div>
    </div>
  );
};

export default DocumentType;
