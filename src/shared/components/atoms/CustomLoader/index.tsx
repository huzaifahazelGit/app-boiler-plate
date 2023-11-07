import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

interface LoaderProps {}
const CustomLoader = (props: Partial<LoaderProps>) => {
  const isLoading = useSelector((state: any) => state.root.common.isLoading);

  return isLoading ? (
    <View style={styles.loading}>
      <ActivityIndicator size={55} color="#00ff00" />
    </View>
  ) : null;
};
export default CustomLoader;

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 11111,
    width: '100%',
    height: '100%',
  },
});
