import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  // SectionList
  Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Commet extends Component {
  constructor(props, context) {
    super(props, context)

  }
  render() {
    let icon = [1,2,3,4,5]
    let star = 4
    return (
        <View style={styles.container}>
          <View style={styles.commet}>
            <Image style={styles.image}  source={require('./img/list.png')} />
            <View style={styles.text}>
              <Text style={{fontSize: 22,fontWeight: 'bold'}}>天下第一锅</Text>
              <Text >
                {
                  icon.map((item,index) => {
                    if(item <= star) {
                      return <Icon key={index} name='star'style={{fontSize: 16}} color='#e9203d'/>
                    }else {
                      return <Icon key={index} name='star'style={{fontSize: 16}} />
                    }
                  })
                }
              </Text>
              <Text style={{color: '#e9203d'}}>￥88</Text>
              <Text>重庆&四川 麻辣火锅</Text>
            </View>
          </View>
          <View style={styles.commetText}>
            <Text>营业时间: 11:00 - 21:00</Text>
            <Text>电话订购: 11:00 - 19:00</Text>
            <Text>网络订购: 11:00 - 19:00</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  image: {
    width: '50%',
    height: 120
  },
  commet: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical:10
    // justifyContent: 'space-between'
  },
  text: {
    justifyContent: 'space-between',
    marginLeft: 15
  },
  commetText: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    height: 90,
    justifyContent: 'space-between'
  }
});