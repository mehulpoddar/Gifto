import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import { Card, CardSection } from './common';


const LevelDetail = (props) => {
  const {
    labelTextStyle,
  } = styles;

  return (
      <Card>
          <CardSection>

              <Text style={labelTextStyle}>{props.level}</Text>

          </CardSection>

          <CardSection>
            <Text style={labelTextStyle}>{props.body}</Text>
          </CardSection>
          <CardSection>
          <TouchableOpacity
           onPress={() => Linking.openURL(props.l1)}
          >
              <Text style={labelTextStyle}>{props.ln1}</Text>
          </TouchableOpacity>
          </CardSection>
          <CardSection>
          <TouchableOpacity
           onPress={() => Linking.openURL(props.l2)}
          >
              <Text style={labelTextStyle}>{props.ln2}</Text>
          </TouchableOpacity>
          </CardSection>
          <CardSection>
          <TouchableOpacity
           onPress={() => Linking.openURL(props.l3)}
          >
              <Text style={labelTextStyle}>{props.ln3}</Text>
          </TouchableOpacity>
          </CardSection>
          <CardSection>
          <TouchableOpacity
           onPress={() => Linking.openURL(props.l4)}
          >
              <Text style={labelTextStyle}>{props.ln4}</Text>
          </TouchableOpacity>
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
  },
  buttonCont: {
    backgroundColor: '#499acf',
    paddingVertical: 10,
    marginTop: 0,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 18
  },
};

export default LevelDetail;
