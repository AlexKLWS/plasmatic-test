import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from '~/navigation/AppStack';
import { container, containerModule } from '~/services/container';
import { ServiceProvider } from '~/services/serviceProvider';

container.load(containerModule);

const App = () => {
  return (
    <NavigationContainer>
      <ServiceProvider container={container}>
        <AppStack />
      </ServiceProvider>
    </NavigationContainer>
  );
};

export default App;
