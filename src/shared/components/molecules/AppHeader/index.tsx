import React from 'react';
import {AppText} from '@components';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

interface Props {
  leftIcon?: any;
  title?: string;
  textStyle?: StyleProp<TextStyle>;
  showLeftIcon?: any;
  showRightIcon?: any;
  showSecondaryRightIcon?: boolean;
  secondaryRightIcon?: any;
  onPressRightIcon?: any;
  onPressSecondaryRightIcon?: any;
  rightIcon?: any;
  headerBackground?: any;
  backAction?: any;
  onPressLogo?: () => void;
  headerTitleColor?: any;
  leftIconColor?: any;
  size?: any;
  textColor?: string;
  rightIconStyle?: StyleProp<ImageStyle>;
  inputRef?: any;
  headerstyle?: StyleProp<ViewStyle>;
  titleCenterAlign?: any;
  rightCenterAlign?: any;
  rightFlexRemoval?: any;
  leftIconStyle?: StyleProp<ImageStyle>;
  headerBackgroundColor?: StyleProp<ViewStyle>;
}

const AppHeader = (props: Props) => {
  const {
    size,
    title,
    headerstyle,
    leftIcon,
    textStyle,
    backAction,
    showLeftIcon,
    showRightIcon,
    onPressRightIcon,
    rightIcon,
    headerBackground,
    headerTitleColor,
    leftIconColor,
    rightIconStyle,
    titleCenterAlign,
    rightCenterAlign,
    leftIconStyle,
    headerBackgroundColor,
    rightFlexRemoval,
  } = props;
  const myTheme: any = useTheme();
  const navigation = useNavigation();
  const styles = getStyles(myTheme.colors);
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.container,
        headerstyle,
        {
          backgroundColor: headerBackgroundColor
            ? headerBackgroundColor
            : headerBackground
            ? 'transparent'
            : myTheme?.colors?.white,
        },
      ]}>
      <View style={styles.left}>
        {showLeftIcon && (
          <Pressable
            style={styles.backView}
            onPress={backAction ? backAction : () => handleBack()}>
            <Image
              source={leftIcon}
              style={[
                styles.img,
                {
                  tintColor: leftIconColor
                    ? leftIconColor
                    : myTheme.colors.white,
                },
                leftIconStyle,
              ]}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.text}>
        <AppText
          semiBold
          style={textStyle}
          size={size ? size : RF(18)}
          center={titleCenterAlign ? true : false}
          color={headerTitleColor ? headerTitleColor : 'white'}>
          {title}
        </AppText>
      </View>
      <View
        style={[
          styles.right,
          {flex: rightFlexRemoval ? 0 : 0.2},
          {justifyContent: rightCenterAlign ? 'center' : 'flex-end'},
        ]}>
        {showRightIcon && (
          <TouchableOpacity activeOpacity={1} onPress={onPressRightIcon}>
            <Image
              source={rightIcon}
              style={[styles.rightIcon, rightIconStyle]}
            />
            {/* <ImageComponent
                source={rightIcon}
                style={[styles.rightIcon, rightIconStyle]}
              /> */}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    rightIcon: {width: RF(18), height: RF(18)},
    text: {
      flex: 1,
      justifyContent: 'center',
    },
    img: {
      width: RF(24),
      height: RF(24),
      resizeMode: 'contain',
      marginTop: RF(5),
    },
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      height: RF(70),
      paddingHorizontal: RF(20),
    },
    rightButton: {
      alignItems: 'center',
    },
    right: {
      flexDirection: 'row',
      alignItems: 'center',
      // flex: 0.2,
    },
    icon: {
      width: RF(22),
      height: RF(25),
    },
    logo: {
      height: RF(25),
      width: RF(40),
    },
    title: {
      width: RF(200),
      color: colors.psp_text,
      fontSize: RF(20),
    },
    backView: {},
    left: {
      justifyContent: 'center',
      flex: 0.2,
    },
  });

export default AppHeader;
