import React from 'react';

export default class RunButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        console.log('Rendering RunButton');
        return (
            <button className={"btn waves-effect waves-light"}>Run
                <i className="material-icons right">send</i>
            </button> 
        );
    }
}