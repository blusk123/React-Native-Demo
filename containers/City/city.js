import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';
import HeaderCom from '../../components/HeaderCom/index.js'


export default class City extends Component {
  constructor(props, context) {
    super(props, context)

  }
  backHome() {
    this.props.navigator.pop()
  }
  pressHandle(cityName) {
    let { changeCity } = this.props
    changeCity(cityName)
    this.backHome()
  }
  render() {
    let { city } = this.props
    let data = [{
      cityName: '北京'
    },{
      cityName: '上海'
    },{
      cityName: '广州'
    },{
      cityName: '深圳'
    },{
      cityName: '杭州'
    },{
      cityName: '宁波'
    },{
      cityName: '南京'
    },{
      cityName: '苏州'
    },{
      cityName: '天津'
    },{
      cityName: '青岛'
    },{
      cityName: '成都'
    },{
      cityName: '重庆'
    }]
    return (
        <View style={styles.container}>
          <HeaderCom onPress={this.backHome.bind(this)} title='选择城市' />
          <View style={styles.yourCity}>
            <Text>当前城市：<Text style={{fontWeight: 'bold',color: '#e9203d',fontSize: 16}}>{city}</Text></Text>
          </View>
          <View style={styles.choseCity}>
            <View style={styles.choseText}>
              <Text style={{fontWeight: 'bold'}}>选择你的城市：</Text>
            </View>
            <View style={styles.BtnContainer}>
              {
                data.map((item, index) => {
                  return (
                    <View key={index} style={styles.BtnView}>
                      <View style={styles.btnBorder}>
                        <TouchableOpacity 
                        activeOpacity={1}
                        onPress={this.pressHandle.bind(this,item.cityName)}>
                          <Text style={styles.btn}>{item.cityName}</Text>
                        </TouchableOpacity>                  
                      </View>                    
                    </View>
                  )
                })
              }
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f1f1f1',
  },
  yourCity: {
    height: 70,
    backgroundColor:'#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choseCity: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  choseText: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderStyle: 'solid',
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  BtnContainer: {
    paddingVertical: 7.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  BtnView: {
    width: '33.3%',
    paddingHorizontal: 35
  },
  btnBorder: {
    borderColor: '#e9203d',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  btn: {
    color: '#e9203d'
  }
});