/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS
} from 'react-native';

import Home from './containers/Home/home'



export default class MyApp extends Component {
  render() {
    return (
        <NavigatorIOS 
          ref='nav'
          initialRoute={{
            component: Home,
            title:'home',
          }} 
          style={{flex: 1}}
          navigationBarHidden={true}
        />
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
