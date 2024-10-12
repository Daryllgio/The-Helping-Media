import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scaleFontsSize,
} from '../../Styles/Scaling';

const style = StyleSheet.create({
  hearder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(8),
  },
  HeaderTxt: {
    fontFamily: getFontFamily('Inter', '600'),
    color: '#000',
    fontSize: scaleFontsSize(27),
  },
  IconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Stories: {
    marginBottom: horizontalScale(-10),
  },
  Icon: {
    marginRight: horizontalScale(15),
  },
  messageNumberContainer: {
    position: 'absolute',
    width: horizontalScale(25),
    height: horizontalScale(18),
    right: horizontalScale(-10),
    top: verticalScale(-1),
  },
  messageNumber: {
    color: 'white',
    letterSpacing: horizontalScale(-1),
    fontSize: scaleFontsSize(14),
    fontFamily: getFontFamily('Inter', '700'),
    textAlign: 'center',
  },
  AppContainer: {
    marginHorizontal: horizontalScale(10),
  },
});

export default style;
