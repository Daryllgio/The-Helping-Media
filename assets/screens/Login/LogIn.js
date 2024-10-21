import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import Buttons from '../../../Components/Buttons/Buttons';

const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Login', 'Please fill all the fields!');
      return;
    }
    // Proceed with login logic here
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={style.content}>
        <Pressable onPress={() => navigation.goBack()} style={style.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color={'#ffffff'} />
        </Pressable>
        <View style={style.welcomeContainer}>
          <Text style={style.welcomeText}>Hey,{'\n'}Welcome Back</Text>
        </View>
        <View style={style.formContainer}>
          <View style={style.inputWrapper}>
            <TextInput
              style={style.input}
              placeholder="Username or Email"
              placeholderTextColor="#747474"
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          <View style={style.inputWrapper}>
            <TextInput
              style={style.input}
              placeholder="Password"
              placeholderTextColor="#747474"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={style.eyeIcon}>
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                size={20}
                color="#A0A0A0"
              />
            </Pressable>
          </View>
          <Pressable onPress={() => console.log('Forgot password pressed')}>
            <Text style={style.forgotPassword}>Forgot Password?</Text>
          </Pressable>
          <Buttons
            onPress={onSubmit}
            buttonstyle={style.loginButton}
            title="Log In"
            titlestyle={style.loginButtonText}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LogIn;
