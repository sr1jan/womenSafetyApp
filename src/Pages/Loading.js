import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';
import {
   View, 
   Text, 
   ActivityIndicator, 
   StyleSheet, 
   StatusBar,
   Animated, 
   Image, 
   ImageBackground 
} from 'react-native'

import firebase from 'react-native-firebase';

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return(
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              }
            ]
          },
          this.props.style,
        ]}
      />
    )
  }
}

export default class Loading extends React.Component {
  userCheck=()=> {
    var executed=false;
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        setTimeout(function(){
          if(!executed){
            executed=true;
            Actions.startpage();
          }
        }, 2000);
      } 
      if(!user) {
        setTimeout(function(){
          Actions.fpg()
        }, 2000);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3d5afe" barStyle="light-content" />
        <ImageLoader
          style={styles.logoImg}
          source={require('../images/Logo.png')}/>
          {this.userCheck()}
      </View>
  );  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3d5afe',
  },
  logoImg: {
    resizeMode: 'contain',
    width: 300,
    height: 300,
    tintColor: 'white'
  },
});