import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import logo from '../css-in-js.png';

class StyledComponents extends Component {
	render () {
		return (
			<StyledHeader>
				<StyledImage src={logo} className="App-logo" alt="logo" />
				<StyledTitle level={1} className="App-title">CSS in JS Demo</StyledTitle>
				<StyledTitle level={1.5}>(Using styled-components)</StyledTitle>
			</StyledHeader>
		)
	}
}

const Header = ({ className, children }) => (
	<header className={className}>
		{children}
	</header>
) 

const StyledHeader = styled.header`
	height: 150px;
	padding: 40px;
	color: white;
	background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const StyledImage = styled.img`
	height: 80px;
  animation: ${rotate360} 2s linear infinite;
`
const rotate360 = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

const StyledTitle = styled.h1`
	font-size: ${props => (1/props.level) * 1.5}em;
`

export default StyledComponents