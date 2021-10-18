import React, { useEffect, useState } from 'react';
import 'ace-builds';
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/mode-javascript";
import AceEditor from 'react-ace';

const init = `
function test() {
  return null;
}
`;
export default function App() {
  const [text, setText] = useState(init);
  const [text2, setText2] = useState(init);

  return (
    <div>
      <h1>Hello AceEditor!</h1>
      <p>Start editing to see some magic happen :)</p>

      <AceEditor
        mode="javascript"
        theme="tomorrow_night"
        name="editor1"
        value={text}
        fontSize={14}
        style={{ maxHeight: '200px' }}
        editorProps={{ $blockScrolling: true }}
      />
      <hr />
      <AceEditor
        mode="javascript"
        theme="tomorrow_night"
        name="editor2"
        value={text2}
        fontSize={14}
        style={{ maxHeight: '200px' }}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}
