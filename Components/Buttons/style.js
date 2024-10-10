import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/Styles/Scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: '#4962F7',

    borderRadius: horizontalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonTxtStyle: {
    fontSize: scaleFontsSize(20),
    color: 'white',
    fontFamily: getFontFamily('inter', '700'),
  },
  disable: {
    opacity: 0.5,
  },
});

export default style;
