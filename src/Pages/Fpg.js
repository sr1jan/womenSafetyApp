import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Logo from '../Pages/Logo'
import {Actions} from 'react-native-router-flux';

export default class Flog extends Component {

  _onPressButton() {
      Actions.tlogin()
    }
  _callToStudent(){
    Actions.ssignup()
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3d5afe" barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logoImg}
            source={require('../images/Logo.png')}
          />
          <Text style={styles.logoTxt}> Let's take a step towards safety. </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.touchOpacity} onPress={this._onPressButton}>
            <Text style={styles.textBtn}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchOpacity} onPress={this._callToStudent}>
            <Text style={styles.textBtn}> Signup </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: '#3d5afe'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 60  
  },
  logoTxt: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    color: 'white',
  },
  logoImg: {
    resizeMode: 'contain',
    width: 250,
    height: 250,
    tintColor: 'white'
  },
  textBtn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  touchOpacity: {
    width: '47%', 
    backgroundColor: '#3d5afe',
    padding: 10
  },
  buttonContainer: {
   flexDirection: 'row',
   backgroundColor: 'white',
   position: 'absolute',
   bottom: 0,
   justifyContent: 'space-between',
   width: '100%',
   paddingHorizontal: 60,
   paddingVertical: 10
  },
});