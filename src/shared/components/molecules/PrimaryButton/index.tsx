import * as React from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {RF, Typography} from '@theme';
import {AppText} from '@components';

interface Props extends TouchableOpacityProps {
  clr?: any;
  title?: any;
  bgColor?: any;
  onPress?: () => void;
  disableBackgroundColor?: any;
  buttonStyle?: StyleProp<ViewStyle>;
}

const PrimaryButton = (props: Props) => {
  const myTheme: any = useTheme();
  const {disableBackgroundColor, bgColor, buttonStyle, onPress, title, clr} =
    props;
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[
        styles.container,
        buttonStyle,
        {
          backgroundColor: bgColor ? bgColor : myTheme?.colors?.text,
          borderColor:
            !disableBackgroundColor == false ? '' : myTheme?.colors?.border,
          borderWidth: !disableBackgroundColor == false ? 0.2 : 0,
        },
      ]}>
      <AppText
        medium
        size={Typography.FONTS.SIZE.MEDIUM}
        color={clr ? clr : myTheme?.colors?.white}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    width: RF(130),
    height: RF(40),
    borderRadius: RF(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RF(15),
  },
});
