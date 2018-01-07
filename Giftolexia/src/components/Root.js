//import React from 'react';
import { StackNavigator } from 'react-navigation';
import DashSel from './screens/DashSel';
import LoginForm from './screens/LoginForm';

const Root = StackNavigator({
    login: {
      screen: LoginForm
    },
    dashSel: {
      screen: DashSel
    },
    /*childDash: {
      screen: ChildDash
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
