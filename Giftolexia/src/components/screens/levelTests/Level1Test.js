import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../../common';

const overlay = require('../../../images/purple.png');

class Level1Test extends Component {

  render() {
    return (
        <View style={styles.viewStyle}>
        <Header>
          Level 1 Assessment
        </Header>
        <View>
          <Text style={{ fontSize: 50, alignSelf: 'center' }}>
            Level 1 Quiz
          </Text>
          <Image source={overlay} style={styles.layerStyle} />
          <Text style={styles.textStyle1}>
            Get access to paid Games and{'\n'}
            Assessments for your child
          </Text>
          <Text style={styles.textStyle2}>
          {'\n'}{'\n'}
            Payments can be made in the{'\n'}
            Parent Dashboard
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#def7f9',
  },
  layerStyle: {
    flex: 1,
    position: 'absolute'
  },
  textStyle1: {
    fontSize: 25,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '400',
    marginTop: 110,
    textAlign: 'center'
  },
  textStyle2: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '200',
    textAlign: 'center'
  }
};

export default Level1Test;
