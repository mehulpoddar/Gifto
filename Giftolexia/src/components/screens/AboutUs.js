import React from 'react';
import { View, Text } from 'react-native';

const AboutUs = () => {
  const {
    buttonText,
  } = styles;

  return (
    <View>
          <Text style={buttonText}> About Us </Text>
    </View>

  );
};

const styles = {
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 18
  },
};

export default AboutUs;
