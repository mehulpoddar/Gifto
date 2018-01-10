import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import DashSel from './screens/DashSel';
import LoginForm from './screens/LoginForm';
import ChildDash from './screens/ChildDash';
import ParentDash from './screens/ParentDash';
import Level1 from './screens/levels/Level1';
import Level1Test from './screens/levelTests/Level1Test';

const conImg = require('../images/con_icon.png');
const testImg = require('../images/test_icon.png');

const Level1Tab = TabNavigator({
  level1: {
    screen: Level1,
    navigationOptions: {
      tabBarLabel: 'Content',
      tabBarIcon: () => <Image source={conImg} />
    },
  },
  level1test: {
    screen: Level1Test,
    navigationOptions: {
      tabBar: 'Assessment',
      tabBarIcon: () => <Image source={testImg} />
    }
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: '#005b96'
    },
    iconStyle: {
      height: 80,
      width: 80
    },
    activeTintColor: '#eae965'
  },
});

const LevelNav = StackNavigator({
    childDash: {
      screen: ChildDash
    },
    level1Tab: {
      screen: Level1Tab
    }
  },
  {
    headerMode: 'none'
  }
);

const Root = StackNavigator({
    login: {
      screen: LoginForm
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
