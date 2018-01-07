import React, { Component } from 'react';
import { Image, View } from 'react-native';

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
