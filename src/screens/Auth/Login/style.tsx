import {StyleSheet} from 'react-native';
import {RF} from '@theme';

const getStyles = (color: any) =>
  StyleSheet.create({
    imgView: {
      height: RF(220),
      backgroundColor: color?.white,
    },
    img: {
      width: '100%',
      height: RF(300),
      marginTop: -20,
    },
  });

export default getStyles;
