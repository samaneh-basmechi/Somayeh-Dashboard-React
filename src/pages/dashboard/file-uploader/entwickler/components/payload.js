import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

const Payload = (props) => {
    const {t} = useTranslation();
    const [customPayload, setCustomPayload] = useState(false);

    return (
        <>
            <div>
                <input
                    type="checkbox"
                    id='custom-payload'
                    checked={customPayload}
                    onChange={(event) => setCustomPayload(!customPayload)}
                    className="mr-2 text-blue-400 cursor-pointer"/>
                <label
                    className="text-gary dark:text-white cursor-pointer"
                    htmlFor='custom-payload'>
                    Custom Payload
                </label>
            </div>

            {customPayload === false && (
                <div className=" mt-2 mx-auto bg-white dark:bg-gray-800 rounded-md w-[100%]">

                    <div className="mb-2 relative cursor-pointer">
                        <input
                            accept=".xml"
                            onChange={props.handleFileChange}
                            type="file"
                            name="file"
                            id="file"
                            className="opacity-0 absolute w-full h-full"
                            multiple
                        />
                        <label
                            htmlFor="file"
                            className="relative border-dashed border border-black dark:border-gray-300 rounded-md flex items-center justify-center p-4 text-center"
                        >
                            <div className="flex flex-col gap-3">
            <span className="font-normal text-black dark:text-gray-300 text-md">
              {t('dashboard.fileUploader.payload.drop')}
            </span>
                                <span className="font-medium text-black dark:text-gray-300 text-lg">
              {t('dashboard.fileUploader.payload.or')}
            </span>
                                <span
                                    className="font-normal text-black dark:text-gray-300 text-md inline-block py-2 px-7 border border-black dark:border-gray-300 rounded-md cursor-pointer">
              {t('dashboard.fileUploader.payload.browse')}
            </span>
                            </div>
                        </label>
                    </div>
                </div>
            )}

            {customPayload === true && (
                <div>
                <textarea
                    id='custom-payload-input'
                    placeholder="Custom Payload"
                    rows="7"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                     dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </textarea>
                </div>
            )}


        </>

    );
};

export default Payload;
