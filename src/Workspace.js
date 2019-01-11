import React, {Component} from 'react';
import SplitPane from 'react-split-pane'
import CodeEditor from './CodeEditor'
import Console from './Console'

class Workspace extends Component {

  constructor() {
    super();
    const { innerHeight, innerWidth } = window;
    this.state = {
      editorWidth: innerWidth/2,
      editorHeight: innerHeight,
      consoleWidth: innerWidth/2,
      consoleHeight: innerHeight,
      theme: "vs-dark",
      language: "java"
    };

    this.editorMinWidth = 450;
    this.consoleMinWidth = 450;
  }

  handleOnChange = (editorNewWidth) => {
    console.log('SplitPane onChange');
    const { innerHeight, innerWidth } = window;
    const calculatedConsoleWidth = innerWidth - editorNewWidth;
    console.log('Editor New Width: ' + editorNewWidth);
    console.log('Console New Width: ' + calculatedConsoleWidth);
    this.setState({ 
        editorWidth: editorNewWidth, 
        editorHeight: innerHeight - 55,
        consoleWidth: calculatedConsoleWidth,
        consoleHeight: innerHeight
    });
  }

  updateDimensions = () => {
    console.log('updateDimensions');
    const { innerHeight, innerWidth } = window;
    const calculatedConsoleWidth = innerWidth - this.state.editorWidth;
    this.setState((prevState, props) => { 
        return {
            editorHeight: innerHeight - 55, 
            consoleHeight: innerHeight, 
            consoleWidth: calculatedConsoleWidth
        }
    });
  }
  
  render() {
    return (
        <div>
            <SplitPane onChange={this.handleOnChange} split="vertical" minSize={this.editorMinWidth} maxSize={-1 * this.consoleMinWidth} defaultSize={this.state.editorWidth}>
                <CodeEditor language={this.state.language}
                    theme={this.state.theme} 
                    width={this.state.editorWidth} 
                    height={this.state.editorHeight} />
                <Console theme={this.state.theme} 
                    width={this.state.consoleWidth} 
                    height={this.state.consoleHeight} />
            </SplitPane>
            {/* <div className="Footer"> <p>Footer</p></div> */}
        </div>
    )
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

}

export default Workspace;