import React from 'react';
import {SafeAreaView, View, Text, Image, Pressable} from 'react-native';
import style from './style';
import Buttons from '../../../Components/Buttons/Buttons';
import {horizontalScale} from '../../Styles/Scaling';
import {getFontFamily} from '../../fonts/helper';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../Navigation/Routes';
const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.WelcomePageContainer}>
      <Image
        style={style.WelcomePageImage}
        resizeMode="contain"
        source={require('../../../assets/Images/20944627.jpg')}
      />
      <View style={style.TextContainer}>
        <Text style={style.title}>The Helping Media </Text>
        <Text style={style.punchline}>
          You are one step away from changing lives. {'\n'} Lets get started
          together !
        </Text>
      </View>
      <View>
        <Buttons
          onPress={() => {
            navigation.navigate(Routes.UserTypeSelection);
          }}
          buttonstyle={{width: horizontalScale(250), alignItems: 'center'}}
          title="Get Started"
        />
        <View style={style.LoginContainer}>
          <Text style={style.LoginText}>Already have an Account: </Text>
          <Pressable
            onPress={() => {
              navigation.navigate(Routes.LogIn);
            }}>
            <Text
              style={[
                style.LoginText,
                {color: '#0753F7', fontFamily: getFontFamily('Inter', '700')},
              ]}>
              {' '}
              Log in
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
