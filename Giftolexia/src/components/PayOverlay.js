import React from 'react';
import { Text, View, Image } from 'react-native';

const overlay = require('../images/purple.png');

const PayOverlay = () => {
  return (
    <View>
      <Image source={overlay} style={styles.layerStyle} />
      <View>
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
};

const styles = {
  textStyle1: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '400',
    marginTop: 180,
    textAlign: 'center',
    left: '10%'
  },
  textStyle2: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '200',
    textAlign: 'center',
    left: '10%'
  },
  layerStyle: {
    flex: 1,
    position: 'absolute',
  }
};

export default PayOverlay;