//import React from 'react';
import { StackNavigator } from 'react-navigation';
import DashSel from './screens/DashSel';
import Login from './screens/Login';
import ChildDash from './screens/ChildDash';
import ParentDash from './screens/ParentDash';
import Level1 from './screens/Level1';

const LevelNav = StackNavigator({
    childDash: {
      screen: ChildDash
    },
    level1: {
      screen: Level1
    }
  },
  {
    headerMode: 'none'
  }
);

const Root = StackNavigator({
    login: {
      screen: Login
    },
    dashSel: {
      screen: DashSel
    },
    parentDash: {
      screen: ParentDash
    },
    levelNav: {
      screen: LevelNav
    }
  },
  {
    headerMode: 'none'
  }
);

export default Root;
