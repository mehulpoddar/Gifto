import React from 'react';
import { ImageBackground } from 'react-native';

const gradientBg = require('../../images/blueWhite.jpg');

const CardSection = (props) => {
  return (
    <ImageBackground source={gradientBg} style={styles.containerStyle}>
      {props.children}
    </ImageBackground>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
