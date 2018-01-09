import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, StatusBar, View, Image } from 'react-native';
import firebase from 'firebase';
import { Spinner } from '../common';

const iconImg = require('../../images/gifto_icon.png');

export default class LoginForm1 extends Component {
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

  render() {
    if (!this.state.loggedIn) {
   return (
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
     //ref={(input) => this.passwordInput = input}
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

   <TouchableOpacity>
    <Text>Forgot password?</Text>
  </TouchableOpacity>

   {this.loadingSpinner()}

    </View>
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
  container: {
    padding: 20
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
