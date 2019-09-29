import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, StatusBar, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import Logo from '../Pages/Logo';
import Tlform from '../Pages/Tlform';
import {Actions} from 'react-native-router-flux';

 
export default class Loginn extends Component {
  
_call(){
  alert("A password reset link has been to your email ID")
}
_call2(){
  Actions.ssignup()
}
  render() {
    return(
        <View style={styles.container}>
          <Image 
            style={styles.logoImg}
            source={require('../images/Logo.png')}
          />
          <Tlform/>
          <TouchableOpacity onPress={this._call}>
            <Text style={styles.forgetPass}> Forget Password </Text>              
          </TouchableOpacity>
          <View style={styles.signUP}>
            <Text style={styles.sign}>Don't have an Account.</Text>
            <TouchableOpacity onPress={this._call2}>
              <Text style={styles.sign}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#3d5afe',
   alignItems :'center',
   justifyContent : 'center',
  },
  logoImg: {
    resizeMode: 'contain',
    width: 250,
    height: 250,
    tintColor: 'white'
  },
  forgetPass: {
    color: 'white',
    padding: 5
  },
  signUP: {
    alignItems :'flex-end',
    justifyContent : 'center',
    paddingVertical: 20,
    flexDirection:'row',
  },
  sign: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18
  },
});