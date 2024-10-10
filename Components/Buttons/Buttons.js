import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Buttons = props => {
  return (
    //The disabled is used to enable or disable the button depending on the
    <Pressable
      disabled={props.isDisabled}
      onPress={props.onPress}
      style={[
        style.ButtonStyle,
        props.isDisabled && style.disable,
        {width: props.ButtonWidth, height: props.ButtonHeight},
      ]}>
      <Text style={style.ButtonTxtStyle}>{props.ButtonTxt}</Text>
    </Pressable>
  );
};

Buttons.defaultProps = {
  // Default state of the button is set to disabled here
  isDisabled: true,
  onPress: () => {},
};

Buttons.PropTypes = {
  ButtonTxt: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool, // To confirm if the button is disabled or enabled
  onPress: PropTypes.func,
  ButtonWidth: PropTypes.number.isRequired,
  ButtonHeight: PropTypes.number.isRequired,
};
export default Buttons;
