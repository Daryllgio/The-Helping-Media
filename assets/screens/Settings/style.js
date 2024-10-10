import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../Styles/Scaling';
import {getFontFamily} from '../../fonts/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: horizontalScale(15),
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9F2',
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: horizontalScale(20),
  },
  headerText: {
    fontSize: scaleFontsSize(24),
    color: '#022150',
    fontFamily: getFontFamily('inter', '700'),
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    padding: horizontalScale(15),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9F2',
  },
  searchInput: {
    height: verticalScale(30),
    backgroundColor: '#F0F3F8',
    borderRadius: horizontalScale(10),
    paddingLeft: horizontalScale(40),
    fontSize: scaleFontsSize(18),
  },
  searchIcon: {
    position: 'absolute',
    left: horizontalScale(30),
    top: verticalScale(21),
  },
  sectionContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(15),
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    fontSize: scaleFontsSize(19),
    color: '#022150',
    fontFamily: getFontFamily('inter', '600'),
    padding: horizontalScale(15),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9F2',
  },
  settingItem: {
    padding: horizontalScale(15),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9F2',
  },

  settingItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  settingItemIcon: {
    marginRight: horizontalScale(15),
  },

  settingText: {
    fontSize: scaleFontsSize(16.5),
    color: '#022150',
    fontFamily: getFontFamily('inter', '500'),
    flex: 1,
  },
  logoutText: {
    color: '#FF3B30',
  },
  logoutIcon: {
    color: '#FF3B30',
  },
});

export default style;
