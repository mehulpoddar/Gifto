import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

//const bgImg = require('../../images/black.jpg');
const childImg = require('../../images/child_dash.png');
const parentImg = require('../../images/parent_dash.png');

const DashSel = ({ navigation }) => {
  return (
    <View style={styles.bgStyle} >

      <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => navigation.navigate('childDash')}
      >
        <Image source={childImg} />
      </TouchableOpacity>

      <TouchableOpacity
      style={{ flex: 1, alignItems: 'flex-end' }}
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
  }
};

export default DashSel;
