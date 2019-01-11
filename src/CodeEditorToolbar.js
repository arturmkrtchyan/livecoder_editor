import React from 'react';
import RunButton from './RunButton';

export default class CodeEditorToolbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        console.log('Rendering CodeEditorToolbar');
        return (
            <div className={'CodeEditorToolbar'}>
                <RunButton />
            </div>
        );
    }
}