import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Spinner } from './src/components/common';
import LoginForm from './src/components/screens/LoginForm';

class App extends Component {
  state = { loggedIn: true }
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDuGZB-7w5lxpEd3AZnuBrslvFydaSDSAk',
    authDomain: 'authentication-5b723.firebaseapp.com',
    databaseURL: 'https://authentication-5b723.firebaseio.com',
    projectId: 'authentication-5b723',
    storageBucket: 'authentication-5b723.appspot.com',
    messagingSenderId: '757229173065'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent() {
   switch (this.state.loggedIn) {
     case true: return (
                        <View style={{ flexDirection: 'row' }}>
                         <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </View>
                      );
     case false: return <LoginForm />;
     default: return <Spinner size="large" />;
   }
  }

  render() {
    return (
      <View>
       {this.renderContent()}
      </View>
    );
  }
}

export default App;
