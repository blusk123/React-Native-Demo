import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  // Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';
import HomeAd from '../../../components/HomeAd/index.js'


export default class Adver extends Component {
  constructor(props, context) {
    super(props, context)

  }
  render() {
    return (
      <View>
        <HomeAd />
      </View>
    );
  }
}