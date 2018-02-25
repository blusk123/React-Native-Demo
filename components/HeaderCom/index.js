import React, { Component } from 'react';

import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  // FlatList,
  Image,
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
  		<View style={styles.header}>
  			<View  style={styles.backIcon}>
                 <Icon onPress={this.backHome.bind(this)} style={{marginLeft: 10}} name='chevron-left' size={20} color='#fff' />
            </View>
            <View style={styles.title}>
            	<Text style={styles.titleText}>{this.props.title}</Text>
            </View>
            <View style={{flex: 1}}>
            	
            </View>
  		</View>
  	)
  }
}

const styles = StyleSheet.create({
	header: {
        backgroundColor:"#e9203d",
        flexDirection: 'row',
        paddingTop: 35,
        paddingBottom: 10, 
    },
    backIcon: {
    	flex: 1, 
    	alignItems:'flex-start',
    },
    title: {
    	alignItems:'center',
    	flex: 6
    },
    titleText: {
    	color: '#fff',
    	fontWeight: 'bold',
    	fontSize: 17
    }
})
