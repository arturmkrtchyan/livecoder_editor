import React from 'react';
import ReactDOM from 'react-dom';
import MonacoEditor from 'react-monaco-editor'; // Reference: https://github.com/superRaytin/react-monaco-editor

export default class CodeEditor extends React.Component {

    constructor() {
        super();
        this.state = { 
            value: `import java.io.*;
import java.util.*;

/*
 * To execute the code below, hit the run button.
 */
public class Solution {
    public static void main(String[] args) {
        System.out.println("Hello world");
    }
}`, 
            language: 'java', 
            theme: "vs-dark",
            width: 0,
            height: 0 
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
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: false,
            wordWrap: 'on',
            scrollBeyondLastLine: false
        };
        //console.log('render');
        return (
            <div className={`CodeEditor`}>
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
        // ugly workaround
        window.addEventListener('mousemove', () => this.updateDimensions());
        this.updateDimensions();
    }
    
    updateDimensions() {
        const { innerHeight } = window;
        // ugly workaround
        const { offsetWidth } = ReactDOM.findDOMNode(this).parentNode;
        const width = offsetWidth;
        const height = innerHeight;
        this.setState({ width, height });
    }
}