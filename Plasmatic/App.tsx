import React from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';

import AppStack from '~/navigation/AppStack';

const deepLinksConfig = {
  screens: {
    Services: 'services',
    Partners: 'partners',
    Activity: 'activity',
    Login: 'login',
    Home: 'home',
  },
};

const linking: LinkingOptions = {
  prefixes: ['plasmatictest://', 'https://plasmatic-test.com'],
  config: deepLinksConfig,
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
