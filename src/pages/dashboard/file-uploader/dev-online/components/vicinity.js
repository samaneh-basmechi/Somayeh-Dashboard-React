import React from 'react';
import {useTranslation} from 'react-i18next';

const Vicinity = (props) => {
    const {t} = useTranslation();

    return (
        <div className="w-[250px]">
            <label htmlFor="Vicinity" className="block mb-2 text-sm font-medium text-black dark:text-white">
                Umgebung
            </label>
            <select
                id="Vicinity"
                defaultValue="Dev"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...props.register('Umgebung', {
                    required: t('dashboard.fileUploader.Vicinity.error')
                })}>
                <option value="" disabled>
                    {t('dashboard.fileUploader.Vicinity.defaultOption')}
                </option>
                <option value="Dev">
                    {t('dashboard.fileUploader.Vicinity.options.Dev')}
                </option>
            </select>
            <div className="h-[8px] text-[red] text-[10px] font-bold mt-1">
                {props.errors.Umgebung?.message}
            </div>
        </div>
    );
};

export default Vicinity;
