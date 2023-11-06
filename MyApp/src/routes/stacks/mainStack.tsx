import React from 'react';
import {Login} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default MainStack;
