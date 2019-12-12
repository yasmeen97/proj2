import React, { Component } from 'react';
import './App.css';
import PDFViewer from './components/PDFViewer/PDFViewer';

import WebviewerBackend from './backends/webviewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PDFViewer backend={WebviewerBackend} src='/myPDF.pdf' />
      </div>
    );
  }
}

export default App;