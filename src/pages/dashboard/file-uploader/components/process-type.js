import React, { useState } from 'react';


const PapyrusURL = (props) => {
  const [vearbeitungstyp, setvearbeitungstyp] = ('');
  const [vearbeitungstypList, setvearbeitungstypList] = useState([
    { value: 'Online', label: 'Online' },
    { value: 'Batch', label: 'Batch' },
    { value: 'Serialletter', label: 'Serialletter' },
    
  ]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setvearbeitungstyp(inputText);
  };

  const handleBlur = () => {
    const trimmedvearbeitungstyp = vearbeitungstyp.trim();

    if (
      trimmedvearbeitungstyp &&
      !vearbeitungstypList.some((option) => option.value === trimmedvearbeitungstyp)
    ) {
      setvearbeitungstypList([...vearbeitungstypList, { label: trimmedvearbeitungstyp, value: trimmedvearbeitungstyp }]);
      setvearbeitungstyp(trimmedvearbeitungstyp);
    }
  };

  return (
    <div>
      <label htmlFor="vearbeitungstypType" className="block mb-4 mt-2 text-sm font-medium text-black dark:text-white">
        vearbeitungstyp 
      </label>
      <div className="w-[250px]">
        <select
          id="vearbeitungstypType"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...props.register('vearbeitungstypType')}
          value={vearbeitungstyp}
          onChange={handleInputChange}
          onBlur={handleBlur}
        >
          {vearbeitungstypList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={vearbeitungstyp}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="neue vearbeitungstyp eingeben"
          className="mt-3 bg-gray-50 border-2 border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default PapyrusURL;
