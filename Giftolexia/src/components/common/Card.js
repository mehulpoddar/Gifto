import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    elevation: 2,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#68a3dd'
  }
};

export { Card };
