import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Func from '../assets/images/func.svg';
import Logout from '../assets/images/logout.svg';
import Menu from '../assets/images/menu.svg';
import Profile from '../assets/images/profile.png';
import User from '../assets/images/user.svg';

import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import xmljs from 'xml-js';
import vkbeautify from 'vkbeautify';

function AdminPanel () {
  const [menu, setMenu] = useState(true);
  const [panel, setPanel] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const togglePanel = () => {
    setPanel(!panel);
  };

  // func-one
  const [selectedFile, setSelectedFile] = useState(null);
  const [XMLC, setContent] = useState('');
  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = ( event ) => {
        const xmlContent = event.target.result;
        const formattedXml = vkbeautify.xml(xmlContent);
        setContent(formattedXml);
      };
      reader.readAsText(selectedFile);
    }
  }, [selectedFile]);

  const handleFileChange = ( event ) => {
    setSelectedFile(event.target.files[ 0 ]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = ( event ) => {
        const xmlContent = event.target.result;

        const options = {
          compact: true,
          spaces: 4,
        };

        const xmlData = xmljs.xml2json(xmlContent, options);
        const jsonData = JSON.parse(xmlData);

        const pdf = new jsPDF();
        pdf.text(JSON.stringify(jsonData), 10, 10); // Customize the PDF content and layout as needed
        const pdfBlob = pdf.output('blob');

        saveAs(pdfBlob, 'converted.pdf');
      };

      reader.readAsText(selectedFile);
    }
  };

  return (
    <div className={`flex bg-gray-100 min-h-screen anime ${menu ? 'menu' : ''} ${panel ? 'panel' : ''}`}>
      <aside
        className={`flex flex-col ${window.outerWidth > 768 ? 'hidden sm:flex sm:flex-col' : ''} ${menu ? 'open' : 'close'}`}>
        <span className="inline-flex items-center justify-center h-20 w-full bg-gray-800 ">
          {menu && <span className="text-white text-2xl">Dashboard</span>}
        </span>

        <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
          <nav className="flex flex-col mx-4 my-6 space-y-4">
            <Link
              to="/panel/none"
              className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`}
              activeClassName="bg-white">
              <img className="w-6 h-6" src={User} alt=""/>
              {menu && <span className="ml-2 load-animation-nav-item">users</span>}
            </Link>

            <Link
              to="/panel/func-one"
              className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`}
              activeClassName="bg-white">
              <img className="w-6 h-6" src={Func} alt=""/>
              {menu && <span className="ml-2 load-animation-nav-item">Func one</span>}
            </Link>

            <Link
              to="/panel/none"
              className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`}
              activeClassName="bg-white">
              <img className="w-6 h-6" src={Func} alt=""/>
              {menu && <span className="ml-2 load-animation-nav-item">Func two</span>}
            </Link>

            <Link
              to="/panel/none"
              className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`}
              activeClassName="bg-white">
              <img className="w-6 h-6" src={Func} alt=""/>
              {menu && <span className="ml-2 load-animation-nav-item">Func three</span>}
            </Link>
          </nav>

          <button
            className="text-gray-400 border-t-gray-600 border-t border-solid hover:bg-gray-700 focus:bg-gray-700 px-2 w-full flex items-center py-2 px-4"
            onClick={toggleMenu}>
            <img className="w-6 h-6" src={Logout} alt=""/>
            {menu && <span className="menu-item-text text-gray-400 ml-2 load-animation-nav-item">logout</span>}
          </button>
        </div>
      </aside>

      <div
        className={`anime flex-grow text-gray-800 absolute inset-0 overflow-hidden ${menu ? 'ml-200px' : 'ml-50px'}`}>
        <header className="flex items-center h-20 px-6 sm:px-10 bg-black border-b-gray-600 border-b border-solid">
          <div className="mr-8 cursor-pointer" onClick={toggleMenu}>
            <img className="w-8 h-8" src={Menu} alt=""/>
          </div>

          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="relative inline-flex items-center p-2 hover:bg-gray-800 rounded-lg mr-2"
                    onClick={togglePanel}>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold text-white">userName@gmail.com</span>
                <span className="text-sm text-gray-300">userName</span>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <img src={Profile} alt="user profile photo"
                     className="h-full w-full object-cover"/>
              </span>
            </button>

            <div className="border-l-gray-600 border-l border-solid pl-2 space-x-1">
              <button
                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Log out</span>
                <img className="w-6 h-6" src={Logout} alt=""/>
              </button>
            </div>
          </div>
        </header>

        <main className="p-6 sm:p-10 space-y-6 p-6 sm:p-10 space-y-6 bg-black h-full overflow-auto">
          {/*  sample for uploading file*/}
          <div className="bg-gray-800 p-4 rounded overflow-hidden shadow-lg">

            <form className=" gap-6 mb-6">

              <div className="flex gap-3 mb-6">
                {/*Vearbeitungstype*/}
                <div>
                  <label htmlFor="Vearbeitungstype"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Vearbeitungstype</label>
                  <input type="text" id="Vearbeitungstype"
                         className="bg-gray-50 border border-gray-300
                         text-gray-900 text-sm rounded-lg focus:ring-blue-500
                          focus:border-blue-500 block w-full p-2.5
                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Vearbeitungstype"/>
                </div>
                {/*Document Type*/}
                <div>
                  <label htmlFor="document-type"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Document Type
                  </label>
                  <input type="text" id="document-type"
                         className="bg-gray-50 border border-gray-300
                          text-gray-900 text-sm rounded-lg focus:ring-blue-500
                          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Document Type"/>
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                {/*Mandant*/}
                <div>
                  <label htmlFor="Mandant"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mandant</label>
                  <input type="text" id="Mandant"
                         className="bg-gray-50 border border-gray-300 text-gray-900
                         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                          dark:focus:border-blue-500"
                         placeholder="Mandant"/>
                </div>
                {/*XML file name*/}
                <div>
                  <label htmlFor="XML-Filename"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    XML Filename
                  </label>
                  <input type="text" id="XML-Filename"
                         className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                         placeholder="XML Filename"/>
                </div>
              </div>

              {/*Payload*/}
              <div className="mb-6 mx-auto bg-gray-800 rounded-md">
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

              <div className="flex gap-3 mb-6">
                {/*Payload type*/}
                <div>
                  <label htmlFor="payload-type"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Payload Type
                  </label>
                  <input type="text" id="payload-type"
                         className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                         placeholder="Payload Type"/>
                </div>
                {/*Payload MIME Type*/}
                <div>
                  <label htmlFor="Payload-MIME-Type"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Payload MIME Type
                  </label>
                  <input type="text" id="Payload-MIME-Type"
                         className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                         placeholder="Payload MIME Type"/>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="submit"
                        className="text-white bg-blue-700
                      hover:bg-blue-800 focus:ring-4
                      focus:outline-none focus:ring-blue-300 font-medium
                       rounded-lg text-sm w-full sm:w-auto px-5 py-2.5
                       text-center dark:bg-blue-600 dark:hover:bg-blue-700
                       dark:focus:ring-blue-800">Upload
                </button>
                <button
                  disabled={selectedFile == null}
                  type="button"
                  className={`text-white bg-transparent
                        font-medium rounded-lg 
                        border border-white 
                       text-sm w-full sm:w-auto px-5 py-2.5
                       text-center ${( selectedFile == null ) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:border-transparent'}`}
                  onClick={handleUpload}>Download as json in PDF
                </button>
              </div>

            </form>

          </div>

          <div className="bg-gray-800 p-4 rounded overflow-hidden shadow-lg">
            <p className="text-gray-500 mb-4 border-b-gray-500 border-b border-solid pb-4">Content of your uploaded XML file</p>
            <pre className="text-white mb-10">{XMLC}</pre>
          </div>

        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
