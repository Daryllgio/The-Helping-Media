import {StyleSheet} from 'react-native';
import {scaleFontsSize} from '../../assets/Styles/Scaling';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale} from '../../assets/Styles/Scaling';
const style = StyleSheet.create({
  NotificationCircleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  NotificationNumber: {
    fontSize: scaleFontsSize(14),
    fontFamily: getFontFamily('inter', '600'),
    letterSpacing: -1.5,
    color: 'white',
    paddingHorizontal: horizontalScale(5),
  },
});

export default style;
