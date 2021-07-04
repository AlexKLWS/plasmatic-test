import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedScreen from '~/screens/FeedScreen';
import DashboardScreen from '~/screens/DashboardScreen';
import ProfileScreen from '~/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeStack;
