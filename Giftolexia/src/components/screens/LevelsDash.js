import React, { Component } from 'react';
import { ListView, View, Image, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from '../common';
import LevelDetail from '../LevelDetail';

const headerImage = require('../../images/gifto_logo.png');
const l1 = require('../../images/level1.jpg');
const l2 = require('../../images/white.jpg');

const levels = [
  {
    level: 'Level 1',
    name: 'Phonetic Chart',
    image: l1
  },
  {
    level: 'Level 2',
    name: 'ABC',
    image: l2
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
          <TouchableOpacity
           style={styles.logoutcont}
           onPress={() => this.props.navigation.navigate('aboutUs')}
          >
           <Text style={styles.buttonText}>About Us</Text>
         </TouchableOpacity>
        </View>
        <Header>Levels Dashboard</Header>
        <ListView
          style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          renderRow={
            (data) => <LevelDetail
            {...data}
            />
          }
        />
        <TouchableOpacity
         style={styles.logoutcont}
         onPress={() => this.toLogout()}
        >
         <Text style={styles.buttonText}>Log Out</Text>
       </TouchableOpacity>
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
  },
  logoutcont: {
    backgroundColor: '#499acf',
    paddingVertical: 15,
    marginTop: 0,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 18
  }
};

export default ChildDash;