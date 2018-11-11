import React from 'react';
import { Text, View, TextInput, PixelRatio } from 'react-native';

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={inputStyle}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};
<<<<<<< HEAD
const f = PixelRatio.getFontScale();
=======
const f = PixelRatio.getWindowScale();
>>>>>>> 2b2cd711596aceaba09c3c40a4001c552ead5558
const styles = {
  inputStyle: {
    height: f * 40,
    width: f * 200,
    color: '#000',
    paddingRight: f * 5,
    paddingLeft: f * 5,
    fontSize: f * 18,
    lineHeight: f * 23,
    flex: 2
  },

  labelStyle: {
    fontSize: f * 18,
    paddingLeft: f * 35,
    //paddingRight: 50
    flex: 1
  },

  containerStyle: {
    height: f * 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
};

export { Input };
