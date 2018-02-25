import React, { Component } from 'react';

import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  // FlatList,
  TextInput,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome'

export default class HeaderCom extends Component {
  constructor(props, context) {
    super(props, context)
  }
  backHome() {
    this.props.onPress()
  }
  render() {
    return (
            <View style={styles.homeHeader}>
                <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.textItems} onPress={this.backHome.bind(this)}>
                        <Icon name='chevron-left' style={styles.textIconDown} />
                    </Text>
                </View>
                <View style={{flex: 7, alignItems:'center'}}>
                    <TextInput style={styles.textInput} placeholder='请输入商品名字' />
                </View>
                <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize: 15, color: '#fff'}}>
                      搜索
                    </Text>
                </View>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeHeader: {
        backgroundColor:"#e9203d",
        flexDirection: 'row',
        paddingTop: 35,
        paddingBottom: 10, 
    },
    textItems: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textIcon: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    textIconDown: {
        fontSize: 18,
        color: '#fff'
    },
    textInput: {
        backgroundColor: '#fff',
        height: 30,
        borderRadius: 15,
        fontSize: 14,
        paddingLeft: 20
    }
})

