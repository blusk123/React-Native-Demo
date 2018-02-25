import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Form extends Component {
	constructor(props, context) {
		super(props, context)
	}
	changePhone(e) {
		console.log(e)
	}
	changeCode(e) {
		console.log(e)
	}
	changePwd(e) {
		console.log(e)
	}
	submitHandle() {
		
	}
	render() {
		return (
			<View style={styles.formcontainer}>
				<View style={{flex: 1,alignItems: 'center'}}>
					<View style={styles.inputCon}>
						<Icon style={styles.icon} name='user'/>
	                    <TextInput onChangeText={this.changePhone.bind(this)} 
	                    	style={styles.input} 
	                    	placeholder='请输入手机号码' />
	                </View>
	                <View style={styles.inputCon}>
	                	<Icon style={styles.icon} name='key'/>
	                    <TextInput style={styles.inputY} 
	                    	placeholder='请输入验证码'
	                    	onChangeText={this.changeCode.bind(this)} />
	                    <Text style={{flex: 1,color: '#e9203d'}}>
	                    	发送验证码
	                    </Text>
	                </View>
	                <View style={styles.inputCon}>
	                	<Icon style={styles.icon} name="lock"/>
	                    <TextInput style={styles.input} 
	                    	secureTextEntry={true} 
	                    	placeholder='请输入密码'
	                    	onChangeText={this.changePwd.bind(this)} />
	                </View>
	                <TouchableOpacity style={styles.btn} onPress={this.submitHandle.bind(this)}>
	                	<Text style={styles.btnText}>
	                		登录
	                	</Text>
	                </TouchableOpacity>
				</View>
   			</View>
		)
	}
}

const styles = StyleSheet.create({
	formcontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: '#eee',
		// flexWrap: 'wrap'
	},
	inputCon: {
		width: '80%',
		borderStyle: 'solid',
		borderColor: '#e9203d',
		borderWidth: 1,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		backgroundColor: '#fff',
		marginBottom: 15
	},
	input: {
		flex: 1,	
		height: 30,
		fontSize: 14,
		paddingLeft: 10	
	},
	inputY: {
		flex: 2,	
		height: 30,
		fontSize: 14,
		paddingLeft: 10	
	},
	icon: {
		color: '#e9203d',
		fontSize: 14
	},
	btn: {
		backgroundColor: '#e9203d',
		width: '80%',
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8
	},
	btnText: {
		color: '#fff'
	}
})