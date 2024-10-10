import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/Styles/Scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  Container: {
    marginTop: verticalScale(10),
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: verticalScale(10),
  },
  ImageContainer: {
    alignItems: 'center',
    marginVertical: verticalScale(7),
  },
  UserDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizontalScale(18),
  },
  AccountName: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsSize(17),
    marginLeft: horizontalScale(5),
  },
  Image: {
    height: verticalScale(175),
    width: horizontalScale(320),
    borderRadius: horizontalScale(10),
    justifyContent: 'center',
  },
  hearderContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(7),
    justifyContent: 'center',
  },
  EventName: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontsSize(20),
    marginRight: horizontalScale(5),
    width: horizontalScale(255),
  },
  EventDetailsContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(8),
    marginHorizontal: horizontalScale(20),
  },
  EventDetailsText: {
    fontSize: scaleFontsSize(17),
    marginLeft: horizontalScale(5),
  },
  StatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statistics: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontsSize(16),
  },
  ActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: horizontalScale(35),
    marginTop: verticalScale(10),
  },
  ReadMoreTxt: {
    color: 'black',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontsSize(18),
    marginLeft: horizontalScale(23),
  },
  DonateTxtx: {
    color: 'white',
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontsSize(17),
  },
  DonateButton: {
    height: verticalScale(45),
    width: horizontalScale(140),
    backgroundColor: '#0753F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleFontsSize(10),
  },
});
export default style;
