import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SectionList
  // Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';
import Header from '../../components/SearchHeader/index'
import History from './subpage/history'
import List from './subpage/proList'
let initialData = []
for(let i = 0; i<10; i++) {
  initialData.push({
    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145742279-606202974.jpg',
    title: '河束人家',
    subTitle: '南锣鼓巷店爱神的箭好久',
    price: '150',
    distance: '120m',
    number: '389'
  })
}
export default class Search extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      history: null,
      loading: false,
      download: false,
      data: initialData
    }
  }
  backHome() {
    this.props.navigator.pop()
  }
  changeData(history) {
    this.setState({
      loading: true
    })
    if(this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.setState({
        history: history,
        loading: false
      })
    },1000)  
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
      download: true
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
        download: false
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
    let { history,loading,download,data } = this.state
    return (
        <View style={styles.container}>
          <Header onPress={this.backHome.bind(this)} changeData={this.changeData.bind(this)}/>
          <View style={styles.loadingH}>
            {
              history ? 
              <SectionList 
                onEndReachedThreshold={0}
                onEndReached={this.loadMore.bind(this)}
                stickySectionHeadersEnabled={true}
                sections={[
                  {key:2, data:[{key:2}], renderItem:(item) => <List data={data} pushPage={this.pushPage.bind(this)} loading={download}/>}
                ]}/> 
              : <History changeData={this.changeData.bind(this)}/>
            }
            {
              loading ? 
                <View style={styles.loading}>
                  <ActivityIndicator size='large'></ActivityIndicator>
                </View>
              : null
            }
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingH: {
    position: 'relative',
    flex: 1
  }
});