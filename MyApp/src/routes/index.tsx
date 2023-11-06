import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStack from './stacks/authStack';
import MainStack from './stacks/mainStack';

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <SafeAreaProvider>
     {isLoggedIn ? <MainStack /> : <AuthStack />}
   </SafeAreaProvider>
  );
};

export default Routes;
