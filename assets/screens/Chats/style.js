import {StyleSheet} from 'react-native';
import {
  scaleFontsSize,
  horizontalScale,
  verticalScale,
} from '../../Styles/Scaling';
import {getFontFamily} from '../../fonts/helper';

const style = StyleSheet.create({
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(15),
    alignItems: 'center',
    marginBottom: verticalScale(5),
  },
  ChatLabel: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontsSize(25),
    color: '#000',
  },
  icon: {
    width: horizontalScale(35),
    height: horizontalScale(35),
    borderRadius: horizontalScale(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabsContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(12),
  },
  Tab: {
    marginRight: horizontalScale(5),
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  IconAndNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: scaleFontsSize(20),
    fontWeight: 'bold',
    marginLeft: horizontalScale(8),
  },
  messageList: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: horizontalScale(10),
    marginVertical: verticalScale(5),
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0753F7',
    borderBottomRightRadius: 4,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
  },
  userMessageText: {
    color: '#fff',
  },
  otherMessageText: {
    color: '#000',
  },
  messageText: {
    fontSize: scaleFontsSize(16),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(10),
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  attachmentButton: {
    marginRight: horizontalScale(10),
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(8),
    fontSize: scaleFontsSize(16),
    maxHeight: verticalScale(100),
  },
  sendButton: {
    marginLeft: horizontalScale(10),
    backgroundColor: '#0753F7',
    width: horizontalScale(35),
    height: verticalScale(35),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  moreOptionsButton: {
    padding: verticalScale(5),
  },

  attachmentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: horizontalScale(10),
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  attachmentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  attachmentOption: {
    padding: horizontalScale(15),
    backgroundColor: '#f0f0f0',
    borderRadius: horizontalScale(30),
  },
  attachmentOptionText: {
    marginTop: verticalScale(7),
    marginLeft: horizontalScale(5),
    fontSize: scaleFontsSize(14),
    fontFamily: getFontFamily('Inter', '500'),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: horizontalScale(20),
    paddingBottom: verticalScale(40),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalDragIndicator: {
    width: horizontalScale(40),
    height: verticalScale(5),
    backgroundColor: '#6B6B6B',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: verticalScale(5),
    marginVertical: verticalScale(-10),
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(15),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalOptionText: {
    marginLeft: horizontalScale(15),
    fontSize: scaleFontsSize(16),
  },
  closeModalButton: {
    marginTop: verticalScale(20),
    alignItems: 'center',
    padding: horizontalScale(10),
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  closeModalButtonText: {
    fontSize: scaleFontsSize(16),
    fontWeight: 'bold',
  },
  SearchBarContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(4),
  },
  SearchBarIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: horizontalScale(330),
    height: verticalScale(32),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(7),
    backgroundColor: '#F0F0F0',
  },
  SearchAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsSize(18.5),
    marginLeft: horizontalScale(5),
    color: '#6E6E6E',
  },
});

export default style;
