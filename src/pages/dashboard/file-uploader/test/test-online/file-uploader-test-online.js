import React, {useEffect, useState} from 'react';
import vkbeautify from 'vkbeautify';
import {useForm} from 'react-hook-form';
import {Form, useSubmit} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {httpService} from "../../../../../core/http-service";
import Payload from "../../components/payload";
import XmlEditor from "../../components/xml-editor";
import DocumentType from "../../components/doument-type"
import Client from "../../components/client"
import OnlineProcessType from "../../components/online-process-type";

function FileUploaderTestOnline() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [xmlContent, setXmlContent] = useState('');
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const submitForm = useSubmit();

    const onSubmit = data => {
        if (!selectedFiles.length) {
            return;
        }
        for (const file of selectedFiles) {
            const form = Object.assign(data, {Payload: btoa(file.content), XMLFilename: file.name});
            submitForm(form, {method: 'post'});
        }
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
        const updatedFiles = [];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const xmlContent = event.target.result;
                const formattedXml = vkbeautify.xml(xmlContent);
                setXmlContent((prevXmlContent) => prevXmlContent + '\n' + formattedXml);

                // Add the file to updatedFiles with the content
                updatedFiles.push({
                    name: file.name,
                    content: xmlContent,
                });

                // Check if all files have been processed
                if (updatedFiles.length === files.length) {
                    setSelectedFiles(updatedFiles);
                }
            };
            reader.readAsText(file);
        });
    };

    return (
        <div className="bg-white dark:bg-black p-6 h-full">
            <h3 className="rounded-md from-indigo-500 via-purple-500 to-pink-500 border border-white p-2 bg-gradient-to-r block font-bold w-full text-gray dark:text-white mb-3">File
                Uploader Test Online</h3>

            <main className="h-[calc(100vh_-_170px)] bg-white dark:bg-black overflow-auto flex gap-4 overflow-auto">
                <div
                    className=" bg-white border-[black] border border-solid dark:bg-gray-800 p-4 rounded shadow-lg border-right w-[300px] overflow-auto flex-grow">

                    <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-[100%] gap-3">

                        <div className="flex gap-3">
                            {/*Vearbeitungstype*/}
                            <OnlineProcessType register={register} errors={errors}/>
                            {/*Dokumentenart*/}
                            <DocumentType register={register} errors={errors}/>
                        </div>

                        <div className="flex gap-3">
                            {/*Mandant*/}
                            <Client register={register} errors={errors}/>
                        </div>

                        {/*Payload*/}
                        <Payload handleFileChange={handleFileChange}/>

                        <div className="flex gap-3 mt-auto">
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

export default FileUploaderTestOnline;

export async function uploadActionTestOnline({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const body = Object.assign(...data, {
        Umgebung: "",
        Dokumentenanzahl: "1",
        Liefersystem: "TEST",
        PayloadMIMEType: "text/xml",
        PayloadType: "Inline"
    })
    const response = await httpService.post('/document', body);
    return response.status === 200;
}
