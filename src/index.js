import ReactDOM from 'react-dom';
import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import './index.css';
import App from './App';

class RNApp extends React.Component {
	render() {
		return (
			<View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

ReactDOM.render(<App />, document.getElementById('root'));
AppRegistry.registerComponent('App', () => RNApp);
AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });