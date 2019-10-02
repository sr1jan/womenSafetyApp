import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container} from "native-base";
import Geolocation from 'react-native-geolocation-service';

// var name, age, address, distance;

// // const user_info = {
// //   name : user.name,
// //   age : user.age,
// //   address : user.address,
// //   distance : user.distance,
// // }
class LocationA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
    };
  }
  componentDidMount(){
          Geolocation.getCurrentPosition(  
       (position) => {
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }
 


  render() {
    return (
      <View>
        <Text> Your Live Location </Text>
        <Text>latitude: {this.state.latitude} </Text>
        <Text>longitude: {this.state.longitude} </Text>
        <Text> {this.state.error} </Text>
      </View>
    );
  }
}
export default class Startpage extends Component {
  callHome() {
    Actions.actionpage()
  }
  logout(){
    firebase.auth().signOut();
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#3d5afe', flex: 1}}>
        <TouchableOpacity onPress={this.logout} >
          <Image 
              style={{resizeMode: 'contain', width: 30, height: 30, alignSelf:'flex-end', tintColor: 'white' }}
              source={require('../images/logout.png')}
            />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.sectionContainer}>
            <Image
              source={require('../images/Logo.png')}
              style={styles.imageLogo}
            />
            <Text style={styles.sectionTitle} onPress={() => Linking.openURL('https://github.com/sr1jan/womenSafetyApp')} >  
              #womenSafety
            </Text>
            <Text style={styles.sectionDescription}>
              For a long time, we have been asking our women to "cover themselves up", to "stay in their limits" or "ignore" cases of harassment.
              It's now reached a tipping point and these age-old methods are proving to be ineffective.
            </Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.button} onPress={this.callHome}>
              <Text style={styles.buttonText}> Emergency </Text>
            </TouchableOpacity>
            <LocationA/>
          </View>
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  sectionContainer: {
    padding: 20,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'white'
  },
  button:{
    width: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginVertical: 10,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff'
  },
  btn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageLogo: {
    resizeMode: 'contain',
    tintColor: 'white',
    width: '35%',
    height: '35%',
  },
  
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});



