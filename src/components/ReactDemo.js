import React, { Component } from 'react'
import logo from '../css-in-js.png';

class ReactDemo extends Component {
	render () {
		return (
			<header style={styles.header}>
				<img src={logo} style={styles.image} alt="logo" />
				<h1 style={styles.title}>CSS in JS Demo</h1>
				<h4>(Using React Inline Styles)</h4>
			</header>
		)
	}
}

const styles = {
	header: {
		height: 150,
		padding: 40,
		color: 'white',
		background: 'linear-gradient(to right, #f64f59, #c471ed, #12c2e9)', 
		flex: 1,
		alignItems: 'center',
	},

	title: {
		fontSize: 25,
		fontWeight: '550',
	},

	image: {
		height: 80,
		width: 80,
	},

	subtitle: {
		fontSize: 15,
		fontWeight: 'bold',
	}
};

export default ReactDemo;