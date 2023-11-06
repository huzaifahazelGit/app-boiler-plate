import {GST, Typography} from '@theme';
import {login} from '@assets';
import {showToast, Titles} from '@utils';
import useStyles from './style';
import {navigate, signin} from '@services';

import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {AppText, AppTextInput, PrimaryButton, Wrapper} from '@components';

export default function Login() {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [rememberEmail, setRememberEmail] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressToggleButton = () => {
    setRememberEmail(!rememberEmail);
  };

  return (
    <Wrapper viewStyle={styles.wrapView}>
      <ScrollView style={{...GST.MAIN}} keyboardShouldPersistTaps="always">
        <View style={styles.imgView}>
          <Image style={styles.img} source={login} />
        </View>
        <View style={[styles.wrapContainer]}>
          <KeyboardAvoidingView>
            <AppTextInput
              title={Titles.EMAIL}
              onChangeText={(txt: any) => {
                setEmail(txt);
              }}
              placeholder={'Email Address'}
            />
            <View style={styles.topMarginView} />
            <AppTextInput
              title={Titles.PASSWORD}
              onChangeText={(txt: any) => {
                setPassword(txt);
              }}
              placeholder={'Password'}
              secureTextEntry
            />
            <View style={[styles.wrapRememberSection]}>
              <AppText
                medium
                defaultTextColor
                title={'Forgot Password?'}
                size={Typography.FONTS.SIZE.MEDIUM}
                onPress={() => navigate('ManagerPassword')}
              />
            </View>
            <View style={styles.wrapButton}>
              <PrimaryButton
                title={Titles.LOGIN}
                buttonStyle={styles.btn}
                bgColor={myTheme?.colors?.text}
                onPress={() => {
                  onLogin();
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </Wrapper>
  );
}
