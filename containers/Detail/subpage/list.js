import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  // SectionList
  // Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default class List extends Component {
  constructor(props, context) {
    super(props, context)

  }
  render() {
    let text = []
    for(let i = 0; i < 20; i++) {
      text.push(i)
    }
    let icon = [1,2,3,4,5]
    return (
        <View style={styles.container}>
          {
            text.map((item,index) => {
              let star = Math.floor(Math.random()*3 + 3)
              let items = icon.map((item,index) => {
                if(item <= star) {
                  return <Icon key={index} name='star' style={{fontSize: 16}} color='#e9203d'/>
                }else {
                  return <Icon key={index} name='star' style={{fontSize: 16}} />
                }
              })
              return (
                <View key={index} style={styles.text} >
                  <Text>这是一个评论...</Text>
                  <View style={styles.star}>
                    {items} 
                  </View>
                </View>
              )
            })
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  text: {
    paddingVertical: 10,
    borderStyle: 'solid',
    borderColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  star: {
    flexDirection: 'row',
  }
});