import React, { Component } from 'react';
import firebase from 'firebase';
import Root from './src/components/Root';//this is a test

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAzhSnvo7f3CLsZQAPR4hIUeUxZ8TdGnf4',
      authDomain: 'giftolexia-3c09f.firebaseapp.com',
      databaseURL: 'https://giftolexia-3c09f.firebaseio.com',
      projectId: 'giftolexia-3c09f',
      storageBucket: 'giftolexia-3c09f.appspot.com',
      messagingSenderId: '967747504832'
  });
  }

  render() {
    return (
      <Root />
    );
  }
}

export default App;
