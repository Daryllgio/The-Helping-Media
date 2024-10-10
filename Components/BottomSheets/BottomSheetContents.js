// BottomSheetContents.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faUser,
  faCog,
  faInfoCircle,
  faUserMinus,
} from '@fortawesome/free-solid-svg-icons';
import {faEyeSlash, faFlag} from '@fortawesome/free-regular-svg-icons';
import style from './style';

export const PostSettings = () => (
  <View>
    <TouchableOpacity style={style.option}>
      <Text style={style.optionText}>UnFollow</Text>
      <FontAwesomeIcon icon={faUserMinus} size={24} color="#022150" />
    </TouchableOpacity>
    <TouchableOpacity style={style.option}>
      <Text style={style.optionText}>Not interested in this post</Text>
      <FontAwesomeIcon icon={faEyeSlash} size={24} color="#022150" />
    </TouchableOpacity>
    <TouchableOpacity style={style.option}>
      <Text style={[style.optionText, {color: 'red'}]}>Report</Text>
      <FontAwesomeIcon icon={faFlag} size={24} color="red" />
    </TouchableOpacity>
  </View>
);

export const Comments = ({onPress}) => (
  <View>
    <TouchableOpacity
      style={style.option}
      onPress={() => onPress('EditProfile')}>
      <FontAwesomeIcon icon={faUser} size={24} color="#007bff" />
      <Text style={style.optionText}>Edit Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.option} onPress={() => onPress('Settings')}>
      <FontAwesomeIcon icon={faCog} size={24} color="#007bff" />
      <Text style={style.optionText}>Settings</Text>
    </TouchableOpacity>
  </View>
);

export const CreateButtomSheet = ({onPress}) => (
  <View>
    <Text style={style.optionHearder}>Create</Text>
    <TouchableOpacity style={style.option} onPress={() => onPress('About')}>
      <FontAwesomeIcon icon={faInfoCircle} size={24} color="#007bff" />
      <Text style={style.optionText}>Post</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.option} onPress={() => onPress('Help')}>
      <FontAwesomeIcon icon={faHeart} size={24} color="#007bff" />
      <Text style={style.optionText}>Event</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.option} onPress={() => onPress('About')}>
      <FontAwesomeIcon icon={faInfoCircle} size={24} color="#007bff" />
      <Text style={style.optionText}>News</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.option} onPress={() => onPress('About')}>
      <FontAwesomeIcon icon={faInfoCircle} size={24} color="#007bff" />
      <Text style={style.optionText}>Fundraiser</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.option} onPress={() => onPress('About')}>
      <FontAwesomeIcon icon={faInfoCircle} size={24} color="#007bff" />
      <Text style={style.optionText}>Story</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.option} onPress={() => onPress('About')}>
      <FontAwesomeIcon icon={faInfoCircle} size={24} color="#007bff" />
      <Text style={style.optionText}>Live</Text>
    </TouchableOpacity>
  </View>
);
