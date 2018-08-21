import React from 'react';
import { StyleSheet, View, Animated, Easing, Text } from 'react-native';
import logo from '../css-in-js.png';

export default class ReactNative extends React.Component {
	state = {
		spinValue: new Animated.Value(0),
		spin: null,
	}
	
	animation() {
		Animated.sequence([
			Animated.timing(this.state.spinValue, {
				toValue: 1,
				duration: 2000,
				easing: Easing.linear
			}),
			Animated.timing(this.state.spinValue, {
				toValue: 0,
				duration: 1,
			}),
			]).start(() => {
			this.animation();
		})
	}

	componentDidMount() {
		this.animation();
		// First set up animation 
		this.setState({spin: this.state.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg'],
		})})
	}

	render() {
		return (
			<View style={styles.header}>
				<Animated.Image source={logo} style={{transform: [{rotate: this.state.spin}], height: 80, width: 80 }} alt="logo" />
				<Text style={styles.title}>CSS in JS Demo</Text>
				<Text style={styles.subtitle}>(Using React Native Stylesheets)</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	header: {
		height: 150,
		padding: 40,
		color: 'white',
		background: 'linear-gradient(to right, #f64f59, #c471ed, #12c2e9)', 
		flex: 1,
		alignItems: 'center',
		marginBottom: 20,
	},

	title: {
		fontSize: 25,
		fontWeight: '550',
		marginBottom: 20,
		marginTop: 20,
	},

	subtitle: {
		fontSize: 15,
		fontWeight: 'bold',
	}
});