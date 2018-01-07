import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Root from './src/components/Root';
import { Spinner } from './src/components/common';
import LoginForm from './src/components/screens/LoginForm';
import DashSel from './src/components/screens/DashSel';

class App extends Component {
  state = { loggedIn: true }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAzhSnvo7f3CLsZQAPR4hIUeUxZ8TdGnf4',
      authDomain: 'giftolexia-3c09f.firebaseapp.com',
      databaseURL: 'https://giftolexia-3c09f.firebaseio.com',
      projectId: 'giftolexia-3c09f',
      storageBucket: 'giftolexia-3c09f.appspot.com',
      messagingSenderId: '967747504832'
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
     case true: return <DashSel />;
     case false: return <LoginForm />;
     default: return <Spinner size="large" />;
   }
  }

  render() {
    return (
      <Root />
    );
  }
}

export default App;
