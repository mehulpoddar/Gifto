import React, { Component } from 'react';
import { ListView, View, Image, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';
import LevelDetail from '../LevelDetail';

const headerImage = require('../../images/gifto_logo.png');


const levels = [
  {
    level: 'Level 1: Introduction to Phonetics',
    ln1: 'Link 1',
    ln2: 'Link 2',
    ln3: 'Link 3',
    ln4: 'Link 4',
      l1: 'https://www.youtube.com/watch?v=7mahmMmnSx4',
      l2: 'http://www.macmillanenglish.com/pronunciation/interactive-phonemic-charts/',
      l3: 'https://www.youtube.com/watch?v=Kxsw7eS270w',
      l4: 'https://www.uni-due.de/SHE/Phonetics_Brief_Introduction.pdf',
      lno: 4,
    body: 'This level gives you an introduction to phonetics. \
    The phonetic chart can be \
used as a reference throughout your learning process'
  },
  {
    level: 'Level 2: Single Vowel Sounds',
    link: 'ABC',
    body: 'In this level you will learn about single vowel sounds or Monophthongs'
  },
  {
    level: 'Level 3: Double and Triple Vowel Sounds',
    link: 'XYZ',
    body: 'This level introduces Diphthongs or double vowel\
  sounds and Triphthongs- \
triple vowel sounds'
  },
  {
    level: 'Level 4: Single and Double Consonants',
    link: 'PQR',
    body: 'Here you learn about consonant sounds- single and double consonant sounds'
  },
  {
    level: 'Level 5: Blends and Diagraphs',
    link: 'DEF',
    body: 'This level is all about blends and diagraphs'
  },
  {
    level: 'Level 6: Segmenting and Blending',
    link: 'TUV',
    body: 'This level introduces segmenting and blending a word'
  },
  {
    level: 'Level 7: Syllables',
    link: 'MNO',
    body: 'Now that you have mastered letter sounds and combinations we \
    introduce you to syllables'
  },
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
  },
};

export default ChildDash;
