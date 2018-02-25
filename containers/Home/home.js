import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  TouchableHighlight
  // NavigatorIOS
} from 'react-native';

// import Main from '../Main/main'
import HomeHeader from '../../components/HomeHeader/index'
import Category from '../../components/Category/index'
import Adver from './subpage/adver'
import List from './subpage/list'


export default class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      loading: false,
      city: '杭州'
    }
  }
  changeCity(city) {
    this.setState({
      city: city
    })
  }
  pushPage(page) {
    this.props.navigator.push(page)
  }
  loadMore() {
    if(this.timer2) {
      clearTimeout(this.timer2)
    }
    this.timer2 = setTimeout(() => {
      this.loadFn()
    },80)
  }
  loadFn() {
    this.setState({
      loading: true
    })
    let data = []
    for(let i = 0; i<5; i++) {
      data.push({
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145742279-606202974.jpg',
        title: '河束人家',
        subTitle: '南锣鼓巷店爱神的箭好久',
        price: '150',
        distance: '120m',
        number: '389'
      })
    }
    if(this.timer3){
      clearTimeout(this.timer3)
      this.timer3 = null
    }
    this.timer3 = setTimeout(() => {
      this.setState({
        data: this.state.data.concat(data),
        loading: false
      })
    },1000)
    
  }
  componentDidMount() {
    let data = []
    for(let i = 0; i<5; i++) {
      data.push({
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145742279-606202974.jpg',
        title: '河束人家',
        subTitle: '南锣鼓巷店爱神的箭好久',
        price: '150',
        distance: '120m',
        number: '389'
      })
    }
    this.timer = setTimeout(() => {
      this.setState({
        data
      })
    },1000)
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
    clearTimeout(this.timer2)
    clearTimeout(this.timer3)
    this.timer = null
    this.timer2 = null
    this.timer3 = null
  }
  render() {
    let {loading,data,city} = this.state
    return (
      <View style={{flex: 1,backgroundColor:'#f1f1f1'}}>
        <HomeHeader city={city} changeCity={this.changeCity.bind(this)} toLogin={this.pushPage.bind(this)} />
        <SectionList 
          onRefresh={() => console.log(11)}
          refreshing={false}
          onEndReachedThreshold={0}
          onEndReached={this.loadMore.bind(this)}
          stickySectionHeadersEnabled={true}
          ListHeaderComponent={Category}
          sections={[
            {key:1, data:[{key:1}], renderItem:(item) => <Adver />},
            {key:2, data:[{key:2}], renderItem:(item) => <List data={data} pushPage={this.pushPage.bind(this)} loading={loading}/>}
          ]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //背景图片 style设置
  backImage: {
    flex:1,
    width:null,
    height:null,
    //不加这句，就是按照屏幕高度自适应
    //加上这几，就是按照屏幕自适应
    resizeMode:Image.resizeMode.contain,
    //祛除内部元素的白色背景
    backgroundColor:'rgba(0,0,0,0)',
  },
});