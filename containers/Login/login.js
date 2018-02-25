import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';
import HeaderCom from '../../components/HeaderCom/index.js'
import Form from './subpage/form.js'

export default class Login extends Component {
  constructor(props, context) {
    super(props, context)

  }
  backHome() {
    this.props.navigator.pop()
  }
  render() {
    return (
        <View style={styles.container}>
          <HeaderCom onPress={this.backHome.bind(this)} title='登录'/>
          <Form />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
});