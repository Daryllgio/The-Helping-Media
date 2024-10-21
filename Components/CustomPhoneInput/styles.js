import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  phoneInputContainer: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    overflow: 'hidden',
  },
  phoneInputTextContainer: {
    backgroundColor: 'white',
    borderLeftWidth: 1,
    borderLeftColor: '#d1d1d1',
    height: '100%',
    paddingLeft: 10,
  },
  phoneInputTextInput: {
    fontSize: 16,
    color: '#000',
    height: 58,
    paddingVertical: 0,
    paddingLeft: 0,
  },
  phoneInputCodeText: {
    fontSize: 16,
    color: '#000',
  },
  phoneInputFlagButton: {
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneInputCountryPickerButton: {
    width: 60,
    height: '100%',
  },
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default styles;
