import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/Styles/Scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#0753F7',
    borderRadius: horizontalScale(10),
    padding: horizontalScale(15),
    borderCurve: 'continuous',
  },
  Shadowstyle: {
    shadowColor: '#000',
    shadowOffset: {width: horizontalScale(0), height: verticalScale(3)},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    fontSize: scaleFontsSize(17),
    fontFamily: getFontFamily('Inter', '700'),
    color: '#ffffff',
  },
});

export default style;
