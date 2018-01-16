import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../common';
import PayOverlay from '../../PayOverlay';

class Level1Test extends Component {

  state = { paid: false };

  OverlayDisp() {
    if (!this.state.paid) {
      return (
        <PayOverlay />
      );
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Header>
          Level 1 Assessment
        </Header>
        <View>
          <Text style={styles.quizStyle}>
            Level 1 Quiz
          </Text>
          {this.OverlayDisp()}
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
  quizStyle: {
    fontSize: 50,
    alignSelf: 'center',
    marginTop: 50,
    position: 'absolute',
  }
};

export default Level1Test;
