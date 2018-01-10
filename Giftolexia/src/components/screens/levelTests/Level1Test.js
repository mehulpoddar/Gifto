import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../common';

const Level1Test = () => (
  <View style={styles.viewStyle}>
    <Header>
      Level 1 Assessment
    </Header>
    <View>
      <Text style={{ fontSize: 50, alignSelf: 'center' }}>
        Level 1 Quiz
      </Text>
    </View>
  </View>
);

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#def7f9',
  }
};

export default Level1Test;
