import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../Styles/Scaling';
import {getFontFamily} from '../../fonts/helper';

const style = StyleSheet.create({
  WelcomePageContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  WelcomePageImage: {
    width: horizontalScale(390),
    height: verticalScale(275),
  },
  TextContainer: {
    paddingHorizontal: horizontalScale(5),
    marginTop: verticalScale(-50),
  },
  title: {
    textAlign: 'center',
    fontSize: scaleFontsSize(28),
    fontFamily: getFontFamily('inter', '700'),
    marginBottom: verticalScale(10),
  },
  punchline: {
    textAlign: 'center',
    fontSize: scaleFontsSize(16),
    fontFamily: getFontFamily('inter', '400'),
  },
  LoginContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginText: {
    fontSize: scaleFontsSize(16),
    fontFamily: getFontFamily('inter', '400'),
  },
});

export default style;
