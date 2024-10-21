import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  keyboardAvoidingView: {
    flex: 1,
    padding: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#b3d9ff',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#0753F7',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0753F7',
  },
  subheader: {
    fontSize: 18,
    color: '#4a4a4a',
    marginBottom: 30,
  },
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
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    fontSize: 16,
    color: '#000',
  },
  eyeIcon: {
    padding: 10,
    position: 'absolute',
    right: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0753F7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  disabledButton: {
    backgroundColor: '#b3d9ff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  backButtonText: {
    color: '#0753F7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmationContainer: {
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#4a4a4a',
  },
  resendButton: {
    borderWidth: 2,
    borderColor: '#0753F7',
    borderRadius: 10,
    padding: 15,
  },
  resendButtonText: {
    color: '#0753F7',
    fontSize: 16,
    fontWeight: 'bold',
  },

  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
  },
});

export default styles;
