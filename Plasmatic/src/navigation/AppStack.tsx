import React from 'react';

import SplashStack from '~/navigation/SplashStack';
import AuthStack from '~/navigation/AuthStack';
import HomeStack from '~/navigation/HomeStack';

const AppStack = () => {
  const isLoading = false;
  const userAuthenticated = false;

  if (isLoading) {
    return <SplashStack />;
  }

  return userAuthenticated ? <HomeStack /> : <AuthStack />;
};

export default AppStack;
