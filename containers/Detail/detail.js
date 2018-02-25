import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList
  // Image,
  // TouchableHighlight
  // NavigatorIOS
} from 'react-native';
import HeaderCom from '../../components/HeaderCom/index.js'
import Commet from './subpage/commet.js'
import List from './subpage/list.js'


export default class Detail extends Component {
  constructor(props, context) {
    super(props, context)

  }
  backHome() {
    this.props.navigator.pop()
  }
  render() {
    return (
        <View style={styles.container}>
          <HeaderCom onPress={this.backHome.bind(this)} title='商品详情' />
          <SectionList 
            sections={[
              {key:1, data:[{key:1}], renderItem:(item) => <Commet />},
              {key:2, data:[{key:2}], renderItem:(item) => <List />}
            ]}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f1f1f1',
  },
});