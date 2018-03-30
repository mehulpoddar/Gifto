import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import DashSel from './screens/DashSel';
import LoginForm from './screens/LoginForm';
import ChildDash from './screens/ChildDash';
import ParentDash from './screens/ParentDash';
import Level1 from './screens/levels/Level1';
import Level1Test from './screens/levelTests/Level1Test';
import Level2 from './screens/levels/Level2';
import Level2Test from './screens/levelTests/Level2Test';

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
      tabBarLabel: 'Assessment',
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
      height: 64,
      width: 64
    },
    activeTintColor: '#eae965'
  },
});

const Level2Tab = TabNavigator({
  level1: {
    screen: Level2,
    navigationOptions: {
      tabBarLabel: 'Content',
      tabBarIcon: () => <Image source={conImg} />
    },
  },
  level2test: {
    screen: Level2Test,
    navigationOptions: {
      tabBarLabel: 'Assessment',
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
      height: 64,
      width: 64
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
    },
    level2Tab: {
      screen: Level2Tab
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
