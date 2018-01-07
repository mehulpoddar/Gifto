import React, { Component } from 'react';
import { Image, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from '../common';

const headerImage = require('../../images/gifto_logo.png');

class ParentDash extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image
          source={headerImage}
          style={styles.imageStyle}
          resizeMode="stretch"
        />
        <Header>Parent Dashboard</Header>
        <View style={{ flexDirection: 'row' }}>
        <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
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
  }
};

export default ParentDash;
