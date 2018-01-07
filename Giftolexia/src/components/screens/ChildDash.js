import React, { Component } from 'react';
import { ListView, View, Image } from 'react-native';
import LevelDetail from '../LevelDetail';

const headerImage = require('../../images/gifto_logo.png');
const image1 = require('../../images/Level1.png');
const image2 = require('../../images/child_dash.png');

const levels = [
  {
    level: 'Level 1',
    name: 'Phonetic Chart',
    image: image1,
    navi: 'level1'
  },
  { level: 'Level 2', name: 'ABC', image: image2 },
  { level: 'Level 3', name: 'XYZ', image: image2 },
  { level: 'Level 4', name: 'PQR', image: image2 },
  { level: 'Level 5', name: 'DEF', image: image2 },
  { level: 'Level 6', name: 'TUV', image: image2 },
  { level: 'Level 7', name: 'MNO', image: image2 },
];

class ChildDash extends Component {
  constructor(props) {
    super(props);
     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
     this.state = {
       dataSource: ds.cloneWithRows(levels),
     };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerStyle}>
          <Image
            source={headerImage}
            style={styles.imageStyle}
          />
        </View>
        <ListView
          style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          renderRow={(data) => <LevelDetail {...data} />}
        />
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
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default ChildDash;
