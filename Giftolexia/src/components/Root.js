import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginForm from './screens/LoginForm';
import LevelsDash from './screens/LevelsDash';
import AboutUs from './screens/AboutUs';

const Root = StackNavigator({
    login: {
      screen: LoginForm
    },
    levelsDash: {
      screen: LevelsDash
    },
    aboutUs: {
      screen: AboutUs
    }
  },
  {
    headerMode: 'none'
  }
);

export default Root;
