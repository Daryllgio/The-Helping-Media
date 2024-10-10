import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import style from './style';
const ProfileEventsSection = () => {
  return (
    <View style={style.profileTabContentContainer}>
      <View style={style.InfosContainers}>
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.Infos}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.Infos}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.Infos}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.Infos}
        />
        <Image
          source={require('../../../assets/Images/default_post.png')}
          style={style.Infos}
        />
      </View>
    </View>
  );
};
export default ProfileEventsSection;
