import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../common';

const Level1Test = () => (
  <View style={{ flex: 1, backgroundColor: '#def7f9' }}>
    <Header>
      Level 1 Assessment
    </Header>
    <View>
      <Text style={{ fontSize: 40 }}>
        Level 1 Quiz
      </Text>
    </View>
  </View>
);

export default Level1Test;
