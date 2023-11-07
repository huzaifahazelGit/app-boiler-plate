import {
  View,
  StyleProp,
  TextStyle,
  StyleSheet,
  StatusBar,
  ViewStyle,
  ViewProps,
} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props extends ViewProps {
  children?: any;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isPaddingH?: any;
  isTop?: any;
  isMarginHorizontal?: any;
  statusBarStyle?: any;
  statusBarBagColor?: any;
  translucent?: any;
}
const Wrapper = (props: Props) => {
  const theme: any = useTheme();
  const styles = getStyles(theme.colors);

  return (
    <View
      style={[
        styles.container,
        props.viewStyle,
        {
          marginHorizontal: props?.isMarginHorizontal ? RF(10) : 0,
          paddingTop: props?.isTop ? RF(10) : 0,
          paddingHorizontal: props?.isPaddingH ? RF(10) : 0,
        },
      ]}>
      <StatusBar
        translucent={props.translucent ? true : false}
        backgroundColor={
          props.statusBarBagColor ? props.statusBarBagColor : theme.colors.white
        }
        barStyle={props.statusBarStyle ? props.statusBarStyle : 'dark-content'}
      />
      {props.children}
    </View>
  );
};

const getStyles = StyleSheet.create((color: any) => ({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
}));

export default Wrapper;
