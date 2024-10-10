import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontsSize} from '../../assets/Styles/Scaling';

const style = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    marginLeft: 16,
    fontSize: scaleFontsSize(16),
    color: '#022150',
    fontFamily: getFontFamily('inter', '400'),
  },
});

export default style;
