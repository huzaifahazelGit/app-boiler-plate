import {} from '@screens';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabs from './../index';
import {CustomDrawerContent} from '@components';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  const myTheme: any = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: myTheme.colors.DRWAER_FIRST_COLOR,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
