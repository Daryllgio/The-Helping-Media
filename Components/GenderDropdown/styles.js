import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 16,
  },
  activeInput: {
    color: '#000',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  modalContent: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 5,
    zIndex: 999,
    maxHeight: 220, // Increased max height for better visibility
  },
  dropdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  activeDropdownText: {
    color: '#0753F7',
    fontWeight: 'bold',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 16,
    top: 20, // Adjust this value to vertically center the icon
  },
});

export default styles;
