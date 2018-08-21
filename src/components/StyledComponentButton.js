import React, { Component } from 'react';
import styled from 'styled-components';

class StyledComponentButton extends Component {
	state = {
    buttonHovered: false,
  }
	render() {
		return (
			<Button
          onMouseEnter={() => this.setState({ buttonHovered : true })}
          onMouseLeave={() => this.setState({ buttonHovered : false })}
          hovered={this.state.buttonHovered}
        >
				I'm a styled-component button!
			</Button>
		);
	}
}

const Button = styled.button`
  display: inline-block;
  border-radius: 15px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 12rem;
  height: 5rem;
  font-size: 15px;
  ${props => props.hovered && `box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);`}
  color: #ffa260;
  border: 2px solid white;
  background: #333333; 
  background: -webkit-linear-gradient(to right, #dd1818, #333333);  
  background: linear-gradient(to right, #dd1818, #333333);
`
export default StyledComponentButton;