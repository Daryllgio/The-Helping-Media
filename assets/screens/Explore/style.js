import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../Styles/Scaling';
import {getFontFamily} from '../../fonts/helper';

const style = StyleSheet.create({
  PageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  TouchableSearchinput: {
    flexDirection: 'row',
    width: horizontalScale(305),
    backgroundColor: '#EFEFEF',
    height: verticalScale(30),
    borderRadius: horizontalScale(15),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: horizontalScale(10),
  },
  TouchableSearchTxt: {
    fontSize: scaleFontsSize(17),
    fontFamily: getFontFamily('Inter', '500'),
    marginLeft: horizontalScale(5),
    color: '#565656',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: horizontalScale(8),
  },
  input: {
    height: verticalScale(33),
    paddingHorizontal: horizontalScale(10),
    width: horizontalScale(280),
    backgroundColor: '#DFDDDD',
    borderRadius: horizontalScale(25),
    fontSize: scaleFontsSize(18),
    paddingLeft: horizontalScale(30),
    marginLeft: horizontalScale(3),
  },
  SearchIcon: {
    zIndex: 1,
    position: 'absolute',
    left: horizontalScale(15),
  },

  AddIcon: {
    marginLeft: horizontalScale(25),
  },
  CancelTxt: {
    fontSize: scaleFontsSize(17),
    fontFamily: getFontFamily('inter', '400'),
    color: '#022150',
  },
  TabsContainer: {
    flexDirection: 'row',
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
  },
});

export default style;
