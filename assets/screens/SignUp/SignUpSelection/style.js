import {StyleSheet} from 'react-native';
import {verticalScale} from '../../../Styles/Scaling';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    padding: 20,
  },
  content: {
    flex: 1,
    marginTop: verticalScale(130),
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0753F7',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default style;
