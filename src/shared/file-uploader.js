import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import xmljs from 'xml-js';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
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
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Convert to PDF</button>
    </div>
  );
}

export default FileUploader;