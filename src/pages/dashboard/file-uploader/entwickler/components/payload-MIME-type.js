import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PayloadMIME = (props) => {
  const { t } = useTranslation();
  const [selectedPayloadMIME, setSelectedPayloadMIME] = useState('');
  const [customPayloadMIME, setCustomPayloadMIME] = useState('');
  const [PayloadMIMEList, setPayloadMIMEList] = useState([
    { value: 'tetx/xml', label: 'tetx/xml' },
  
  ]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setCustomPayloadMIME(inputText);
    setSelectedPayloadMIME(inputText);
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'custom') {
      setSelectedPayloadMIME('');
      setCustomPayloadMIME('');
    } else {
      setSelectedPayloadMIME(selectedValue);
    }
  };

  const handleBlur = () => {
    const trimmedCustomPayloadMIME = customPayloadMIME.trim();

    if (
      trimmedCustomPayloadMIME &&
      !PayloadMIMEList.some((option) => option.value === trimmedCustomPayloadMIME)
    ) {
      setPayloadMIMEList([...PayloadMIMEList, { label: trimmedCustomPayloadMIME, value: trimmedCustomPayloadMIME }]);
    }
  };

  return (
    <div>
      <label htmlFor="PayloadMIME" className="block mb-2 text-sm font-medium text-black dark:text-white">
        PayloadMIMEType
      </label>
      <div className="w-[250px]">
       
      <select
        id="PayloadMIME"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props.register('PaylaodMIME')}
        value={selectedPayloadMIME}
        onChange={handleOptionChange}
      >
        {PayloadMIMEList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
       
      </select>
      <input
          type="text"
          value={customPayloadMIME}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="PayloadMIME neue Value"
          className="mt-4 bg-gray-50 border-2 border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default PayloadMIME;
