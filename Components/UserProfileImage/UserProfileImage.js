import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import style from './style';

const UserProfileImage = props => {
  return (
    <View
      style={[
        style.StoriesContainerColor,
        {borderRadius: props.ImageDimensions},
      ]}>
      <Image
        source={props.profileImage}
        style={{
          width: props.ImageDimensions,
          height: props.ImageDimensions,
          borderRadius: props.ImageDimensions,
        }}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  ImageDimensions: PropTypes.number.isRequired, // Number used to put the appropriate size of the image depending on the situation (Stories and Posts)
};

export default UserProfileImage;
