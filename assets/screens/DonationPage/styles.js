import {StyleSheet} from 'react-native';
import {
  scaleFontsSize,
  horizontalScale,
  verticalScale,
} from '../../Styles/Scaling';
import {getFontFamily} from '../../fonts/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    fontSize: scaleFontsSize(25),
    fontFamily: getFontFamily('inter', '700'),
    marginBottom: verticalScale(20),
    textAlign: 'center',
    color: '#022150',
  },
  input: {
    height: verticalScale(35),
    borderColor: '#ccc',
    borderWidth: horizontalScale(1),
    borderRadius: horizontalScale(5),
    marginBottom: verticalScale(20),
    paddingHorizontal: verticalScale(10),
    backgroundColor: '#fff',
    fontSize: scaleFontsSize(18),
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  txt: {
    fontSize: scaleFontsSize(20),
    fontFamily: getFontFamily('inter', '600'),
    color: '#022150',
  },
  optionButton: {
    padding: horizontalScale(10),
    backgroundColor: '#eee',
    borderRadius: horizontalScale(5),
    marginVertical: verticalScale(5),
  },
  option: {
    fontSize: scaleFontsSize(16),
  },
  selectedOption: {
    fontSize: scaleFontsSize(16),
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
