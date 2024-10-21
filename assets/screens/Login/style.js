import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../Styles/Scaling';
import {getFontFamily} from '../../fonts/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0753F7',
  },
  content: {
    flex: 1,
    padding: horizontalScale(20),
  },
  backButton: {},
  welcomeContainer: {
    marginTop: verticalScale(50),
    marginBottom: verticalScale(30),
  },
  welcomeText: {
    fontSize: scaleFontsSize(36),
    color: '#ffffff',
    fontFamily: getFontFamily('Inter', '700'),
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: horizontalScale(20),
    padding: horizontalScale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputWrapper: {
    marginBottom: verticalScale(13),
    position: 'relative',
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: horizontalScale(10),
    padding: horizontalScale(15),
    fontSize: scaleFontsSize(16),
  },
  eyeIcon: {
    position: 'absolute',
    right: horizontalScale(15),
    top: verticalScale(15),
  },
  forgotPassword: {
    color: '#0753F7',
    textAlign: 'right',
    marginBottom: verticalScale(15),
    fontFamily: getFontFamily('Inter', '500'),
  },
  loginButton: {
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: scaleFontsSize(18),
    fontFamily: getFontFamily('Inter', '700'),
  },
});

export default style;
