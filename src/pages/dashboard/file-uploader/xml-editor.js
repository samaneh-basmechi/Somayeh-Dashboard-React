import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/xml';
import 'brace/theme/twilight';

function XmlEditor(params) {

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg flex-grow overflow-hidden pb-4">
      <p className="text-white mb-4 border-b-gray-500 border-b border-solid pb-4">Content of your uploaded XML file</p>
      <AceEditor
        mode="xml"
        theme="twilight" // Choose your preferred theme
        width="100%"
        height="93%"
        value={params.xmlContent}
        onChange={(newContent) => params.setXmlContent(newContent)}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
        }} />
    </div>
  );
}

export default XmlEditor;



