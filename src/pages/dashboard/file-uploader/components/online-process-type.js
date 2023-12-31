import React from 'react';
import { useTranslation } from 'react-i18next';

const OnlineProcessType = (props) => {
    const {t} = useTranslation();

    return (
        <div className="w-[250px] grow">
            <label htmlFor="Vearbeitungstype"
                   className="block mb-2 text-sm font-medium text-black dark:text-white">
                Verarbeitungstyp
            </label>
            <select
                id="Vearbeitungstype"
                defaultValue="Online"
                className="bg-gray-50 border border-gray-300
                text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block
                w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...props.register('Verarbeitungstyp', {
                    required: t('dashboard.fileUploader.ProcessType.error')
                })}>
                <option value="" disabled>
                    Select Verarbeitungstyp
                </option>
                <option value="Online">
                    Online
                </option>
            </select>
            <div className="h-[8px] text-[red] text-[10px] font-bold mt-1">
                {props.errors.Verarbeitungstyp?.message}
            </div>
        </div>
    );
};

export default OnlineProcessType;
