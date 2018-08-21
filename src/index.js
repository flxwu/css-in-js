import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';
import './index.css';
import App from './App';
import ReactNative from './components/ReactNative';

ReactDOM.render(<App />, document.getElementById('root'));
AppRegistry.registerComponent('App', () => ReactNative);
AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });