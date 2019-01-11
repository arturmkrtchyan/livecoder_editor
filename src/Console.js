import React from 'react';
import MonacoEditor from 'react-monaco-editor'; // Reference: https://github.com/superRaytin/react-monaco-editor

export default class Console extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            value: `\nJava environment ready. Hit run to try out some code!`
        };
    }

    editor = null;
    

    editorDidMount = (editor) => {
        console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
        editor.focus();
        this.editor = editor;
    }

    onChange = (newValue, e) => {
        console.log('onChange', newValue, e); // eslint-disable-line no-console
    }

    render() {
        // Reference: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html
        const options = {
            minimap: { enabled: false },
            selectOnLineNumbers: false,
            roundedSelection: false,
            readOnly: true,
            cursorStyle: 'line',
            automaticLayout: false,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            lineNumbers: 'off',
            contextmenu: false,
            scrollbar: {
                vertical: 'hidden',
                verticalScrollbarSize: 0
            }
        };
        //console.log('render');
        return (
            <div className={`Console`}>
                <MonacoEditor
                    {...this.state}
                    {...this.props}
                    language={''}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }
}