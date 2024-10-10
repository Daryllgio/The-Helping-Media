import React from 'react';
import {Text, View, Image, Pressable, ImageBackground} from 'react-native';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons';
import {scaleFontsSize} from '../../Styles/Scaling';
import {Routes} from '../../../Navigation/Routes';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ProfileHeader = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);

  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../../assets/Images/default_post.png')}
        style={style.backImage}>
        <View style={style.headerContent}>
          <View style={style.userHandleContainer}>
            <Text style={style.userHandle}>@TheGwags</Text>
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate(Routes.Settings);
            }}
            style={style.settingsButton}>
            <FontAwesomeIcon
              icon={faGear}
              size={scaleFontsSize(19)}
              color={'#FFFFFF'}
            />
          </Pressable>
        </View>
      </ImageBackground>
      <View style={style.profileImageAndStats}>
        <Image
          source={require('../../../assets/Images/default_profile.png')}
          style={style.profileImage}
        />
        <View style={style.accountStat}>
          <View style={style.accountStatScalling}>
            <Text style={style.stats}>50M</Text>
            <Text style={style.statsLabel}>Followers</Text>
          </View>
          <View style={style.accountStatScalling}>
            <Text style={style.stats}>300</Text>
            <Text style={style.statsLabel}>Events</Text>
          </View>
          <View style={style.accountStatScalling}>
            <Text style={style.stats}>90M</Text>
            <Text style={style.statsLabel}>Donations</Text>
          </View>
        </View>
      </View>
      <Text style={style.userName}>{user.orgName}</Text>
    </View>
  );
};

export default ProfileHeader;
