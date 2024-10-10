import {StyleSheet} from 'react-native';
import {
  scaleFontsSize,
  horizontalScale,
  verticalScale,
} from '../../assets/Styles/Scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  filterContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: horizontalScale(15),
    marginTop: verticalScale(60),
    marginLeft: horizontalScale(15),
    width: horizontalScale(215),
  },
  triangle: {
    position: 'absolute',
    top: verticalScale(-15),
    left: horizontalScale(6),
    width: horizontalScale(0),
    height: verticalScale(0),
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: horizontalScale(20),
    borderRightWidth: horizontalScale(20),
    borderBottomWidth: verticalScale(20),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
  filterTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterTitle: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontsSize(19),
    marginBottom: verticalScale(5),
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  filterOptionText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(16),
    marginLeft: horizontalScale(15),
  },
});

export default style;
