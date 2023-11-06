import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainDrawer from './drawer/mainDrawer';
import AuthStack from './stacks/authStack';
import MainStack from './stacks/mainStack';

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn2] = useState(true);
  const [status, setStatus] = useState('');

  return (
    <SafeAreaProvider>
      {isLoggedIn && status === 'Active' ? (
        <MainDrawer />
      ) : isLoggedIn && status !== 'Active' ? (
        <MainStack />
      ) : (
        <AuthStack />
      )}
      {/* <>{isLoggedIn ? <MainStack /> : <AuthStack />}</> */}
    </SafeAreaProvider>
  );
};

export default Routes;
