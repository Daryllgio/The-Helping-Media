import {StyleSheet, Dimensions} from 'react-native';
import {getFontFamily} from '../../../assets/fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scaleFontsSize,
} from '../../../assets/Styles/Scaling';

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    paddingBottom: verticalScale(80), // Add some bottom padding for scrolling
  },
  headerImage: {
    width: width,
    height: verticalScale(165),
  },
  carouselImage: {
    width: width * 0.8, // 80% of screen width
    height: verticalScale(200),
    borderRadius: horizontalScale(10),
  },
  carouselContainer: {
    paddingHorizontal: horizontalScale(20),
  },
  contentContainer: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(13),
  },
  eventName: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontsSize(23),
    color: '#000',
    marginBottom: verticalScale(5),
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(5),
  },
  infoText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontsSize(17),
    color: '#000',
    marginLeft: horizontalScale(10),
  },
  notificationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  progressContainer: {
    marginTop: verticalScale(2),
  },
  progressText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontsSize(16),
    color: '#000',
    marginBottom: verticalScale(5),
  },
  supportersText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(15),
    color: '#000',
    marginTop: verticalScale(5),
  },
  descriptionTitle: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontsSize(22),
    color: '#000',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(6),
  },
  descriptionText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(17),
    color: '#000',
    lineHeight: 22,
  },
  descriptionExpandText: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsSize(16),
    color: '#0753F7',
    marginTop: verticalScale(5),
    textDecorationLine: 'underline',
  },
  donateButton: {
    backgroundColor: '#0753F7',
    padding: horizontalScale(15),
    borderRadius: horizontalScale(10),
    alignItems: 'center',
    width: horizontalScale(240),
  },
  donateButtonText: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontsSize(18),
    color: '#FFFFFF',
  },
  ActionButtonContainer: {
    borderTopWidth: scaleFontsSize(1),
    borderColor: '#ccc',
  },
  ActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(20),
    paddingTop: verticalScale(10),
  },
  backButton: {
    position: 'absolute',
    top: verticalScale(10),
    left: horizontalScale(10),
    zIndex: 1,
    padding: horizontalScale(5),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: horizontalScale(20),
  },
  VolunteeringContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(15),
    marginVertical: verticalScale(12),
  },
  VolunteeringTxt: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(16.5),
    paddingRight: horizontalScale(16),
    color: '#000',
  },
  MapContainer: {
    borderBottomWidth: scaleFontsSize(1),
    borderColor: '#ccc',
    marginBottom: verticalScale(-80),
  },
  MapImageContainer: {
    paddingTop: verticalScale(15),
    backgroundColor: '#f3f3f3',
  },
  MapImage: {
    width: '100%',
    height: verticalScale(130),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(13),
    paddingVertical: verticalScale(8),
  },
  locationText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontsSize(16.5),
    color: '#000',
    marginLeft: horizontalScale(10),
  },
});

export default style;
