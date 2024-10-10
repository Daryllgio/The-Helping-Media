import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../Styles/Scaling';
import {getFontFamily} from '../../fonts/helper';

const style = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  Container: {
    flex: 1,
    width: '100%',
  },
  OptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  HeaderTxt: {
    marginBottom: verticalScale(5),
    fontSize: scaleFontsSize(23),
    fontFamily: getFontFamily('inter', '700'),
    color: '#022150',
  },
  Option: {
    margin: horizontalScale(5),
  },
  categoryContainer: {
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(12),
    marginTop: verticalScale(8),
    marginBottom: horizontalScale(13),
  },
  PageHearderTxt: {
    fontSize: scaleFontsSize(21),
    fontFamily: getFontFamily('inter', '700'),
    color: '#022150',
    textAlign: 'center',
  },
  HearderTxtTExplanation: {
    fontSize: scaleFontsSize(15),
    fontFamily: getFontFamily('inter', '400'),
    color: '#022150',
    textAlign: 'center',
    marginTop: verticalScale(5),
  },
});

export default style;
