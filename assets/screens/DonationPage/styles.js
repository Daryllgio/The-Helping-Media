import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../Styles/Scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: horizontalScale(20),
    paddingBottom: verticalScale(100),
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginBottom: verticalScale(5),
  },
  recipientText: {
    fontSize: scaleFontsSize(22),
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: verticalScale(18),
    paddingHorizontal: horizontalScale(5),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(7),
    marginBottom: verticalScale(14),
    paddingHorizontal: horizontalScale(16),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputIcon: {
    marginRight: horizontalScale(12),
  },
  input: {
    flex: 1,
    height: verticalScale(39),
    fontSize: scaleFontsSize(16),
    color: '#1F2937',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  switchText: {
    fontSize: scaleFontsSize(18),
    fontWeight: '600',
    color: '#000',
  },
  switch: {
    width: horizontalScale(46),
    height: verticalScale(26),
    borderRadius: horizontalScale(16),
    backgroundColor: '#D1D5DB',
    justifyContent: 'center',
    padding: horizontalScale(2),
  },
  switchOn: {
    backgroundColor: '#0753F7',
  },
  switchThumb: {
    width: horizontalScale(20),
    height: verticalScale(20),
    borderRadius: horizontalScale(20),
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  switchThumbOn: {
    transform: [{translateX: horizontalScale(20)}],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  recurringOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: verticalScale(-15),
  },
  recurringOption: {
    width: '48%',
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(12),
    marginBottom: verticalScale(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  selectedRecurringOption: {
    backgroundColor: '#EBF5FF',
    borderColor: '#0753F7',
  },
  recurringOptionText: {
    fontSize: scaleFontsSize(14),
    textAlign: 'center',
    color: '#4B5563',
  },
  selectedRecurringOptionText: {
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  donateButton: {
    marginBottom: verticalScale(30),
    backgroundColor: '#0753F7',
    borderRadius: horizontalScale(12),
    paddingVertical: verticalScale(16),
    alignItems: 'center',
    marginTop: verticalScale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  donateButtonText: {
    color: '#FFFFFF',
    fontSize: scaleFontsSize(18),
    fontWeight: 'bold',
  },
});

export default styles;
