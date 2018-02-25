import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper'
// import { item_11, item_12 } from '../../constants/items'


export default class Categoty extends Component {
  constructor(props, context) {
    super(props, context)

  }
  backHome() {
    this.props.navigator.pop()
  }
  render() { 
    let h = 200
    return (
        <View style={{height:h,backgroundColor: '#fff'}}>
          <Swiper autoplay={true} height={h}
            paginationStyle={{bottom:5}}
            showsPagination = {true} dotColor="#ccc"
            activeDotColor='#e9203d' horizontal={true}>
            <View>
              <View style={styles.swiperView}>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/jingdian.png')}/>
                  <Text>
                    景点
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/ktv.png')}/>
                  <Text>
                    KTV
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/gouwu.png')}/>
                  <Text>
                    购物
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/shenghuofw.png')}/>
                  <Text>
                    生活服务
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/sports.png')}/>
                  <Text>
                    健身运动
                  </Text>
                </View>
              </View> 
              <View style={styles.swiperView}>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/meifa.png')}/>
                  <Text>
                    美发
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/qinzi.png')}/>
                  <Text>
                    亲子
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/xiaochi.png')}/>
                  <Text>
                    小吃快餐
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/zizhu.png')}/>
                  <Text>
                    自助餐
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/bar.png')}/>
                  <Text>
                    酒吧
                  </Text>
                </View>
              </View>            
            </View>
            <View>
              <View style={styles.swiperView}>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/meishi.png')}/>
                  <Text>
                    美食
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/movie.png')}/>
                  <Text>
                    电影
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/jiudian.png')}/>
                  <Text>
                    酒店
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/xiuxianyule.png')}/>
                  <Text>
                    休闲娱乐
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/waimai.png')}/>
                  <Text>
                    外卖
                  </Text>
                </View>
              </View> 
              <View style={styles.swiperView}>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/huoguo.png')}/>
                  <Text>
                    火锅
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/liren.png')}/>
                  <Text>
                    丽人
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/dujia.png')}/>
                  <Text>
                    度假旅游
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/zuliao.png')}/>
                  <Text>
                    足疗
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/zhoubianyou.png')}/>
                  <Text>
                    周边游
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.swiperView}>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/ribencai.png')}/>
                  <Text>
                    日本菜
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/SPA.png')}/>
                  <Text>
                    SPA
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/jiehun.png')}/>
                  <Text>
                    结婚
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/xuexipeixun.png')}/>
                  <Text>
                    学习培训
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/xican.png')}/>
                  <Text>
                    西餐
                  </Text>
                </View>
              </View> 
              <View style={styles.swiperView}>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/huochejipiao.png')}/>
                  <Text>
                    火车机班
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/shaokao.png')}/>
                  <Text>
                    烧烤
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/jiazhuang.png')}/>
                  <Text>
                    家装
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/chongwu.png')}/>
                  <Text>
                    宠物
                  </Text>
                </View>
                <View style={styles.viewStyle}>
                  <Image style={styles.viewImage} source={require('../../img/quanbufenlei.png')}/>
                  <Text>
                    全部分类
                  </Text>
                </View>
              </View>
            </View>
          </Swiper>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#000'
  },
  swiperView: {
    flexDirection: 'row'
  },
  viewImage: {
    // width: 50,
    height: 70,
    width: 70,
    // backgroundColor:'rgba(0,0,0,0)',
    // resizeMode:Image.resizeMode.center,
  },
  viewStyle: {
    width: '20%',
    height: 80,
    alignItems:'center',
  }
});