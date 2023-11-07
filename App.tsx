import {store} from '@redux';
import {Provider} from 'react-redux';
import React, {useState} from 'react';
import {navigationRef} from '@services';
import {darkThemeStyle, defaultTheme} from '@theme';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

const App = () => {
  const [isEnabledOne, setIsEnabledOne] = useState<Boolean>(false);
  let appTheme = isEnabledOne ? darkThemeStyle : defaultTheme;
  return (
    <Provider store={store}>
      <NavigationContainer theme={appTheme as any} ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
