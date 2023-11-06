import React, {useState} from 'react';
import useStyles from './style';
import {GenericNavigation, } from '@utils';
import {View, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { Wrapper } from '@components';

interface Props extends GenericNavigation {}

export default function ManagerPassword(props: Props) {
  const myTheme: any = useTheme();
  const style = useStyles(myTheme.colors);
  const [errorText, setErrorText] = useState('');

  return (
    <>
      <Wrapper isTop>
        <View style={style.wrapContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            
          </ScrollView>
        </View>
      </Wrapper>
    </>
  );
}
