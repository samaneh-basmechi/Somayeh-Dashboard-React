import React, { useState } from 'react';


const Client = (props) => {
  const [Mandant, setMandant] = useState('');
  const [MandantList, setMandantList] = useState([
    { value: 'DFDB', label: 'DFDB' },
    { value: 'DAXA', label: 'DAXA' },
    { value: 'DKBU', label: 'DKBU' },
    { value: 'DAGI', label: 'DAGI' },
  ]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setMandant(inputText);
  };

  const handleBlur = () => {
    const trimmedMandant = Mandant.trim();

    if (
      trimmedMandant &&
      !MandantList.some((option) => option.value === trimmedMandant)
    ) {
      setMandantList([...MandantList, { label: trimmedMandant, value: trimmedMandant }]);
      setMandant(trimmedMandant);
    }
  };

  return (
    <div>
      <label htmlFor="MandantType" className="block mb-4 mt-2 text-sm font-medium text-black dark:text-white">
        Mandant 
      </label>
      <div className="w-[250px]">
        <select
          id="MandantType"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...props.register('MandantType')}
          value={Mandant}
          onChange={handleInputChange}
          onBlur={handleBlur}
        >
          {MandantList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={Mandant}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="neue Mandant eingeben"
          className="mt-3 mb-3 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        />
      </div>
    </div>
  );
};

export default Client;
