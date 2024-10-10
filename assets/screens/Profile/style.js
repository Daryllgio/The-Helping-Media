// style.js
import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../Styles/Scaling';
import {getFontFamily} from '../../fonts/helper';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  backImage: {
    height: verticalScale(100),
    width: '100%',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userHandle: {
    fontFamily: getFontFamily('inter', '600'),
    fontSize: scaleFontsSize(15),
    color: '#FFFFFF',
  },
  userHandleContainer: {
    position: 'absolute',
    top: scaleFontsSize(7),
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(2),
    borderRadius: horizontalScale(20),
  },
  settingsButton: {
    position: 'absolute',
    top: scaleFontsSize(4),
    right: scaleFontsSize(5),
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: horizontalScale(5),
    paddingVertical: horizontalScale(5),
    borderRadius: horizontalScale(20),
  },
  profileImageAndStats: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: verticalScale(-15),
  },
  profileImage: {
    borderRadius: horizontalScale(10),
    height: horizontalScale(70),
    width: horizontalScale(70),
    marginHorizontal: horizontalScale(20),
    borderWidth: 3,
    borderColor: 'white',
  },
  userName: {
    fontFamily: getFontFamily('inter', '600'),
    fontSize: scaleFontsSize(18),
    color: '#022150',
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(20),
  },
  accountStat: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
  },
  accountStatScalling: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: horizontalScale(10),
  },
  stats: {
    fontFamily: getFontFamily('inter', '600'),
    fontSize: scaleFontsSize(16),
    color: '#022150',
  },
  statsLabel: {
    fontFamily: getFontFamily('inter', '400'),
    fontSize: scaleFontsSize(14),
    color: '#79869F',
  },

  EditShareSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
    alignItems: 'center',
  },
  EditButton: {
    backgroundColor: '#4962F7',
    height: verticalScale(31),
    width: horizontalScale(120),
    borderRadius: horizontalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  EditButtonText: {
    color: 'white',
    fontSize: scaleFontsSize(17),
    fontFamily: getFontFamily('inter', '600'),
  },
  ShareButton: {
    borderWidth: horizontalScale(2),
    borderRadius: horizontalScale(3),
    paddingHorizontal: horizontalScale(5),
    marginLeft: horizontalScale(10),
    paddingVertical: verticalScale(3),
  },
  Iconbar: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginTop: verticalScale(4),
    borderTopWidth: horizontalScale(1),
    borderTopColor: '#EFF2F6',
    borderBottomWidth: horizontalScale(1),
    borderBottomColor: '#EFF2F6',
  },

  profileTabContentContainer: {
    backgroundColor: 'white',
  },
  postContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(5),
    flexWrap: 'wrap',
  },
  post: {
    marginTop: verticalScale(5),
    height: verticalScale(125),
    width: horizontalScale(112),
    borderRadius: horizontalScale(10),
  },
  InfosContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10),
    flexWrap: 'wrap',
  },
  Infos: {
    marginTop: verticalScale(5),
    height: verticalScale(185),
    width: horizontalScale(161),
    borderRadius: horizontalScale(10),
  },
});

export default style;
