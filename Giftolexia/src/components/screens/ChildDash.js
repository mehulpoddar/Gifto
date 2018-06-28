import React, { Component } from 'react';
import { ListView, View, Image } from 'react-native';
import { Header, Button } from '../common';
import LevelDetail from '../LevelDetail';
import firebase from 'firebase';

const headerImage = require('../../images/gifto_logo.png');
const l1 = require('../../images/level1.jpg');
const l2 = require('../../images/white.jpg');

const levels = [
  {
    level: 'Level 1',
    name: 'Phonetic Chart',
    image: l1,
    navi: 'level1Tab'
  },
  {
    level: 'Level 2',
    name: 'ABC',
    image: l2,
     navi: 'level2Tab'
  },
  { level: 'Level 3', name: 'XYZ', image: l2 },
  { level: 'Level 4', name: 'PQR', image: l2 },
  { level: 'Level 5', name: 'DEF', image: l2 },
  { level: 'Level 6', name: 'TUV', image: l2 },
  { level: 'Level 7', name: 'MNO', image: l2 },
];

class ChildDash extends Component {
  constructor(props) {
    super(props);
     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
     this.state = {
       dataSource: ds.cloneWithRows(levels),
     };
  }
  toLogout() {
    firebase.auth().signOut();
    this.props.navigation.navigate('login');
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#def7f9' }}>
        <View style={styles.containerStyle}>
          <Image
            source={headerImage}
            style={styles.imageStyle}
            resizeMode="stretch"
          />
          <Header>Child Dashboard</Header>
        </View>
        <ListView
          style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          renderRow={
            (data) => <LevelDetail
            {...data}
            onPress={() => this.props.navigation.navigate(data.navi)}
            />
          }
        />
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={() => this.toLogout()}>Log out</Button>
        </View>
      </View>

    );
  }
}

const styles = {
  imageStyle: {
    alignSelf: 'center',
    height: 75,
    width: 300,
  },
  containerStyle: {
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#def7f9',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default ChildDash;
