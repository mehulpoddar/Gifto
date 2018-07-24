import React, { Component } from 'react';
import { Text, Image, View,
         KeyboardAvoidingView, StatusBar,
         TextInput, TouchableOpacity,
         Alert, Linking, Keyboard }
from 'react-native';
import firebase from 'firebase';
import { Spinner } from '../common';

const iconImg = require('../../images/gifto_icon.png');

export default class Login extends Component {
  state = { email: '', password: '', error: '', loading: false, loggedIn: true };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.onLoginSuccess();
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onLogInPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    Keyboard.dismiss();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
     .catch(this.onLoginFail.bind(this));
  }

  onSignUpPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    Keyboard.dismiss();
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
     .catch(this.onLoginFail.bind(this));
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    this.props.navigation.navigate('levelsDash');
  }

  loadingSpinner() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
  }

  forgotPassword() {
    firebase.auth().sendPasswordResetEmail(this.state.email)
    .then(Alert.alert('Reset Email has been sent to your Email ID!'))
     .catch(this.forgotPasswordFail.bind(this));
  }

  forgotPasswordFail() {
    Alert.alert('Please enter a valid Email ID!');
  }

  render() {
    if (!this.state.loggedIn) {
   return (
    <KeyboardAvoidingView style={styles.mainContainer}>
    <View style={styles.mainContainer}>
     <View style={styles.logoContainer}>
      <Image
       style={styles.logo}
       source={iconImg}
      />
      <Text style={styles.text}>Welcome to Giftolexia!</Text>
     </View>
     <View style={styles.container}>
     <View style={styles.container}>
      <StatusBar
       barStyle="light-content"
      />
      <TextInput
       placeholder="user@email.com"
       returnKeyType="next"
       onSubmitEditing={() => this.passwordInput.focus()}
       underlineColorAndroid='rgba(0,0,0,0)'
       keyboardType="email-address"
       autoCapitalize="none"
       autoCorrect={false}
       style={styles.input}
       value={this.state.email}
       onChangeText={email => this.setState({ email })}
      />

      <TextInput
      placeholder="password"
      underlineColorAndroid='rgba(0,0,0,0)'
      style={styles.input}
      secureTextEntry
      returnKeyType="go"
      ref={(input) => this.passwordInput = input }
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      />

      <Text style={styles.errorTextStyle}>
       {this.state.error}
      </Text>

      <TouchableOpacity
       style={styles.logInContainer}
       onPress={this.onLogInPress.bind(this)}
      >
       <Text style={styles.buttonText}>LOG IN</Text>
     </TouchableOpacity>

     <TouchableOpacity
      style={styles.signUpContainer}
      onPress={this.onSignUpPress.bind(this)}
     >
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={this.forgotPassword.bind(this)}>
     <Text style={styles.iOStext}>Forgot password?</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={() => Linking.openURL('https://www.giftolexia.com')}>
    <Text style={styles.iOStext}>About Us</Text>
  </TouchableOpacity>

    {this.loadingSpinner()}

     </View>
     </View>
     </View>
     <View style={styles.credview}>
 <Text style={styles.credtext}>© Giftolexia 2018</Text>
 <Text style={styles.credtext}>In collaboration with Dept. of Computer Science DSCE Bangalore</Text>
 <Text style={styles.credtext}>Special thanks to Mehul Poddar,Mukunda K Das and Shreesh Nayak</Text>
      </View>
    </KeyboardAvoidingView>

  );
 }
 return (
   <View style={styles.spinnerStyle}>
    <Spinner size='large' />
    <Image source={iconImg} style={{ bottom: 100 }} />
   </View>
  );
}
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#68a3dd'
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
    fontSize: 26,
    backgroundColor: 'transparent'
  },
  container: {
    padding: 15
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 10
  },
  logInContainer: {
    backgroundColor: '#499acf',
    paddingVertical: 15,
    marginBottom: 15,
    marginTop: 15,
    borderRadius: 10
  },
  signUpContainer: {
    backgroundColor: '#499acf',
    paddingVertical: 15,
    marginBottom: 15,
    marginTop: 0,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 18
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#68a3dd'
  },
  iOStext: {
    backgroundColor: 'transparent'
  },
  credtext: {
   textAlign: 'center',
   //marginBottom: 20,
   //marginTop: 'auto',
   marginLeft: 10,
   marginRight: 10,
   fontSize: 10,
 },
 credview: {
   //justifyContent: 'center',
      //alignItems: 'center',
      marginBottom: 10
 }
};
