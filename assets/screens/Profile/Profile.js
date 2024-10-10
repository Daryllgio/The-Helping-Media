import React from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import style from './style';
import {ProfileTabsNavigations} from '../../../Navigation/MainNavigation';
import ProfileHeader from './ProfileHeader';
const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ProfileHeader />
        <View style={style.Iconbar}>
          <ProfileTabsNavigations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
