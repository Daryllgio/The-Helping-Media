// CommentSection.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontsSize} from '../../assets/Styles/Scaling';

const CommentSection = ({comments, onAddComment}) => {
  const [newComment, setNewComment] = useState('');

  const renderComment = ({item}) => (
    <View style={styles.commentItem}>
      <Text style={styles.commentUser}>{item.user}</Text>
      <Text style={styles.commentText}>{item.text}</Text>
    </View>
  );

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment.trim());
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={(item, index) => index.toString()}
        style={styles.commentList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={handleAddComment} style={styles.sendButton}>
          <FontAwesomeIcon icon={faPaperPlane} size={20} color="#007bff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: scaleFontsSize(18),
    fontFamily: getFontFamily('inter', '600'),
    marginBottom: 16,
    color: '#022150',
  },
  commentList: {
    flex: 1,
  },
  commentItem: {
    marginBottom: 12,
  },
  commentUser: {
    fontSize: scaleFontsSize(14),
    fontFamily: getFontFamily('inter', '600'),
    color: '#022150',
  },
  commentText: {
    fontSize: scaleFontsSize(14),
    fontFamily: getFontFamily('inter', '400'),
    color: '#022150',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 12,
    fontFamily: getFontFamily('inter', '400'),
    fontSize: scaleFontsSize(14),
  },
  sendButton: {
    marginLeft: 12,
  },
});

export default CommentSection;
