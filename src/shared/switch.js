import React, { useState } from 'react';

function AppSwitch() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    // Hier können Sie die Logik zum Ändern des Themas hinzufügen
  };

  return (
    <div id="app">
      <div className="container">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isActive"
            className="hidden"
            checked={isActive}
            onChange={handleToggle}
          />
          <label
            htmlFor="isActive"
            id="slider"
            className={`relative mr-4 w-8 h-4 rounded-full ${
              isActive ? 'bg-gray-600' : 'bg-gray-200'
            } cursor-pointer`}
          >
            <span
              className={`absolute top-1/2 transform -translate-y-1/2 ${
                isActive ? 'right-1' : 'left-1'
              } w-2 h-2 rounded-full bg-white transition duration-300`}
            ></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default AppSwitch;