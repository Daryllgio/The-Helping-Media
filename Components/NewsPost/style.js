import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/Styles/Scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  NewsContainer: {
    marginBottom: verticalScale(10),
    borderBottomWidth: verticalScale(2),
    paddingBottom: verticalScale(15),
    borderBottomColor: '#EFF2F6',
    backgroundColor: '#FAFAFA',
    padding: horizontalScale(10),
    borderRadius: 8,
  },
  UserDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  AccountName: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsSize(16),
    marginLeft: horizontalScale(10),
  },
  Timestamp: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(12),
    color: '#666',
    marginLeft: 'auto',
  },
  NewsContent: {
    flexDirection: 'column',
  },
  NewsHeader: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontsSize(20),
    color: '#000',
    marginBottom: verticalScale(7),
  },
  NewsBody: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(15),
    color: '#333',
    marginBottom: verticalScale(7),
    lineHeight: 22,
  },
  NewsBodyExpandText: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsSize(14),
    color: '#0753F7',
    textDecorationLine: 'underline',
  },
  IconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
    paddingTop: verticalScale(10),
    borderTopWidth: 1,
    borderTopColor: '#EFF2F6',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpace: {
    marginRight: horizontalScale(4),
  },

  ImagePlaceholder: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(14),
    color: '#666',
    marginTop: verticalScale(5),
  },
  imageContainer: {
    marginVertical: verticalScale(10),
  },
});

export default style;
