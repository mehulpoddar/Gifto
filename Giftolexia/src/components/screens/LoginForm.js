import React, { Component } from 'react';
import { Text, Image, View, KeyboardAvoidingView,
   StatusBar, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';
import firebase from 'firebase';
import { Spinner } from '../common';

const iconImg = require('../../images/gifto_icon.png');

export default class Login extends Component {
  state = { email: '', password: '', error: '', loading: false, loggedIn: true };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.props.navigation.navigate('dashSel');
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onButton1Press() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
     .catch(this.onLoginFail.bind(this));
  }

  onButton2Press() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
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
    this.props.navigation.navigate('dashSel');
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
      ref={(input) => this.passwordInput = input}
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      />

      <Text style={styles.errorTextStyle}>
       {this.state.error}
      </Text>

      <TouchableOpacity
       style={styles.buttonContainer1}
       onPress={this.onButton1Press.bind(this)}
      >
       <Text style={styles.buttonText}>LOG IN</Text>
     </TouchableOpacity>

     <TouchableOpacity
      style={styles.buttonContainer2}
      onPress={this.onButton2Press.bind(this)}
     >
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={this.forgotPassword.bind(this)}>
     <Text>Forgot password?</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/giftolexia/')}>
    <Text>About Us</Text>
  </TouchableOpacity>

    {this.loadingSpinner()}

     </View>
     </View>
    </KeyboardAvoidingView>
  );
 }
 return (
   <View style={{ height: 450 }}>
    <Spinner size='large' />
    <Image source={iconImg} style={{ alignSelf: 'center' }} />
   </View>
  );
}
}

const styles = {
  mainContainer: {
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
    fontSize: 18
  },
  buttonContainer1: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 15,
    marginTop: 15
  },
  buttonContainer2: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 15,
    marginTop: 0
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
  }
};
