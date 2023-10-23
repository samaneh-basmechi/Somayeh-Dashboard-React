import React, { useEffect, useState } from 'react';
import vkbeautify from 'vkbeautify';
import xmljs from 'xml-js';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { httpService } from '../../core/http-service';
import { useForm } from 'react-hook-form';
import { Form, useSubmit, useNavigation, useActionData, useNavigate, useRouteError } from 'react-router-dom';

function FileUploader () {
  const [selectedFile, setSelectedFile] = useState(null);
  const [xmlContent, setContent] = useState('');
  const {register, handleSubmit, formState: {errors}} = useForm();
  const submitForm = useSubmit();
  const onSubmit = data => {
    const form = Object.assign(data, {Payload: btoa(xmlContent), XMLFilename: selectedFile.name});
    submitForm(form, {method: 'post'});
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = ( event ) => {
        const xmlContentConst = event.target.result;
        const formattedXml = vkbeautify.xml(xmlContentConst);
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
        const filename = selectedFile.name;
        saveAs(pdfBlob, filename + '.pdf');
      };

      reader.readAsText(selectedFile);
    }
  };

  return (
    <main className="overflow-auto h-[calc(100vh_-_80px)] p-4 bg-black h-full overflow-auto">
      {/*  sample for uploading file*/}
      <div className="bg-gray-800 p-4 rounded overflow-hidden shadow-lg">

        <Form onSubmit={handleSubmit(onSubmit)} className=" gap-6 mb-6">

          <div className="flex gap-3 mb-6">

            {/*Vearbeitungstype*/}
            <div className="w-[250px]">
              <label htmlFor="Vearbeitungstype"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Vearbeitungstype
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
                {...register('Verarbeitungstyp', {
                  required: 'Please enter your Vearbeitungstype.'
                })}>
                <option value="" disabled>
                  Select Vearbeitungstype
                </option>
                <option value="Online">Online</option>
                <option value="Batch">Batch</option>
                <option value="SerialLetter">SerialLetter</option>
              </select>
              {
                errors.Verarbeitungstyp && errors.Verarbeitungstyp?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Verarbeitungstyp?.message}
                  </p>
                )
              }
            </div>

            {/*Document Type*/}
            <div className="w-[250px]">
              <label htmlFor="document-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Document Type
              </label>
              <select
                id="document-type"
                defaultValue="OM001"
                className="bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('Dokumentenart', {
                  required: 'Please enter your Document Type.'
                })}>
                <option value="" disabled>
                  Select Document Type
                </option>
                <option value="OM001">OM001</option>
                <option value="OM0002">OM0002</option>
                <option value="OM0003">OM0003</option>
                <option value="OM0004A">OM0004A</option>
                <option value="OM0005">OM0005</option>
                <option value="OM0005A">OM0005A</option>
              </select>
              {
                errors.Dokumentenart && errors.Dokumentenart?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Dokumentenart?.message}
                  </p>
                )
              }
            </div>
          </div>

          <div className="flex gap-3 mb-6">

            {/*Vicinity*/}
            <div className="w-[125px]">
              <label htmlFor="Vicinity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Vicinity
              </label>
              <select
                id="Vicinity"
                defaultValue="Dev"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('Umgebung', {
                  required: 'Please enter your Vicinity.'
                })}>
                <option value="" disabled>
                  Select Vicinity
                </option>
                <option value="Dev">Dev</option>
              </select>
              {
                errors.Umgebung && errors.Umgebung?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Umgebung?.message}
                  </p>
                )
              }
            </div>

            {/*Mandant*/}
            <div className="w-[125px]">
              <label htmlFor="Mandant" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Mandant
              </label>
              <select
                id="Mandant"
                defaultValue="DFDB"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('Mandant', {
                  required: 'Please enter your Mandant.'
                })}>
                <option value="" disabled>
                  Select Mandant
                </option>
                <option value="DFDB">DFDB</option>
                <option value="DKBU">DKBU</option>
              </select>
              {
                errors.Mandant && errors.Mandant?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Mandant?.message}
                  </p>
                )
              }
            </div>

            {/* Number of documents*/}
            <div className="w-[250px]">
              <label htmlFor="Dokumentenanzahl"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Number of documents
              </label>
              <input type="number" id="Dokumentenanzahl"
                     defaultValue="1"
                     className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                     placeholder="Number of documents"
                     {...register('Dokumentenanzahl', {
                       required: 'Please enter Number of documents.'
                     })}/>
              {
                errors.Dokumentenanzahl && errors.Dokumentenanzahl?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Dokumentenanzahl?.message}
                  </p>
                )
              }
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
            <div className="w-[250px]">
              <label htmlFor="payload-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Payload Type
              </label>
              <select
                id="payload-type"
                defaultValue="Inline"
                className="bg-gray-50 border border-gray-300
                text-gray-900 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500"
                {...register('PayloadType', {
                  required: 'Please enter your Payload Type.'
                })}>
                <option value="" disabled>
                  Select Payload type
                </option>
                <option value="Inline">Inline</option>
                <option value="Url">Url</option>
              </select>
              {
                errors.PayloadType && errors.PayloadType?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.PayloadType?.message}
                  </p>
                )
              }
            </div>
            {/*Payload MIME Type*/}
            <div className="w-[250px]">
              <label htmlFor="payload-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Payload MIME Type
              </label>
              <select
                id="Payload-MIME-Type"
                defaultValue="text/xml"
                className="bg-gray-50 border border-gray-300
               text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500
               block w-full p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400
               dark:text-white dark:focus:ring-blue-500
               dark:focus:border-blue-500"
                {...register('PayloadMIMEType', {
                  required: 'Please enter your Payload MIME Type.'
                })}>
                <option value="" disabled>
                  Select Payload MIME Type
                </option>
                <option value="text/xml">text/xml</option>
              </select>
              {
                errors.PayloadMIMEType && errors.PayloadMIMEType?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.PayloadMIMEType?.message}
                  </p>
                )
              }
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="block
             bg-black
            text-white py-4 px-4
            rounded-md hover:bg-gradient-to-r
            from-indigo-500 via-purple-500
            to-pink-500 border border-white
            text-center">
              Upload
            </button>
            <button
              disabled={selectedFile == null}
              type="button"
              className={`text-white bg-transparent
                        font-medium rounded-lg 
                        border border-white 
                       text-sm px-5 py-2.5
                       text-center ${( selectedFile == null ) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:border-transparent'}`}
              onClick={handleUpload}>Download as json in PDF
            </button>
          </div>

        </Form>
        {
          !selectedFile && (
            <p className="text-[red] text-[10px] font-bold mt-1">
              Please upload xml file.
            </p>
          )
        }

      </div>

      {selectedFile && (
        <div className="bg-gray-800 p-4 rounded overflow-hidden shadow-lg">
          <p className="text-gray-500 mb-4 border-b-gray-500 border-b border-solid pb-4">Content of your uploaded XML
            file</p>
          <pre className="text-white mb-10">{xmlContent}</pre>
        </div>
      )}
    </main>
  );
}

export default FileUploader;

export async function uploadAction ( {request} ) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const response = await httpService.post('/document', data);
  return response.status === 200;
}
