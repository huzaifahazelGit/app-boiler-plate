import {} from '@assets';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {} from '@screens';
import {RF} from '@theme';
import MainStack from '../stacks/mainStack';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);

  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: myTheme.colors.SEGMENTED_BORDER_COLOR,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarIconStyle: styles.tabIcon,
      })}>
      <Tab.Screen
        name="HomeStack"
        component={MainStack}
        options={{
          // tabBarStyle: {
          //   display: 'none',
          // },
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon source={focused ? '' : ''} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="GRSStack"
        component={MainStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon source={focused ? '' : ''} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCreditStack"
        component={MainStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon source={focused ? '' : ''} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PlastkCardStack"
        component={MainStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon source={focused ? '' : ''} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabBarIcon = ({source, color}: {source: any; color: string}) => (
  <Image
    source={source}
    style={{
      width: RF(20),
      height: RF(20),
      tintColor: color,
    }}
    resizeMode={'contain'}
  />
);

export default MainTabs;

const useStyles = (colors: any) =>
  StyleSheet.create({
    tabIcon: {
      width: RF(20),
      maxHeight: RF(30),
      marginTop: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarStyle: {
      backgroundColor: colors.BOTTOM_TAB_COLOR,
      height: '8%',
      justifyContent: 'center',
      paddingBottom: RF(10),
      borderTopWidth: 0,
    },
  });
