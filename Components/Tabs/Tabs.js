import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Tabs = props => {
  return (
    //The disabled is used to enable or disable the button depending on the
    <Pressable
      onPress={props.onPress}
      style={[
        style.TabsStyle,
        props.isSelected && style.selected,
        {width: props.TabsWidth, height: props.TabsHeight},
      ]}>
      <Text
        style={[
          style.TabsTxtStyle,
          props.isSelected && style.selectedText,
          {fontSize: props.TabsTextFont},
        ]}>
        {props.TabsTxt}
      </Text>
    </Pressable>
  );
};

Tabs.defaultProps = {
  // Default state of the button is set to disabled here
  isSelected: false,
  onPress: () => {},
};

Tabs.PropTypes = {
  TabsTxt: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
  TabsWidth: PropTypes.number.isRequired,
  TabsHeight: PropTypes.number.isRequired,
  TabsTextFont: PropTypes.string.isRequired,
};
export default Tabs;
