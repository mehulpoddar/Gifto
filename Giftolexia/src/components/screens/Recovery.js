LEVELDASH

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
    body: 'This level gives you an introduction to phonetics.\
The phonetic chart can be \
used as a reference throughout your learning process'
  },
  {
    level: 'Level 2: Single Vowel Sounds',
    ln1: 'Link 1',
    ln2: 'Link 2',
    ln3: 'Link 3',
    ln4: 'Link 4',
    ln5: 'Link 5',
      l1: 'https://www.youtube.com/watch?v=72M770xTvaU&t=197s',
      l2: 'https://www.youtube.com/watch?v=j-27eVle65A',
      l3: 'https://www.youtube.com/watch?v=kw18P_ggt4g',
      l4: 'https://www.youtube.com/watch?v=IX6EE4MEduY',
      l5: 'https://www.youtube.com/watch?v=TCkb2CvcMDo',
      lno: 5,
    body: 'In this level you will learn about single vowel sounds or Monophthongs'
  },
  {
    level: 'Level 3: Double and Triple Vowel Sounds',
    ln1: 'Link 1',
    ln2: 'Link 2',
    ln3: 'Link 3',
    ln4: 'Link 4',
    ln5: 'Link 5',
      l1: 'https://www.youtube.com/watch?v=d1HZPx8DuDw',
      l2: 'https://www.youtube.com/watch?v=X8GKVbZph9I',
      l3: 'https://www.youtube.com/watch?v=TsOP7tDugdQ',
      l4: 'https://www.youtube.com/watch?v=Di6h9rIpQbs',
      l5: 'https://www.youtube.com/watch?v=er9TAX1_jmQ',
      lno: 5,
    body: 'This level introduces Diphthongs or double vowel\
  sounds and Triphthongs- \
triple vowel sounds'
  },
  {
    level: 'Level 4: Single and Double Consonants',
    ln1: 'Link 1',
    ln2: 'Link 2',
    ln3: 'Link 3',
    ln4: 'Link 4',
      l1: 'https://www.youtube.com/watch?v=h4yrIuCE6UM',
      l2: 'https://www.youtube.com/watch?v=zoarwB-7O_c',
      l3: 'https://www.youtube.com/watch?v=Jalt5JYSqrs',
      l4: 'https://www.youtube.com/watch?v=gbG2jyI8600',
      lno: 4,
    body: 'Here you learn about consonant sounds- single and double consonant sounds'
  },
  {
    level: 'Level 5: Blends and Diagraphs',
    ln1: 'Link 1',
    ln2: 'Link 2',
    ln3: 'Link 3',
    ln4: 'Link 4',
    ln5: 'Link 5',
    ln6: 'Link 6',
    ln7: 'Link 7',
    ln8: 'Link 8',
      l1: 'http://www.theschoolhouse.us/lessons/lesson57.html',
      l2: 'https://www.youtube.com/watch?v=2EyUo2d2WpM',
      l3: 'http://blog.maketaketeach.com/wp-content/uploads/2013/01/Chart-Blends-and-Digraphsblogpic.jpg',
      l4: 'https://www.youtube.com/watch?v=AS9S06iunh0',
      l5: 'https://www.youtube.com/watch?v=tgdX20eSisw',
      l6: 'http://www.theschoolhouse.us/lessons/lesson57.html',
      l7: 'https://www.youtube.com/watch?v=sYmwStHMezc',
      l8: 'http://www.mybreakfastreadingprogram.com/consonants.htm',
      lno: 8,
    body: 'This level is all about blends and diagraphs'
  },
  {
    level: 'Level 6: Segmenting and Blending',
    ln1: 'Link 1',
    ln2: 'Link 2',
    ln3: 'Link 3',
      l1: 'https://www.youtube.com/watch?v=O_xMtW64pSw',
      l2: 'https://www.youtube.com/watch?v=dquCtrqbKpY',
      l3: 'https://www.youtube.com/watch?v=5mIhMh1oYdA',
      lno: 3,
    body: 'This level introduces segmenting and blending a word'
  },
  {
    level: 'Level 7: Syllables',
    ln1: 'Link 1',
    ln2: 'Link 2',
      l1: 'https://www.verbling.com/articles/post/understanding-vowels-syllables-monophtho',
      l2: 'https://www.englishclub.com/esl-worksheets/pronunciation/EC_pronunciation-syllables-1-PI_with-KEY.pdf',
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




LEVELDETAIL

import React, { Component } from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import { Card, CardSection } from './common';

class LevelDetail extends Component {

  link3() {
  if (this.props.lno >= 3) {
    return (
   <CardSection>
    <TouchableOpacity
      onPress={() => Linking.openURL(this.props.l3)}
    >
     <Text style={styles.labelTextStyle}>{this.props.ln3}</Text>
    </TouchableOpacity>
    </CardSection>
  );
   }
  }

 link4() {
 if (this.props.lno >= 4) {
   return (
  <CardSection>
   <TouchableOpacity
     onPress={() => Linking.openURL(this.props.l4)}
   >
    <Text style={styles.labelTextStyle}>{this.props.ln4}</Text>
   </TouchableOpacity>
   </CardSection>
 );
  }
 }

link5() {
if (this.props.lno >= 5) {
  return (
 <CardSection>
  <TouchableOpacity
    onPress={() => Linking.openURL(this.props.l5)}
  >
   <Text style={styles.labelTextStyle}>{this.props.ln5}</Text>
  </TouchableOpacity>
  </CardSection>
);
 }
}

link6() {
if (this.props.lno >= 6) {
  return (
 <CardSection>
  <TouchableOpacity
    onPress={() => Linking.openURL(this.props.l6)}
  >
   <Text style={styles.labelTextStyle}>{this.props.ln6}</Text>
  </TouchableOpacity>
  </CardSection>
);
 }
}

link7() {
if (this.props.lno >= 7) {
  return (
 <CardSection>
  <TouchableOpacity
    onPress={() => Linking.openURL(this.props.l7)}
  >
   <Text style={styles.labelTextStyle}>{this.props.ln7}</Text>
  </TouchableOpacity>
  </CardSection>
);
 }
}

link8() {
if (this.props.lno >= 8) {
  return (
 <CardSection>
  <TouchableOpacity
    onPress={() => Linking.openURL(this.props.l8)}
  >
   <Text style={styles.labelTextStyle}>{this.props.ln8}</Text>
  </TouchableOpacity>
  </CardSection>
);
 }
}

render() {
  return (
      <Card>
          <CardSection>

              <Text style={styles.labelTextStyle}>{this.props.level}</Text>

          </CardSection>

          <CardSection>
            <Text style={styles.labelTextStyle}>{this.props.body}</Text>
          </CardSection>
          <CardSection>
          <TouchableOpacity
           onPress={() => Linking.openURL(this.props.l1)}
          >
              <Text style={styles.labelTextStyle}>{this.props.ln1}</Text>
          </TouchableOpacity>
          </CardSection>
          <CardSection>
          <TouchableOpacity
           onPress={() => Linking.openURL(this.props.l2)}
          >
              <Text style={styles.labelTextStyle}>{this.props.ln2}</Text>
          </TouchableOpacity>
          </CardSection>
          {this.link3()}
          {this.link4()}
          {this.link5()}
          {this.link6()}
          {this.link7()}
          {this.link8()}
      </Card>
  );
}
}
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
