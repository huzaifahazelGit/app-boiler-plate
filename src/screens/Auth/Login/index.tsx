import {GST, } from '@theme';
import {login} from '@assets';
import useStyles from './style';

import React from 'react';
import {
  View,
  Image,
  ScrollView,
} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {Wrapper} from '@components';

export default function Login() {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  
  return (
    <Wrapper viewStyle={styles.wrapView}>
      <ScrollView style={[GST.FLEX]} keyboardShouldPersistTaps="always">
        <View style={styles.imgView}>
          <Image style={styles.img} source={login} />
        </View>
     
      </ScrollView>
    </Wrapper>
  );
}
