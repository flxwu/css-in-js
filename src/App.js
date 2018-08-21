import React, { Component } from 'react';
import StyledComponents from './components/StyledComponents';
import Radium from './components/Radium';
import logo from './css-in-js.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CSS in JS Demo</h1>
          <h4>(Using plain CSS)</h4>
        </header>
        <hr/>
        <StyledComponents/>
        <hr/>
        <Radium theme={'primary'}/>
        <hr/>
      </div>
    );
  }
}

export default App;
