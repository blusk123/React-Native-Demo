import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  // FlatList,
  Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';


export default class Adver extends Component {
  constructor(props, context) {
    super(props, context)

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleCom}>
          <Text style={styles.title}>超值优惠</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.imageCom}>
            <Image resizeMode='contain' style={styles.image} source={require('./img/ad01.png')} />
          </View>
          <View style={styles.imageComZ}>
            <Image resizeMode='contain' style={styles.image} source={require('./img/ad01.png')} />
          </View>
          <View style={styles.imageCom}>
            <Image resizeMode='contain' style={styles.image} source={require('./img/ad01.png')} />
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.imageCom}>
            <Image resizeMode='contain' style={styles.image} source={require('./img/ad01.png')} />
          </View>
          <View style={styles.imageComZ}>
            <Image resizeMode='contain' style={styles.image} source={require('./img/ad01.png')} />
          </View>
          <View style={styles.imageCom}>
            <Image resizeMode='contain' style={styles.image} source={require('./img/ad01.png')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleCom: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  imageCom: {
    width: '33.3%',
    height: 120,
    alignItems: 'center',
    borderColor: '#eee',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  imageComZ: {
    width: '33.3%',
    height: 120,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#eee',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#eee',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  image: {
    width: '100%',
    height: '100%'
  }
});