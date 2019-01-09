import React from 'react';
import MonacoEditor from 'react-monaco-editor'; // Reference: https://github.com/superRaytin/react-monaco-editor

export default class CodeEditor extends React.Component {

    constructor() {
        super();
        this.state = { value: `\nJava environment ready. Hit run to try out some code!`, language: '', theme: "vs-dark", width: 0, height: 0};
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
            contextmenu: false
        };
        //console.log('render');
        return (
            <div className={`Console`}>
                <MonacoEditor
                    {...this.state}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.updateDimensions());
        this.updateDimensions();
    }
    
    updateDimensions() {
        const { innerHeight, innerWidth } = window;
        //console.log(innerHeight);
        //console.log(innerWidth);
        const width = innerWidth;
        const height = innerHeight;
        this.setState({ width, height });
    }
}