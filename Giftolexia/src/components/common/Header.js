// Importing
import React from 'react';
import { Text, View } from 'react-native';

// Creating

const Header = (props) => (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </View>
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
    backgroundColor: '#68a3dd',
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
