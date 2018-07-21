import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import { Card, CardSection } from './common';


const LevelDetail = (props) => {
  const {
    labelTextStyle,
  } = styles;

  let links = [];
  for (let i = 0; i < props.lno; i++) {
    if (i === 0) {
      links = [];
    }
    links.push(
			<CardSection key={i}>
        <TouchableOpacity
         onPress={() => Linking.openURL(props.links[i])}
        >
        <Text style={labelTextStyle}>{props.ln[i]}</Text>
        </TouchableOpacity>
      </CardSection>
		);
	}
  return (
      <Card>
          <CardSection>

              <Text style={labelTextStyle}>{props.level}</Text>

          </CardSection>

          <CardSection>
            <Text style={labelTextStyle}>{props.body}</Text>
          </CardSection>
          { links }
      </Card>
  );
};

const styles = {
  labelTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent'
  },
  imageStyle: {
    height: 225,
    flex: 1,
    width: null
  },
  buttonCont: {
    backgroundColor: '#499acf',
    paddingVertical: 10,
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

export default LevelDetail;




levelDash

import React, { Component } from 'react';
import { ListView, View, Image, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';
import LevelDetail from '../LevelDetail';

const headerImage = require('../../images/gifto_logo.png');


const levels = [
  {
    level: 'Level 1: Introduction to Phonetics',
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4'],
    links: ['https://www.youtube.com/watch?v=7mahmMmnSx4',
             'http://www.macmillanenglish.com/pronunciation/interactive-phonemic-charts/',
             'https://www.youtube.com/watch?v=Kxsw7eS270w',
             'https://www.uni-due.de/SHE/Phonetics_Brief_Introduction.pdf'],
    lno: 4,
    body: 'This level gives you an introduction to phonetics. \
    The phonetic chart can be \
used as a reference throughout your learning process'
  },
  {
    level: 'Level 2: Single Vowel Sounds',
    link: 'ABC',
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
    links: ['https://www.youtube.com/watch?v=72M770xTvaU&t=197s',
            'https://www.youtube.com/watch?v=j-27eVle65A',
            'https://www.youtube.com/watch?v=kw18P_ggt4g',
            'https://www.youtube.com/watch?v=IX6EE4MEduY',
            'https://www.youtube.com/watch?v=TCkb2CvcMDo'],
    lno: 5,
    body: 'In this level you will learn about single vowel sounds or Monophthongs'
  },
  {
    level: 'Level 3: Double and Triple Vowel Sounds',
    link: 'XYZ',
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'],
    links: ['https://www.youtube.com/watch?v=d1HZPx8DuDw',
            'https://www.youtube.com/watch?v=X8GKVbZph9I',
            'https://www.youtube.com/watch?v=TsOP7tDugdQ',
            'https://www.youtube.com/watch?v=Di6h9rIpQbs',
            'https://www.youtube.com/watch?v=er9TAX1_jmQ'],
    lno: 5,
    body: 'This level introduces Diphthongs or double vowel\
  sounds and Triphthongs- \
triple vowel sounds'
  },
  {
    level: 'Level 4: Single and Double Consonants',
    link: 'PQR',
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4'],
    links: ['https://www.youtube.com/watch?v=h4yrIuCE6UM',
            'https://www.youtube.com/watch?v=zoarwB-7O_c',
            'https://www.youtube.com/watch?v=Jalt5JYSqrs',
            'https://www.youtube.com/watch?v=gbG2jyI8600'],
    lno: 4,
    body: 'Here you learn about consonant sounds- single and double consonant sounds'
  },
  {
    level: 'Level 5: Blends and Diagraphs',
    link: 'DEF',
    ln: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5', 'Link 6', 'Link 7', 'Link 8'],
    links: ['http://www.theschoolhouse.us/lessons/lesson57.html',
            'https://www.youtube.com/watch?v=2EyUo2d2WpM',
            'http://blog.maketaketeach.com/wp-content/uploads/2013/01/Chart-Blends-and-Digraphsblogpic.jpg',
            'https://www.youtube.com/watch?v=AS9S06iunh0',
            'https://www.youtube.com/watch?v=tgdX20eSisw',
            'http://www.theschoolhouse.us/lessons/lesson57.html',
            'https://www.youtube.com/watch?v=sYmwStHMezc',
            'http://www.mybreakfastreadingprogram.com/consonants.htm'],
    lno: 8,
    body: 'This level is all about blends and diagraphs'
  },
  {
    level: 'Level 6: Segmenting and Blending',
    link: 'TUV',
    ln: ['Link 1', 'Link 2', 'Link 3'],
    links: ['https://www.youtube.com/watch?v=O_xMtW64pSw',
            'https://www.youtube.com/watch?v=dquCtrqbKpY',
            'https://www.youtube.com/watch?v=5mIhMh1oYdA'],
    lno: 3,
    body: 'This level introduces segmenting and blending a word'
  },
  {
    level: 'Level 7: Syllables',
    link: 'MNO',
    ln: ['Link 1', 'Link 2'],
    links: ['https://www.verbling.com/articles/post/understanding-vowels-syllables-monophtho',
            'https://www.englishclub.com/esl-worksheets/pronunciation/EC_pronunciation-syllables-1-PI_with-KEY.pdf'],
    lno: 2,
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
