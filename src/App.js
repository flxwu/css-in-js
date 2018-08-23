import React, { Component } from 'react';
import StyledComponents from './components/StyledComponents';
import Radium from './components/Radium';
import ReactDemo from './components/ReactDemo';
import logo from './css-in-js.png';
import './App.css';

class App extends Component {
	regularCSS() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">CSS in JS Demo</h1>
				<h4>(Using plain CSS)</h4>
			</header>
		);
	}

	render() {
		return (
			<div className="App">
				{this.regularCSS()}
				<hr />
				<ReactDemo />
				<hr />
				<StyledComponents />
				<hr />
				<Radium theme={'primary'} />
				<hr />
			</div>
		);
	}
}

export default App;
