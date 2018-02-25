import React, { Component } from 'react'
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
  // NavigatorIOS
} from 'react-native';
import Login from '../../containers/Login/login'
import City from '../../containers/City/city'
import Icon from 'react-native-vector-icons/FontAwesome'
import Search from '../../containers/Search/search'

export default class HomeHeader extends Component {
    constructor(props, context) {
        super(props, context);
    }
    toPage(component) {
        let { city,changeCity } =this.props
        let page = {
            component: component,
            title:'bar',
            passProps: {
                city: city,
                changeCity: changeCity
            }
        }
        this.props.toLogin(page)
    }
    toSearch() {
        let changeCity = this.props.changeCity
        let page = {
            component: Search,
            title: 'bar',
        }
        this.props.toLogin(page)
    }
    render() {
        let { city } =this.props
        return (
            <View style={styles.homeHeader}>
                <View style={{flex: 2, alignItems:'center', justifyContent:'center'}}>
                    <Text onPress={this.toPage.bind(this,City)} style={styles.textItems}>
                        {city}
                        <Icon name='angle-down' style={styles.textIconDown} />
                    </Text>
                </View>
                <View style={{flex: 7, alignItems:'center'}}>
                    <TextInput onFocus={this.toSearch.bind(this)} style={styles.textInput} placeholder='请输入商品名字' />
                </View>
                <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                    <Text onPress={this.toPage.bind(this,Login)} 
                        ><Icon style={styles.textIcon} name='user'/></Text>
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
        fontSize: 16
    },
    textInput: {
        backgroundColor: '#fff',
        height: 30,
        borderRadius: 15,
        fontSize: 14,
        paddingLeft: 20
    }
})

