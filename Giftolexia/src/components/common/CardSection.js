import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    borderRadius: 10
  }
};

export { CardSection };
