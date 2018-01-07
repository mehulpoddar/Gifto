import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from '../common';

const logoImg = require('../../images/gifto_logo.png');
const iconImg = require('../../images/gifto_icon.png');

 class LoginForm extends Component {
   state = { email: '', password: '', error: '', loading: false, loggedIn: true };
   //Assuming that user is logged In

   componentWillMount() {
     firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         this.props.navigation.navigate('dashSel');
       } else {
         this.setState({ loggedIn: false });
       }
     });
   }

   onButton1Press() {
     const { email, password } = this.state;

     this.setState({ error: '', loading: true });

     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
   }

   onButton2Press() {
     const { email, password } = this.state;

     this.setState({ error: '', loading: true });
        firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(this.onLoginSuccess.bind(this))
         .catch(this.onLoginFail.bind(this));
   }

   onLoginFail() {
     this.setState({ error: 'Authentication Failed.', loading: false });
   }

   onLoginSuccess() {
     this.setState({
       email: '',
       password: '',
       loading: false,
       error: ''
     });
     this.props.navigation.navigate('dashSel');
   }

   loadingSpinner() {
     if (this.state.loading) {
       return <Spinner size="small" />;
     }
   }

   renderButton1() {
     return (
       <Button onPress={this.onButton1Press.bind(this)}>
        Log in
       </Button>
     );
   }
   
   renderButton2() {
     return (
       <Button onPress={this.onButton2Press.bind(this)}>
        Sign Up
       </Button>
     );
   }

   render() {
     if (!this.state.loggedIn) {
       return (
         <Card>
         <CardSection>
          <Image
           style={styles.imageStyle}
           source={logoImg}
          />
        </CardSection>
         <CardSection>
          <Input
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
         </CardSection>

         <CardSection>
          <Input
           secureTextEntry
           placeholder="password"
           label="Password"
           value={this.state.password}
           onChangeText={password => this.setState({ password })}
          />
         </CardSection>

          <Text style={styles.errorTextStyle}>
           {this.state.error}
          </Text>

         <CardSection>
          {this.renderButton1()}
         </CardSection>
         <CardSection>
          {this.renderButton2()}
        </CardSection>
        <CardSection>
         {this.loadingSpinner()}
       </CardSection>
         </Card>
       );
     }
     return (
       <View style={{ height: 450 }}>
        <Spinner size='large' />
        <Image source={iconImg} style={{ alignSelf: 'center' }} />
       </View>
     );
   }
 }

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  imageStyle: {
    height: 100,
    width: undefined,
    flex: 1,
    alignSelf: 'stretch'
  }
};

 export default LoginForm;
