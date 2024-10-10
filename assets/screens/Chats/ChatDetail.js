import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faPaperclip,
  faPaperPlane,
  faEllipsisV,
  faTrash,
  faBellSlash,
  faExclamationCircle,
  faUserFriends,
  faCamera,
  faImage,
  faFile,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';
import {faFlag, faKeyboard} from '@fortawesome/free-regular-svg-icons';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import {scaleFontsSize} from '../../Styles/Scaling';

const truncateName = (name, maxLength = scaleFontsSize(30)) => {
  return name.length > maxLength
    ? name.substring(0, maxLength - 3) + '...'
    : name;
};

const ChatDetail = ({route}) => {
  const navigation = useNavigation();
  const {Name, profileImage} = route.params;
  const [messageInput, setMessageInput] = useState('');
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState([
    {id: '1', message: 'Hey', sender: 'other'},
    {id: '2', message: 'How are you?', sender: 'user'},
    {id: '3', message: "I'm good, thanks!", sender: 'other'},
  ]);

  const modalY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          modalY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          closeModal();
        } else {
          Animated.spring(modalY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const sendMessage = () => {
    if (messageInput.trim()) {
      setMessages(prevMessages => [
        ...prevMessages,
        {id: Date.now().toString(), message: messageInput, sender: 'user'},
      ]);
      setMessageInput('');
    }
  };

  const renderMessage = ({item}) => (
    <View
      style={[
        style.messageBubble,
        item.sender === 'user' ? style.userMessage : style.otherMessage,
      ]}>
      <Text
        style={[
          style.messageText,
          item.sender === 'user'
            ? style.userMessageText
            : style.otherMessageText,
        ]}>
        {item.message}
      </Text>
    </View>
  );

  const handleInputChange = text => {
    setMessageInput(text);
  };

  const renderAttachmentOptions = () => (
    <View style={style.attachmentOptionsContainer}>
      <View style={style.attachmentContainer}>
        <TouchableOpacity style={style.attachmentOption}>
          <FontAwesomeIcon icon={faCamera} size={25} color="#555555" />
        </TouchableOpacity>
        <Text style={style.attachmentOptionText}>Camera</Text>
      </View>
      <View style={style.attachmentContainer}>
        <TouchableOpacity style={style.attachmentOption}>
          <FontAwesomeIcon icon={faImage} size={25} color="#0753F7" />
        </TouchableOpacity>
        <Text style={style.attachmentOptionText}>Gallery</Text>
      </View>

      <View style={style.attachmentContainer}>
        <TouchableOpacity style={style.attachmentOption}>
          <FontAwesomeIcon icon={faFile} size={25} color="#B7E36A" />
        </TouchableOpacity>
        <Text style={style.attachmentOptionText}>Document</Text>
      </View>
    </View>
  );

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(modalY, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalY, {
      toValue: 300,
      duration: 50,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const toggleAttachmentOptions = () => {
    setShowAttachmentOptions(prevState => !prevState);
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={style.headerContainer}>
          <View style={style.IconAndNameContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faChevronLeft} size={22} color="#0753F7" />
            </TouchableOpacity>
            <Text style={style.headerText}>{truncateName(Name)}</Text>
          </View>

          <TouchableOpacity style={style.moreOptionsButton} onPress={openModal}>
            <FontAwesomeIcon icon={faEllipsisV} size={22} color="#0753F7" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={style.messageList}
        />

        <View style={style.inputContainer}>
          <TouchableOpacity
            style={style.attachmentButton}
            onPress={toggleAttachmentOptions}>
            <FontAwesomeIcon
              icon={showAttachmentOptions ? faKeyboard : faPaperclip}
              size={22}
              color="#0753F7"
            />
          </TouchableOpacity>

          <TextInput
            style={style.textInput}
            value={messageInput}
            onChangeText={handleInputChange}
            placeholder="Type a message..."
            placeholderTextColor={'#353535'}
            multiline
          />

          <TouchableOpacity
            style={style.sendButton}
            onPress={messageInput.trim() ? sendMessage : null}>
            <FontAwesomeIcon
              icon={messageInput.trim() ? faPaperPlane : faMicrophone}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        {showAttachmentOptions && renderAttachmentOptions()}

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="none"
          onRequestClose={closeModal}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={style.modalOverlay}>
              <Animated.View
                style={[
                  style.modalContent,
                  {
                    transform: [{translateY: modalY}],
                  },
                ]}
                {...panResponder.panHandlers}>
                <View style={style.modalDragIndicator} />
                <TouchableOpacity style={style.modalOption}>
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    size={22}
                    color="#000"
                  />
                  <Text style={style.modalOptionText}>Create Group Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.modalOption}>
                  <FontAwesomeIcon icon={faBellSlash} size={22} color="#000" />
                  <Text style={style.modalOptionText}>Mute User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.modalOption}>
                  <FontAwesomeIcon icon={faTrash} size={22} color="#000" />
                  <Text style={style.modalOptionText}>Clear Conversation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.modalOption}>
                  <FontAwesomeIcon icon={faTrash} size={22} color="#000" />
                  <Text style={style.modalOptionText}>Delete Conversation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.modalOption}>
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    size={24}
                    color="#FF0000"
                  />
                  <Text style={[style.modalOptionText, {color: '#FF0000'}]}>
                    Block User
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.modalOption}>
                  <FontAwesomeIcon icon={faFlag} size={22} color="#FF0000" />
                  <Text style={[style.modalOptionText, {color: '#FF0000'}]}>
                    Report User
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatDetail;
