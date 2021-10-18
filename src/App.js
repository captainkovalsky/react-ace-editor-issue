import React from 'react';
import 'ace-builds';
import AceEditor from 'react-ace';

console.log('ace', ace);
export default function App() {
  return (
    <div>
      <h1>Hello AceEditor!</h1>
      <p>Start editing to see some magic happen :)</p>

      <AceEditor
        mode="javascript"
        theme="tomorrow"
        name="editor"
        value={''}
        fontSize={14}
        setOptions={{
          useWorker: false,
        }}
        editorProps={{ $blockScrolling: true, use }}
      />
    </div>
  );
}
