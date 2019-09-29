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
  constructor() {
    super();
    this.unsubscriber = null;
    this.state={
      user: null,
    };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {this.setState({ user });
  });
  }

  call(){
    Actions.fpg()
  }
  call2(){
    Actions.startpage()
  }

  splashScreen() {
    setTimeout(() => {
      {this.state.user ? this.call2() : this.call()}
    }, 2000);
  }

  render( ) {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3d5afe" barStyle="light-content" />
        <ImageLoader
          style={styles.logoImg}
          source={require('../images/Logo.png')}/> 
        {this.splashScreen()}
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