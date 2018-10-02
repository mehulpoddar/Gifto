import React from 'react';
import { Text, TouchableOpacity, Linking, Image } from 'react-native';
import { Card, CardSection } from './common';


const LevelDetail = (props) => {
  const {
    labelTextStyle,
  } = styles;

  let links = [];
  for (let i = 0; i < props.lno; i++) {
    if (i === 0) {
      links = [];
    }
    links.push(
			<CardSection key={i}>
        <TouchableOpacity
         onPress={() => Linking.openURL(props.links[i])}
        >
        <Image
         source={props.src[i]}
        />
        </TouchableOpacity>
      </CardSection>
		);
	}
  return (
      <Card>
          <CardSection>

              <Text style={labelTextStyle}>{props.level}</Text>

          </CardSection>

          <CardSection>
            <Text style={labelTextStyle}>{props.body}</Text>
          </CardSection>
          { links }
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
