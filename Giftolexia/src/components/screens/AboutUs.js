import React from 'react';
import { View, Text, TouchableOpacity, Linking, Image, PixelRatio } from 'react-native';
const headerImage = require('../../images/gifto_logo.png');

const AboutUs = () => {
  const {
    mainContainer,
    toolBar,
    toolBarTitle,
    content,
    bottom,
    //imageStyle,
    contentStyle,
    contentHeaderStyle,
  } = styles;

  return (
    <View style={mainContainer}>
      <View style={toolBar}>
          <Text style={toolBarTitle}>About Us</Text>
      </View>
      <View style={content}>
          <Text style={contentHeaderStyle}>Welcome to the Phonetic way of learning English!</Text>
          <Text />
          <Text style={contentStyle}>
            Phonetics is the study of speech-sounds. Phonics or letter-sound knowledge is the foundation needed to build reading and writing abilities.
            Phonics instruction teaches you how to decode letters into their respective sounds, a skill that is essential for you to read unfamiliar words.
            It improves your spelling.  It also helps you acquire the right intonation of a particular language and helps you pronounce words correctly.
            We have curated content to help you learn to read in a systematic way. The various levels have content in the form of video, documents and practise sheets. We urge you to go through the entire content for each level.
          </Text>
          <Text/>
          <Text style={contentStyle}>Happy Learning!</Text>
      </View>
      <View style={bottom}>
        <Text style={contentStyle}>Write to us at info@giftolexia.com for any clarification or comments with the Subject: English Learning App.</Text>
        <Text />
        <Text style={contentStyle}>Click below to visit our website:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.giftolexia.com')}>
        <Text style={contentStyle}>www.giftolexia.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const f = PixelRatio.getWindowScale();
const styles = {
  imageStyle: {
    alignSelf: 'center',
    bottom: 0,
    height: f * 75,
    width: f * 300,
    position: 'absolute'
  },
  mainContainer: {
    flex: 1
  },
  content: {
    flex: 2,
    alignItems: 'center',
    marginTop: f * 20,
    marginBottom: f * 20
  },
  toolBar: {
    backgroundColor: '#20a3aa',
    paddingTop: f * 20,
    paddingBottom: f * 20,
    flexDirection: 'row'
  },
  toolBarTitle: {
    color: '#fff',
    textAlign: 'center',
    flex: 1,
    fontWeight: '700',
    fontSize: f * 18
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: f * 100
  },
  contentHeaderStyle: {
    fontSize: f * 16,
    textAlign: 'center',
    color: '#000'
  },
  contentStyle: {
    fontSize: f * 16,
    textAlign: 'center',
    color: '#000',
    margin: f * 5
  }
};

/*
<View style={bottom}>
    <Image
      source={headerImage}
      style={imageStyle}
      resizeMode="stretch"
    />
</View>*/

export default AboutUs;
