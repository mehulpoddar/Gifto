import React, { Component } from 'react';
import { Image, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from '../common';

const headerImage = require('../../images/gifto_logo.png');

class ParentDash extends Component {

  forLogout() {
    this.props.navigation.navigate('login');
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Image
          style={{ backgroundColor: '#def7f9' }}
          source={headerImage}
          style={styles.imageStyle}
          resizeMode="stretch"
        />
        <Header>Parent Dashboard</Header>
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={this.forLogout()}>Log out</Button>
        </View>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    alignSelf: 'center',
    height: 75,
    width: 300,
  },
  containerStyle: {
    backgroundColor: '#def7f9',
    flex: 1
  }
};

export default ParentDash;
