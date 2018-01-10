import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

//const bgImg = require('../../images/black.jpg');
const childImg = require('../../images/child_dash.png');
const parentImg = require('../../images/parent_dash.png');

const DashSel = ({ navigation }) => {
  return (
    <View style={styles.bgStyle} >

      <TouchableOpacity
      style={styles.childStyle}
      onPress={() => navigation.navigate('childDash')}
      >
        <Image source={childImg} />
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.parentStyle}
      onPress={() => navigation.navigate('parentDash')}
      >
        <Image source={parentImg} />
      </TouchableOpacity>

    </View>
  );
};

const styles = {
  bgStyle: {
    flex: 1,
    backgroundColor: '#2c3e50'
  },
  childStyle: {
    alignSelf: 'center',
    position: 'absolute',
    top: -25
  },
  parentStyle: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: -15
  },
};

export default DashSel;
