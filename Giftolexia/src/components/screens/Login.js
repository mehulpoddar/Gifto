import React, { Component } from 'react';
import { Text, Image, View, KeyboardAvoidingView } from 'react-native';
import Loginform1 from './LoginForm1';

const iconImg = require('../../images/gifto_icon.png');

export default class Login extends Component {
  render() {
   return (
    <KeyboardAvoidingView style={styles.container}>
     <View style={styles.logoContainer}>
      <Image
       style={styles.logo}
       source={iconImg}
      />
      <Text style={styles.text}>Welcome to Giftolexia!</Text>
     </View>
     <View style={styles.container}>
      <Loginform1 />
     </View>
    </KeyboardAvoidingView>
  );
 }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  text: {
    color: '#fff',
    marginTop: 10,
    fontSize: 26
  }
};
