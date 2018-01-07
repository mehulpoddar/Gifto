import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Card, CardSection } from './common';

const LevelDetail = (props) => {
  const {
    labelTextStyle,
    imageStyle,
    labelStyle
  } = styles;

  return (
      <Card>
        <TouchableOpacity onPress={props.onPress}>
          <CardSection>
            <View style={labelStyle}>
              <Text style={labelTextStyle}>{props.level}</Text>
            </View>
          </CardSection>

          <CardSection>
            <Image
              source={props.image}
              style={imageStyle}
            />
          </CardSection>

          <CardSection>
            <View style={labelStyle}>
              <Text style={labelTextStyle}>{props.name}</Text>
            </View>
          </CardSection>
        </TouchableOpacity>
      </Card>
  );
};

const styles = {
  labelStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },
  labelTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  imageStyle: {
    height: 225,
    flex: 1,
    width: null
  }
};

export default LevelDetail;
