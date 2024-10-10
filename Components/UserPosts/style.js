import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../assets/Styles/Scaling';
const style = StyleSheet.create({
  post: {
    marginVertical: verticalScale(5),
    borderBottomWidth: verticalScale(1),
    paddingBottom: verticalScale(25),
    borderBottomColor: '#EFF2F6',
  },
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  NamesLoc: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: horizontalScale(5),
  },
  UserName: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsSize(16),
    color: '#000',
    marginBottom: verticalScale(2),
  },
  Location: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsSize(14),
    color: '#79869F',
  },
  Image: {
    marginVertical: verticalScale(6),
    height: verticalScale(345),
    width: horizontalScale(345),
    borderRadius: horizontalScale(5),
  },
  numbers: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontsSize(14),
    color: '#000',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalScale(10),
  },
  iconSpace: {
    marginRight: horizontalScale(4),
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 10, // Increased touch area
  },
  postContent: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(14),
    color: '#000',
    marginVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  readMore: {
    color: '#0066CC',
    fontFamily: getFontFamily('Inter', '600'),
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(10),
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});

export default style;
