import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStories = props => {
  return (
    <View style={style.StoriesContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        ImageDimensions={56} // Code to set the image dimensions for the user stories
      />
      <Text style={style.UserName}>{props.UserName}</Text>
    </View>
  );
};

UserStories.propTypes = {
  UserName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStories;
