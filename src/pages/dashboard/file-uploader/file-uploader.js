import React, { useEffect, useState } from 'react';
import vkbeautify from 'vkbeautify';
import xmljs from 'xml-js';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { httpService } from '../../../core/http-service';
import { useForm } from 'react-hook-form';
import { Form, useSubmit } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function FileUploader () {
  const {t} = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [xmlContent, setContent] = useState('');
  const {register, handleSubmit, formState: {errors}} = useForm();
  const submitForm = useSubmit();
  const onSubmit = data => {
    if (!selectedFile) {
      return;
    }
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
    <main className="overflow-auto h-[calc(100vh_-_80px)] p-4 bg-black overflow-auto">
      <div className="bg-gray-800 p-4 rounded overflow-hidden shadow-lg">

        <Form onSubmit={handleSubmit(onSubmit)} className=" gap-6 mb-6">

          <div className="flex gap-3 mb-6">
            {/*Vearbeitungstype*/}
            <div className="w-[250px]">
              <label htmlFor="Vearbeitungstype"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.ProcessType.label')}
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
                  required: t('dashboard.fileUploader.ProcessType.error')
                })}>
                <option value="" disabled>
                  {t('dashboard.fileUploader.ProcessType.defaultOption')}
                </option>
                <option value="Online">
                  {t('dashboard.fileUploader.ProcessType.options.Online')}
                </option>
                <option value="Batch">
                  {t('dashboard.fileUploader.ProcessType.options.Batch')}
                </option>
                <option value="SerialLetter">
                  {t('dashboard.fileUploader.ProcessType.options.SerialLetter')}
                </option>
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
              <label htmlFor="document-type" className="block mb-2 text-sm
              font-medium text-white">
                {t('dashboard.fileUploader.DocumentType.label')}
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
                  required: t('dashboard.fileUploader.DocumentType.error')
                })}>
                <option value="" disabled>
                  {t('dashboard.fileUploader.DocumentType.defaultOption')}
                </option>
                <option value="OM0001">
                  {t('dashboard.fileUploader.DocumentType.options.OM0001')}
                </option>
                <option value="OM0002">
                  {t('dashboard.fileUploader.DocumentType.options.OM0002')}
                </option>
                <option value="OM0003">
                  {t('dashboard.fileUploader.DocumentType.options.OM0003')}
                </option>
                <option value="OM0004A">
                  {t('dashboard.fileUploader.DocumentType.options.OM0004A')}
                </option>
                <option value="OM0005">
                  {t('dashboard.fileUploader.DocumentType.options.OM0005')}
                </option>
                <option value="OM0005A">
                  {t('dashboard.fileUploader.DocumentType.options.OM0005A')}
                </option>
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
            {/*Dokumentenanzahl*/}
            <div className="w-[250px]">
              <label htmlFor="Dokumentenanzahl"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.NumberOfDocuments.label')}
              </label>
              <input type="number" id="Dokumentenanzahl"
                     defaultValue="1"
                     className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                     placeholder={t('dashboard.fileUploader.NumberOfDocuments.placeholder')}
                     {...register('Dokumentenanzahl', {
                       required: t('dashboard.fileUploader.NumberOfDocuments.error')
                     })}
              />
              {
                errors.Dokumentenanzahl && errors.Dokumentenanzahl?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Dokumentenanzahl?.message}
                  </p>
                )
              }
            </div>
            {/*Umgebung*/}
            <div className="w-[250px]">
              <label htmlFor="Vicinity" className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.Vicinity.label')}
              </label>
              <select
                id="Vicinity"
                defaultValue="Dev"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('Umgebung', {
                  required: t('dashboard.fileUploader.Vicinity.error')
                })}>
                <option value="" disabled>
                  {t('dashboard.fileUploader.Vicinity.defaultOption')}
                </option>
                <option value="Dev">
                  {t('dashboard.fileUploader.Vicinity.options.Dev')}
                </option>
              </select>
              {
                errors.Umgebung && errors.Umgebung?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Umgebung?.message}
                  </p>
                )
              }
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            {/*Liefersystem*/}
            <div className="w-[250px]">
              <label htmlFor="Liefersystem"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.DeliverySystem.label')}
              </label>
              <input type="text" id="Liefersystem"
                     className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                     placeholder={t('dashboard.fileUploader.DeliverySystem.placeholder')}
                     {...register('Liefersystem', {
                       required: t('dashboard.fileUploader.DeliverySystem.error')
                     })}/>
              {
                errors.Liefersystem && errors.Liefersystem?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Liefersystem?.message}
                  </p>
                )
              }
            </div>
            {/*Mandant*/}
            <div className="w-[250px]">
              <label htmlFor="Mandant" className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.client.label')}
              </label>
              <select
                id="Mandant"
                defaultValue="DFDB"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('Mandant', {
                  required: t('dashboard.fileUploader.client.error')
                })}>
                <option value="" disabled>
                  {t('dashboard.fileUploader.client.defaultOption')}
                </option>
                <option value="DFDB">
                  {t('dashboard.fileUploader.client.options.DKBU')}
                </option>
                <option value="DKBU">
                  {t('dashboard.fileUploader.client.options.error')}
                </option>
              </select>
              {
                errors.Mandant && errors.Mandant?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Mandant?.message}
                  </p>
                )
              }
            </div>
          </div>

          {/*Payload*/}
          <div className="mb-6 mx-auto bg-gray-800 rounded-md">
            <p
              className="font-normal text-md text-gray-100 mb-4">
              {t('dashboard.fileUploader.payload.title')}
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
                     {t('dashboard.fileUploader.payload.drop')}
                    </span>
                  <span className="font-medium text-gray-300 text-lg">Or</span>
                  <span
                    className="font-normal text-gray-300 text-md
                        inline-block py-2 px-7 border border-gray-300
                        rounded-md cursor-pointer">
                       {t('dashboard.fileUploader.payload.browse')}
                   </span>
                </div>
              </label>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            {/*Payload type*/}
            <div className="w-[250px]">
              <label htmlFor="payload-type" className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.PayloadType.label')}
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
                  required: t('dashboard.fileUploader.PayloadType.error')
                })}>
                <option value="" disabled>
                  {t('dashboard.fileUploader.PayloadType.defaultOption')}
                </option>
                <option value="Inline">{t('dashboard.fileUploader.PayloadType.options.Inline')}</option>
                <option value="Url">{t('dashboard.fileUploader.PayloadType.options.Url')}</option>
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
              <label htmlFor="payload-type" className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.PayloadMIMEType.label')}
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
                  required: t('dashboard.fileUploader.PayloadMIMEType.error')
                })}>
                <option value="" disabled>
                  {t('dashboard.fileUploader.PayloadMIMEType.defaultOption')}
                </option>
                <option value="text/xml">
                  {t('dashboard.fileUploader.PayloadMIMEType.options.text')}
                </option>
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

          <div className="flex gap-3 mb-6">
            {/*Callback URL*/}
            <div className="w-[250px]">
              <label htmlFor="CallbackURL"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.CallbackURL.label')}
              </label>
              <input type="text" id="CallbackURL"
                     className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                     placeholder={t('dashboard.fileUploader.CallbackURL.placeholder')}
                     {...register('CallbackURL', {
                       required: t('dashboard.fileUploader.CallbackURL.error')
                     })}/>
              {
                errors.CallbackURL && errors.CallbackURL?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.CallbackURL?.message}
                  </p>
                )
              }
            </div>
            {/*ErrorURL*/}
            <div className="w-[250px]">
              <label htmlFor="ErrorURL"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.ErrorURL.label')}
              </label>
              <input type="text" id="ErrorURL"
                     className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                     placeholder={t('dashboard.fileUploader.ErrorURL.placeholder')}
                     {...register('ErrorURL', {
                       required: t('dashboard.fileUploader.ErrorURL.error')
                     })}/>
              {
                errors.ErrorURL && errors.ErrorURL?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.ErrorURL?.message}
                  </p>
                )
              }
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            {/*SUID*/}
            <div className="w-[250px]">
              <label htmlFor="SUID"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.SUID.label')}
              </label>
              <input type="text" id="SUID"
                     className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                     placeholder={t('dashboard.fileUploader.SUID.placeholder')}
                     {...register('SUID', {
                       required: t('dashboard.fileUploader.SUID.error')
                     })}/>
              {
                errors.SUID && errors.SUID?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.SUID?.message}
                  </p>
                )
              }
            </div>
            {/*Description*/}
            <div className="w-[250px]">
              <label htmlFor="Description"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.fileUploader.Description.label')}
              </label>
              <input type="text" id="Description"
                     className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                     placeholder={t('dashboard.fileUploader.Description.placeholder')}
                     {...register('Description', {
                       required: t('dashboard.fileUploader.Description.error')
                     })}/>
              {
                errors.Description && errors.Description?.type === 'required' && (
                  <p className="text-[red] text-[10px] font-bold mt-1">
                    {errors.Description?.message}
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
