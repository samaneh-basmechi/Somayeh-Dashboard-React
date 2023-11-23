import React, {useEffect, useState} from 'react';
import vkbeautify from 'vkbeautify';
import {useForm} from 'react-hook-form';
import {Form, useSubmit} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
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
import {httpService} from "../../../../core/http-service";

function FileUploaderDevBatch() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [xmlContent, setXmlContent] = useState('');
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const submitForm = useSubmit();

    const onSubmit = data => {
        if (!selectedFiles.length) {
            return;
        }
        const form = Object.assign(data, {Payload: btoa(xmlContent), XMLFilename: 'batchfiles.xml'});
        console.log(form)
        submitForm(form, {method: 'post'});
    };

    useEffect(() => {
        if (selectedFiles.length) {
            const combinedContent = selectedFiles
                .map((file) => file.content)
                .join('\n');

            const formattedXml = vkbeautify.xml(combinedContent);
            setXmlContent(formattedXml);
        }
    }, [selectedFiles]);

    const handleFileChange = (event) => {
        setSelectedFiles([]);
        setXmlContent('');
        const files = Array.from(event.target.files);

        const updatedFiles = files.map((file) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const xmlContent = event.target.result;
                const formattedXml = vkbeautify.xml(xmlContent);
                setXmlContent((prevXmlContent) => prevXmlContent + '\n' + formattedXml);
            };
            reader.readAsText(file);

            return {
                name: file.name,
                content: reader.result,
            };
        });

        setSelectedFiles(updatedFiles);
    };

    return (
        <div className="bg-white dark:bg-black p-6 ">
            <h3 className="block font-bold w-full text-gray dark:text-white mb-3">File Uploader Dev Batch</h3>

            <main  className="h-[calc(100vh_-_100px)] bg-white dark:bg-black overflow-auto flex gap-4 overflow-auto">
                <div className=" bg-white border-[black] border border-solid dark:bg-gray-800 p-4 rounded shadow-lg border-right w-[300px] overflow-auto flex-grow">

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
                        </div>
                        {!selectedFiles && (
                            <p className="text-[red] text-[10px] font-bold mt-2">
                                {t('dashboard.fileUploader.payload.error')}
                            </p>
                        )}
                    </Form>

                </div>
                <XmlEditor xmlContent={xmlContent} setXmlContent={setXmlContent}/>
            </main>

        </div>
    );
}

export default FileUploaderDevBatch;

export async function uploadAction({request}) {
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
