import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import CodeEditorToolbar from './CodeEditorToolbar';

export default class CodeEditor extends React.Component {

    constructor(props) {
        super(props);
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
}`
        };
    }

    editor = null;
    

    editorDidMount = (editor) => {
        console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
        editor.focus();
        this.editor = editor;
    }

    componentDidUpdate = () => {
        this.editor.layout();
    }

    onChange = (newValue, e) => {
        console.log('onChange', newValue, e); // eslint-disable-line no-console
        this.setState((prevState, props) => {
            return {
                ...prevState,
                value: newValue
            }
        });
        this.editor.layout();
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
            scrollBeyondLastLine: false,
            scrollbar: {
                vertical: 'visible',
                verticalScrollbarSize: 5
            }
        };
        console.log('Rendering CodeEditor');
        return (
            <div className={'CodeEditor'}>
                <CodeEditorToolbar />
                <MonacoEditor className={'MonacoCodeEditor'}
                    {...this.state}
                    {...this.props}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }
}