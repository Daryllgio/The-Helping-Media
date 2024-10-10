import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {horizontalScale, verticalScale} from '../../assets/Styles/Scaling';
import style from './style';

const NotificationCircle = props => {
  const [textWidth, setTextWidth] = useState(0);
  const PaddingHorizontal = 5; // Padding around the text
  const fixedHeight = verticalScale(13); // Fixed height for the circle

  const circleWidth = {
    width: horizontalScale(PaddingHorizontal * 2 + textWidth),
    height: fixedHeight,
    borderRadius: fixedHeight / 2, // Make the border radius half of the fixed height to ensure it's rounded
  };

  const NumberRef = useRef(null);
  return (
    <View style={[circleWidth, style.NotificationCircleContainer]}>
      <Text
        style={style.NotificationNumber}
        ref={NumberRef}
        onTextLayout={event => {
          setTextWidth(event.nativeEvent.lines[0].width);
        }}>
        {props.NotificationNumber}
      </Text>
    </View>
  );
};

NotificationCircle.propTypes = {
  NotificationNumber: PropTypes.number.isRequired,
};

export default NotificationCircle;
