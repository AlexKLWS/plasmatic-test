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

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon color={color} />;
            case 'Services':
              return <ServicesIcon color={color} />;
            case 'Partners':
              return <PartnersIcon color={color} />;
            case 'Activity':
              return <ActivityIcon color={color} />;
            default:
              break;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: styleSystem.colors.primary.blue,
        inactiveTintColor: styleSystem.colors.secondary.light,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Partners" component={PartnersScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
    </Tab.Navigator>
  );
};

export default HomeStack;
