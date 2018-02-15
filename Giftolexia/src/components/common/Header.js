// Importing
import React from 'react';
import { Text, ImageBackground } from 'react-native';

// Creating

const gradientBg = require('../../images/blueWhite.jpg');

const Header = (props) => (
    <ImageBackground source={gradientBg} style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </ImageBackground>
  );

const styles = {
  textStyle: {
    fontSize: 30,
    color: '#e8fafc',
    textShadowColor: '#000',
    textShadowOffset: { height: 3, width: 2 },
    backgroundColor: 'transparent'
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 5,
    position: 'relative',
  }
};
// Exporting
export { Header };
