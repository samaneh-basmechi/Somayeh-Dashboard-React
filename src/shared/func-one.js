import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import xmljs from 'xml-js';

const FuncOneComponent = () => {

  return (
    <div className="mx-auto bg-gray-800 rounded-md">
      <p className="font-normal text-md text-gray-100 mb-4">
        Upload File
      </p>

      <div className="mb-5 relative">
        <input
          onChange={handleFileChange}
          type="file"
          name="file"
          id="file"
          className="opacity-0 absolute w-full h-full"/>
        <label
          htmlFor="file"
          className="relative border-dashed border
           border-gray-300 rounded-md flex items-center
           justify-center p-4 text-center">
          <div className="flex flex-col gap-3">
            <span className="font-normal text-gray-300 text-md">
                  Drop files here
            </span>
            <span className="font-medium text-gray-300 text-lg">Or</span>
            <span
              className="font-normal text-gray-300 text-md
               inline-block py-2 px-7 border border-gray-300
               rounded-md cursor-pointer">
                  Browse
                </span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FuncOneComponent;
