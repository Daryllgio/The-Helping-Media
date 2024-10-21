import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faHandHoldingHeart,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import style from './style';

const UserTypeSelection = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.backButton}>
        <FontAwesomeIcon icon={faChevronLeft} size={24} color="#333" />
      </TouchableOpacity>
      <View style={style.content}>
        <Text style={style.title}>I am a ...</Text>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('CharitySignUp')}>
          <FontAwesomeIcon
            icon={faUsers}
            size={24}
            color="#fff"
            style={style.icon}
          />
          <Text style={style.buttonText}>Charitable Organization</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('DonorSignUp')}>
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            size={24}
            color="#fff"
            style={style.icon}
          />
          <Text style={style.buttonText}>Compassionate Donor</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserTypeSelection;
