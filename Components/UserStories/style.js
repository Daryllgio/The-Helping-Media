import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/Styles/Scaling';

const styles = StyleSheet.create({
  StoriesContainer: {
    width: horizontalScale(80),
    height: horizontalScale(95),
    alignItems: 'center',
  },
  UserName: {
    fontSize: scaleFontsSize(13),
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    textAlign: 'center',
    letterSpacing: 0.14,
    marginTop: verticalScale(4),
  },
});

export default styles;
