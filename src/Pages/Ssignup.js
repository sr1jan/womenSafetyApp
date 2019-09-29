import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView ,ScrollView } from 'react-native';
import Logo from '../Pages/Logo';
import Tform from '../Pages/Tform';
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {

  render() {
    return(
        <View style={styles.container}>
          <Image 
            style={styles.logoImg}
            source={require('../images/Logo.png')}
          />        
         <Tform/>
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
});