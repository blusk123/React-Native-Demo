import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
  ActivityIndicator
  // Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';
import List from '../../../components/List/index'

export default class Login extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    let { data,loading,pushPage } = this.props
    console.log(data,loading)
      return (
        <View style={styles.container}>
          {
            data ?
            <List pushPage={pushPage} data={data}/>
            : null
          }

          {
            loading ? <ActivityIndicator size='large' /> : null
          }
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
});