import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/Styles/Scaling';

const styles = StyleSheet.create({
  StoriesContainerColor: {
    borderColor: '#022150',
    borderWidth: horizontalScale(3),
    paddingHorizontal: horizontalScale(3),
    paddingVertical: verticalScale(3),
  },
});

export default styles;
