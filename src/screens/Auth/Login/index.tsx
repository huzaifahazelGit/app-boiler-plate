import {GST} from '@theme';
import {login} from '@assets';
import getStyles from './style';
import React from 'react';
import {View, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Wrapper, ImageComponent} from '@components';
import {IconSets, Icons} from '@utils';

export default function Login() {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);

  return (
    <Wrapper>
      <ScrollView style={[GST.FLEX]} keyboardShouldPersistTaps="always">
        <View style={styles.imgView}>
          <ImageComponent style={styles.img} source={login} />
          <Icons
            iconSet={IconSets.Ionicons}
            name={'star'}
            size={30}
            color="gold"
          />
        </View>
      </ScrollView>
    </Wrapper>
  );
}
