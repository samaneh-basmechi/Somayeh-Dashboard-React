import React, { useEffect, useState } from 'react';
import vkbeautify from 'vkbeautify';
import xmljs from 'xml-js';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { httpService } from '../../../core/http-service';
import { useForm } from 'react-hook-form';
import { Form, useSubmit } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import XmlEditor from './components/xml-editor';
import DocumentType from './components/doument-type';
import ProcessType from './components/process-type';
import DocumentNumber from './components/document-number';
import Vicinity from './components/vicinity';
import DeliverySystem from './components/delivery-system';
import Client from './components/client';
import Payload from './components/payload';
import PayloadType from './components/payload-type';
import PayloadMIMEType from './components/payload-MIME-type';

function FileUploader () {
  const [selectedFile, setSelectedFile] = useState(null);
  const [xmlContent, setXmlContent] = useState('');
  const {t} = useTranslation();
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
        setXmlContent(formattedXml);
      };
      reader.readAsText(selectedFile);
    }
  }, [selectedFile]);

  const handleFileChange = ( event ) => {
    setSelectedFile(event.target.files[ 0 ]);
  };

  const saveAsPdf = () => {
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

  return (
    <main
      className="h-[calc(100vh_-_80px)] p-6 bg-white dark:bg-black overflow-hidden flex gap-4">
      <div className=" bg-white border-[black] border border-solid dark:bg-gray-800 p-4
      rounded shadow-lg border-right w-[300px] overflow-auto
      flex-grow">

        <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-[100%] justify-between">

          <div className="flex gap-3">
            {/*Vearbeitungstype*/}
            <ProcessType register={register} errors={errors}/>
            {/*Document Type*/}
            <DocumentType register={register} errors={errors}/>
          </div>

          <div className="flex gap-3">
            {/*Dokumentenanzahl*/}
            <DocumentNumber register={register} errors={errors}/>

            {/*Umgebung*/}
            <Vicinity register={register} errors={errors}/>
          </div>

          <div className="flex gap-3">
            {/*Liefersystem*/}
            <DeliverySystem register={register} errors={errors}/>

            {/*Mandant*/}
            <Client register={register} errors={errors}/>
          </div>

          {/*Payload*/}
          <Payload handleFileChange={handleFileChange}/>

          <div className="flex gap-3">
            {/*Payload type*/}
            <PayloadType register={register} errors={errors}/>

            {/*Payload MIME Type*/}
            <PayloadMIMEType register={register} errors={errors}/>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="block
              bg-gray-700 dark:bg-black
              text-white py-3 px-3
              rounded-md hover:bg-gradient-to-r
              from-indigo-500 via-purple-500
              to-pink-500 border border-white
              text-center">
              {t('dashboard.fileUploader.submit')}
            </button>
            {/*<button*/}
            {/*  disabled={selectedFile == null}*/}
            {/*  type="button"*/}
            {/*  className={`text-black dark:text-white bg-transparent*/}
            {/*            font-medium rounded-lg */}
            {/*            border border-black dark:border-white */}
            {/*           text-sm px-3 text-center */}
            {/*           ${( selectedFile == null ) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:border-transparent'}`}*/}
            {/*  onClick={saveAsPdf}>*/}
            {/*  Download as json in PDF*/}
            {/*</button>*/}
          </div>
          {!selectedFile && (
            <p className="text-[red] text-[10px] font-bold mt-2">
              {t('dashboard.fileUploader.payload.error')}
            </p>
          )}
        </Form>

      </div>

      <XmlEditor xmlContent={xmlContent} setXmlContent={setXmlContent}/>
    </main>
  );
}

export default FileUploader;

export async function uploadAction ( {request} ) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      access_token: token,
    }
  };
  const response = await httpService.post('/document', data, config);
  return response.status === 200;
}
