//import needed module
import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import Home from './components/Home';
import App from './components/App';

//rednerring on the device
//must have at registerd 1 component
AppRegistry.registerComponent('app', () => App);
//"app" has to be the same name of the folder name
