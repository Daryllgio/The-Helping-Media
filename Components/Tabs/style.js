import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontsSize} from '../../assets/Styles/Scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  TabsStyle: {
    borderRadius: horizontalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E4EB',
  },
  TabsTxtStyle: {
    color: '#4B5770',
    fontFamily: getFontFamily('inter', '700'),
    textAlign: 'center',
    fontSize: scaleFontsSize(20),
  },
  selected: {
    backgroundColor: '#4962F7',
  },
  selectedText: {
    color: '#ffffff',
  },
});

export default style;
