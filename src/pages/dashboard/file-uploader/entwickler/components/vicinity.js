import React, { useState } from 'react';


const PapyrusURL = (props) => {
  const [umgebung, setUmgebung] = useState('');
  const [umgebungList, setUmgebungList] = useState([
    { value: 'DEV', label: 'DEV' },
    { value: 'Test', label: 'Test' },
    { value: 'Int', label: 'Int' },
  ]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setUmgebung(inputText);
  };

  const handleBlur = () => {
    const trimmedUmgebung = umgebung.trim();

    if (
      trimmedUmgebung &&
      !umgebungList.some((option) => option.value === trimmedUmgebung)
    ) {
      setUmgebungList([...umgebungList, { label: trimmedUmgebung, value: trimmedUmgebung }]);
      setUmgebung(trimmedUmgebung);
    }
  };

  return (
    <div>
      <label htmlFor="umgebungType" className="block mb-2 text-sm font-medium text-black dark:text-white">
        Umgebung 
      </label>
      <div className="w-[250px]">
        <select
          id="umgebungType"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...props.register('umgebungType')}
          value={umgebung}
          onChange={handleInputChange}
          onBlur={handleBlur}
        >
          {umgebungList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={umgebung}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Umgebung auswählen oder neue eingeben"
          className="mt-3 mb-3 bg-gray-50 border-2 border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default PapyrusURL;
