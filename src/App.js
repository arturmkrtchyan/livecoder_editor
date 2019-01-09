import React, {Component} from 'react';
import SplitPane from 'react-split-pane'
import CodeEditor from './CodeEditor'
import Console from './Console'



import './App.css';

class App extends Component {

  handleOnChange = (newSize) => {
    console.log(newSize)
  };
  
  render() {
    return (
      <SplitPane onChange={this.handleOnChange} split="vertical" minSize={350} maxSize={1000} defaultSize={550}>
        <CodeEditor />
        <Console />
      </SplitPane>
    )
  }

}

export default App;
