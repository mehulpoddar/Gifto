//import React from 'react';
import { StackNavigator } from 'react-navigation';
import DashSel from './screens/DashSel';
import LoginForm from './screens/LoginForm';
import ChildDash from './screens/ChildDash';
//import Level1 from './screens/Level1';

const Root = StackNavigator({
    login: {
      screen: LoginForm
    },
    dashSel: {
      screen: DashSel
    },
    childDash: {
      screen: ChildDash
    },
    /*level1: {
      screen: Level1
    },
    parentDash: {
      screen: ParentDash
    }*/
  },
  {
    headerMode: 'none'
  }
);

export default Root;
