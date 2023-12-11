import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PayloadType = (props) => {
  const { t } = useTranslation();
  const [selectedPayloadtype, setSelectedPayloadtype] = useState('');
  const [customPayloadtype, setCustomPayloadtype] = useState('');
  const [PayloadtypeList, setPayloadtypeList] = useState([
    { value: 'Inline', label: 'Inline' },
    { value: 'URI', label: 'URI' },
  ]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setCustomPayloadtype(inputText);
    setSelectedPayloadtype(inputText);
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'custom') {
      setSelectedPayloadtype('');
      setCustomPayloadtype('');
    } else {
      setSelectedPayloadtype(selectedValue);
    }
  };

  const handleBlur = () => {
    const trimmedCustomPayloadtype = customPayloadtype.trim();

    if (
      trimmedCustomPayloadtype &&
      !PayloadtypeList.some((option) => option.value === trimmedCustomPayloadtype)
    ) {
      setPayloadtypeList([...PayloadtypeList, { label: trimmedCustomPayloadtype, value: trimmedCustomPayloadtype }]);
    }
  };

  return (
    <div>
      <label htmlFor="PaylaodType" className="block mb-2 text-sm font-medium text-black dark:text-white">
        PayloadtypeType
      </label>
      <div className="w-[250px]">
       
      <select
        id="PayloadType"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props.register('PaylaodType')}
        value={selectedPayloadtype}
        onChange={handleOptionChange}
      >
        
        {PayloadtypeList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
       
      </select>
      <input
          type="text"
          value={customPayloadtype}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="PayloadType neue Value"
          className="mt-4 bg-gray-50 border-2 border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default PayloadType;
