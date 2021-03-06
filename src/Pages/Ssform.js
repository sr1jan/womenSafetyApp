import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'react-native-firebase';

export default class Logo extends Component {

	state={
		name:'',
		age:'',
		phone: '',
		gender:'',
		address:'',
		rpersonN1:'',
		rpersonN1p:'',
		rpersonN2:'',
		rpersonN2p:'',
		distance:'',
		errorMessage: null,
	}

	writeUserData=()=>{
		var random=Math.floor((Math.random() * 50) + 1);
		var node=this.state.name;
		const user = firebase.auth().currentUser;
		firebase.database().ref('UsersList/'+ user.uid).set({
		name: this.state.name,
		age: this.state.age,
		gender: this.state.gender,
		address: this.state.address,
		phone: this.state.phone,
		rpersonN1: this.state.rpersonN1,
		rpersonN1p: this.state.rpersonN1p,
		rpersonN2: this.state.rpersonN2,
		rpersonN2p: this.state.rpersonN2p,
		distance: random,
		}).then((data)=>{
			//success callback
			console.log('data ' , data)
		}).catch((error)=>{
			//error callback
			console.log('error ' , error)
		})
		Actions.startpage();
	}

	render() {
		return(
			<ScrollView>
				<View style={styles.container}>
					{ this.state.errorMessage &&
						<Text style={{ color: 'red' }}>
						{this.state.errorMessage}
						</Text>
					}
					<TextInput style={styles.inputBox}
					placeholder="Name"
					placeholderTextColor = "#ffffff"
					onChangeText={name => this.setState({ name })}
					value={this.state.name}
					/>
					<TextInput style={styles.inputBox}
					placeholder="Age"
					placeholderTextColor = "#ffffff"
				  keyboardType="number-pad"
					onChangeText={age => this.setState({ age })}
					value={this.state.age}
					/>
					<TextInput style={styles.inputBox}
					placeholder="Gender"
					placeholderTextColor = "#ffffff"
					onChangeText={gender => this.setState({ gender })}
					value={this.state.gender}
					/>
					<TextInput style={styles.inputBox}
					placeholder="Phone Number "
					placeholderTextColor = "#ffffff"
				  keyboardType="number-pad"
					onChangeText={phone => this.setState({ phone })}
						value={this.state.phone}
					/>
					
					<TextInput style={styles.inputBox}
					placeholder="Address"
					placeholderTextColor = "#ffffff"
					onChangeText={address => this.setState({ address })}
						value={this.state.address}
					/>
					<TextInput style={styles.inputBox}
					placeholder="Emergency contact name-1"
					placeholderTextColor = "#ffffff"
					onChangeText={rpersonN1 => this.setState({ rpersonN1 })}
						value={this.state.rpersonN1}
					/>
					<TextInput style={styles.inputBox}
					placeholder="Phone Number"
					placeholderTextColor = "#ffffff"
				  keyboardType="number-pad"
					onChangeText={rpersonN1p => this.setState({ rpersonN1p })}
						value={this.state.rpersonN1p}
					/>
					<TextInput style={styles.inputBox}
					placeholder="Emergency contact name-2"
					placeholderTextColor = "#ffffff"
					onChangeText={rpersonN2 => this.setState({ rpersonN2 })}
						value={this.state.rpersonN2}
					/>
					<TextInput style={styles.inputBox}
					placeholder="Phone number"
					placeholderTextColor = "#ffffff"
				  keyboardType="number-pad"
					onChangeText={rpersonN2p => this.setState({ rpersonN2p })}
						value={this.state.rpersonN2p}
					/>

					<TouchableOpacity style={styles.button} onPress={this.writeUserData}>
					<Text style={styles.buttonText}>Complete SignUp</Text>
					</TouchableOpacity>
		
				</View>
			</ScrollView>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3d5afe',
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	inputBox: {
		width: 300,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		borderRadius: 5,
		paddingHorizontal: 16,
		fontSize: 16,
		color: '#ffffff',
		marginVertical: 7,
	},
	button:{
		width: 150,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderRadius: 15,
		marginVertical: 10,
		paddingVertical: 10
	},
	buttonText: {
		fontSize: 16,
		textAlign: 'center',
		color: '#ffffff'
	}
});