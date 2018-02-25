import React, { Component } from 'react';
import {
  // AppRegistry,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  // FlatList
  // Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';
// import HomeAd from '../../../components/HomeAd/index.js'
import ListCom from '../../../components/List/index'


export default class List extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    let {data,loading,pushPage} = this.props
    console.log(loading)
    return (
      <View style={styles.container}>
        <View style={styles.titleCom}>
          <Text style={styles.title}>猜你喜欢</Text>
        </View>
        {
          data ? <ListCom pushPage={pushPage} data={data}/> : 
          <ActivityIndicator size='large' />
        }
        {
          loading ? <ActivityIndicator size='large' /> : null
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 10
  },
  titleCom: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderStyle: 'solid',
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loading: {
    paddingHorizontal: 10
  }
})
