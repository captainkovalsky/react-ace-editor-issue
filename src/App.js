import React, { useCallback, useRef, useState } from 'react';
import 'ace-builds';
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/mode-javascript";
import AceEditor from 'react-ace';

const init = `
//edit text
`;

const styles = { maxHeight: '200px', display: 'inline-block' };

async function long(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text + `\r\n //updated ${new Date().getTime()}`);
    }, 5 * 1000);
  })
}

function useAction() {
  const doSomething = async (aceEditor) => {
    const value = aceEditor.editor.getValue();
    const result = await long(value);
    aceEditor.editor.setValue(result, 1);
  }

  return {
    doSomething
  }
}

export default function App() {
  const [text, setText] = useState(init);
  const [text2, setText2] = useState(init);

  const { doSomething } = useAction();

  const editorRefs = useRef({});

  const changeText = useCallback((n) => (t) => {
    n === 1 ? setText(t) : setText2(t);
  }, [setText2, setText]
  );

  const changeText1 = useCallback(changeText(1), [changeText]);
  const changeText2 = useCallback(changeText(2), [changeText]);

  return (
    <div>
      <h1>Hello AceEditor!</h1>
      <p>Start editing to see some magic happen :)</p>

      <AceEditor
        mode="javascript"
        theme="tomorrow_night"
        name="editor1"
        value={text}
        onChange={changeText1}
        ref={ref => {
          editorRefs.current['1'] = ref;
        }}
        fontSize={14}
        style={styles}
        editorProps={{ $blockScrolling: true }}
      />
      <button onClick={() => {
        doSomething(editorRefs.current['1']);
      }}>Update text Editor 1</button>
      <hr />
      <AceEditor
        mode="javascript"
        theme="tomorrow_night"
        name="editor2"
        value={text2}
        fontSize={14}
        onChange={changeText2}
        style={styles}
        ref={ref => {
          editorRefs.current['2'] = ref;
        }}
        editorProps={{ $blockScrolling: true }}
      />
      <button onClick={() => {
        doSomething(editorRefs.current['2']);
      }}>Update text Editor 2</button>

    </div>
  );
}
