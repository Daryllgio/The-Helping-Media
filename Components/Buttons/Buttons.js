import React from 'react';
import {Pressable, View, Text} from 'react-native';
import style from './style';
import Loading from '../Loading/Loading';

const Buttons = ({
  buttonstyle,
  titlestyle,
  title = '',
  onPress,
  loading = false,
  hasShadow = true,
}) => {
  if (loading) {
    return (
      <View style={[style.button, buttonstyle, {backgroundColor: 'white'}]}>
        <Loading />
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[style.button, buttonstyle, hasShadow && style.Shadowstyle]}>
      <Text style={[style.text, titlestyle]}>{title}</Text>
    </Pressable>
  );
};
export default Buttons;
