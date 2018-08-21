import Radium from 'radium';
import React from 'react';
import color from 'color';
import logo from '../css-in-js.png';

class Button extends React.Component {
  render() {
    return (
      <header style={[
				styles.header,
				styles[this.props.theme]
			]}>
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">CSS in JS Demo</h1>
				<h4>(Using Radium)</h4>
			</header>
    );
  }
}

Button = Radium(Button);

var styles = {
  header: {
    height: 150,
		padding: 40,
		color: 'white',
	},

  primary: {
		background: 'linear-gradient(to right, #f64f59, #c471ed, #12c2e9)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },

  warning: {
    background: '#FF4136'
  }
};

export default Button;