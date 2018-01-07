import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Header } from '../common';

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
