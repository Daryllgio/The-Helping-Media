import React from 'react';
import {View, Text} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './style';
import PropTypes from 'prop-types';
import {scaleFontsSize} from '../../assets/Styles/Scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

const MessageBar = props => {
  const truncateName = (name, maxLength) => {
    return name.length > maxLength
      ? name.substring(0, maxLength - 3) + '...'
      : name;
  };

  return (
    <View style={style.MessagesBarContainer}>
      <FontAwesomeIcon
        icon={faCircle}
        size={10}
        color={'#0753F7'}
        style={style.NotificationCirle}
      />
      <View style={style.UserMessageSec}>
        <View style={style.profileImage}>
          <UserProfileImage
            profileImage={props.profileImage}
            ImageDimensions={43}
          />
        </View>
        <View style={style.TextContainer}>
          <Text style={style.Name}>
            {truncateName(props.Name, scaleFontsSize(33))}
          </Text>
          <View style={style.TextSec}>
            <Text style={style.message}>
              {truncateName(props.message, scaleFontsSize(34.5))}
            </Text>
            <Text style={style.DorH_received}>{props.DorH_received}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

MessageBar.propTypes = {
  Name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
  ImageDimensions: PropTypes.number.isRequired,
  DorH_received: PropTypes.string.isRequired,
};

export default MessageBar;
