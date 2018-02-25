import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
  // Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';

export default class History extends Component {
  constructor(props, context) {
    super(props, context)

  }
  toList() {
    let data = '1'
    this.props.changeData(data)
  }
  render() {
    let data = [{
      item: '麻辣烫',
    },{
      item: '鸡排',
    },{
      item: '粉条',
    },{
      item: '瘦肉粥',
    },{
      item: '酱爆茄子',
    },{
      item: '冒菜',
    },{
      item: '麻辣香锅',
    },{
      item: '凉皮',
    },{
      item: '寿司',
    }]
    return (
        <View style={styles.container}>
          <View style={styles.h2}>
            <Text>热门搜索</Text>
          </View>
          <View style={styles.BtnContainer}>
            {
              data.map((item,index) => {
                return(
                  <View key={index} style={styles.BtnView}>
                      <View style={styles.btnBorder}>
                        <TouchableOpacity 
                        activeOpacity={1}
                        onPress={this.toList.bind(this)}>
                          <Text style={styles.btn}>{item.item}</Text>
                        </TouchableOpacity>                  
                      </View>                    
                    </View>
                )
              })
            }
          </View>
          <View style={styles.h2}>
            <Text>历史搜索</Text>
          </View>
          <View style={styles.BtnContainer}>
            <View style={styles.btnBorder}>
              <TouchableOpacity onPress={this.toList.bind(this)}>
                <Text style={styles.btn}>麻辣香锅</Text>
              </TouchableOpacity>
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
    paddingHorizontal: 10
  },
  h2: {
    borderStyle: 'solid',
    borderColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  BtnView: {
    paddingRight:8
  },
  BtnContainer: {
    paddingVertical: 7.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnBorder: {
    borderColor: '#aaa',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 7.5,
    paddingHorizontal:5,

    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  btn: {
    color: '#333'
  }
});