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
