import React from 'react';
import {Pressable, View, Text, ActivityIndicator} from 'react-native';
import style from './style';

const Loading = () => {
  return (
    <View style={style.LoadingContainer}>
      <ActivityIndicator size={'large'} color={'#0753F7'} />
    </View>
  );
};
export default Loading;
