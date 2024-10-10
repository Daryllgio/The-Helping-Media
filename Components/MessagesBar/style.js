import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/Styles/Scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  MessagesBarContainer: {
    height: verticalScale(65),
    borderBottomWidth: horizontalScale(1),
    borderBottomColor: '#79869F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  UserMessageSec: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextContainer: {
    width: horizontalScale(270),

    height: verticalScale(50),
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(5),
  },
  Name: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsSize(17),
    color: '#000',
    marginBottom: verticalScale(3),
  },
  TextSec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: horizontalScale(250),
  },
  message: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontsSize(15),
    color: '#818181',
  },
  DorH_received: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(14),
    color: '#818181',
  },
  icon: {
    borderLeftWidth: horizontalScale(1),
    height: verticalScale(50),
    paddingLeft: horizontalScale(15),
    justifyContent: 'center',
    borderLeftColor: '#CCCCCC',
  },
  NotificationCirle: {
    marginHorizontal: horizontalScale(8),
  },
});

export default style;
