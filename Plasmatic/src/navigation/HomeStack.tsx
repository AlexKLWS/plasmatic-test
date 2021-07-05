import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '~/screens/HomeScreen';
import ServicesScreen from '~/screens/ServicesScreen';
import PartnersScreen from '~/screens/PartnersScreen';
import ActivityScreen from '~/screens/ActivityScreen';
import styleSystem from '~/shared/styles';
import HomeIcon from '~/assets/icons/tabBar/HomeIcon';
import ServicesIcon from '~/assets/icons/tabBar/ServicesIcon';
import PartnersIcon from '~/assets/icons/tabBar/PartnersIcon';
import ActivityIcon from '~/assets/icons/tabBar/ActivityIcon';
import { View } from 'react-native';
import { scale } from '~/helpers/scale';
import HomeTabBar from '~/components/tabBar/homeTabBar';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator tabBar={props => <HomeTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Partners" component={PartnersScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
    </Tab.Navigator>
  );
};

export default HomeStack;
