import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  // FlatList,
  Image,
  TouchableOpacity
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';

import Detail from '../../containers/Detail/detail'

export default class List extends Component {
  constructor(props, context) {
    super(props, context)
  }
  loadList() {

  }
  toDetail(index) {
    let page={
      component: Detail,
      title:'bar',
      passProps: {
        index: index
      }
    }
    this.props.pushPage(page)
  }

  render() {
    let data = this.props.data
    return (
      <View style={styles.container}>
        {
          data.map((item,index) => {
            return (
              <TouchableOpacity key={index} onPress={this.toDetail.bind(this,index)}>
                <View style={styles.item}>
                  <Image style={styles.image} resizeMode='cover' source={require('./img/list.png')} />
                  <View style={styles.font}>
                    <View style={styles.fontaround}>
                      <Text style={{fontSize:16,fontWeight:'bold'}}>{item.title}</Text>
                      <Text style={{color: '#aaa'}}>{item.distance}</Text>
                    </View>
                    <Text style={{color: '#aaa'}}>{item.subTitle}</Text>
                    <View style={styles.fontaround}>
                      <Text style={{color: 'rgb(233, 32, 61)',fontWeight:'bold'}}>{item.price+'￥'}</Text>
                      <Text style={{color: '#bbb'}}>{item.number+'月销'}</Text>
                    </View>
                  </View>
                </View> 
              </TouchableOpacity>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#eee',
    borderBottomWidth: 1,
    flex: 1,
    paddingVertical: 10
  },
  font: {
    marginLeft: 5,
    flex: 2,
    padding: 5,
    justifyContent:'space-between'
  },
  fontaround: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'stretch'
  },
  image: {
    flex:1,
    height: 90,
  }
})
