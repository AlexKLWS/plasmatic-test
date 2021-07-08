import React from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';

import AppStack from '~/navigation/AppStack';
import { Linking } from 'react-native';
import { deepLinksConfig } from '~/consts/deepLinksConfig';
import { navigationLinkingPrefixes } from '~/consts/navigationLinkingPrefixes';

const linking: LinkingOptions = {
  prefixes: navigationLinkingPrefixes,
  config: deepLinksConfig,
  async getInitialURL() {
    const url = await Linking.getInitialURL();

    if (url !== null) {
      return url;
    }
  },
  subscribe(listener) {
    const onReceiveURL = ({ url }: { url: string }) => {
      listener(url);
    };

    Linking.addEventListener('url', onReceiveURL);

    return () => {
      Linking.removeEventListener('url', onReceiveURL);
    };
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
