import React from 'react';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';

const bgImg = require('../../images/black.jpg');
const childImg = require('../../images/child_dash.png');
const parentImg = require('../../images/parent_dash.png');

const DashSel = ({ navigation }) => {
  return (
    <ImageBackground source={bgImg} style={styles.bgStyle} >

      <TouchableOpacity
      style={styles.childStyle}
      onPress={() => navigation.navigate('childDash')}
      >
        <Image source={childImg} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.parentStyle}>
        <Image source={parentImg} />
      </TouchableOpacity>

    </ImageBackground>
  );
};

const styles = {
  bgStyle: {
    flex: 1,
  },
  childStyle: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: -30
  },
  parentStyle: {
    alignSelf: 'center',
    marginTop: 290,
    position: 'absolute'
  },
};

export default DashSel;
