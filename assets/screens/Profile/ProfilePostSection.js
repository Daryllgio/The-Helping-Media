import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import style from './style';

const ProfilePostSection = () => {
  return (
    <View style={style.profileTabContentContainer}>
      <View style={style.postContainers}>
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.post}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.post}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.post}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.post}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.post}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.post}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.post}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.post}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.post}
        />
      </View>
    </View>
  );
};
export default ProfilePostSection;
