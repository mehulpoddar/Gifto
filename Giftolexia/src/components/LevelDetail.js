import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Card, CardSection } from './common';

const LevelDetail = (props) => {
  const {
    labelTextStyle,
    imageStyle,
  } = styles;

  return (
      <Card>
          <CardSection>

              <Text style={labelTextStyle}>{props.level}</Text>

          </CardSection>

          <CardSection>
            <Image
              source={props.image}
              style={imageStyle}
            />
          </CardSection>

          <CardSection>
              <Text style={labelTextStyle}>{props.name}</Text>
          </CardSection>
      </Card>
  );
};

const styles = {
  labelTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent'
  },
  imageStyle: {
    height: 225,
    flex: 1,
    width: null
  }
};

export default LevelDetail;
