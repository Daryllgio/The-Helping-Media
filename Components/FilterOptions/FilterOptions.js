// FilterOptions.js
import React from 'react';
import {View, Text, Pressable, Modal} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {scaleFontsSize} from '../../assets/Styles/Scaling';
import style from './style';
import {
  faBellSlash,
  faEyeSlash,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';

const FilterOptions = ({visible, onClose, filterIconPosition}) => (
  <Modal
    visible={visible}
    transparent={true}
    animationType="fade"
    onRequestClose={onClose}>
    <Pressable style={style.modalOverlay} onPress={onClose}>
      <View
        style={[
          style.filterContainer,
          {top: filterIconPosition.y - 23, left: filterIconPosition.x - 26},
        ]}>
        <View style={style.triangle} />
        <View style={style.filterTitleContainer}>
          <Text style={style.filterTitle}>Filter</Text>
        </View>

        <Pressable style={style.filterOption}>
          <FontAwesomeIcon
            icon={faEyeSlash}
            size={scaleFontsSize(22)}
            color="#000"
          />
          <Text style={style.filterOptionText}>Unread</Text>
        </Pressable>
        <Pressable style={style.filterOption}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            size={scaleFontsSize(21)}
            color="#000"
          />
          <Text style={style.filterOptionText}>Reply</Text>
        </Pressable>
        <Pressable style={style.filterOption}>
          <FontAwesomeIcon
            icon={faBellSlash}
            size={scaleFontsSize(24)}
            color="#000"
          />
          <Text style={style.filterOptionText}>Muted</Text>
        </Pressable>
      </View>
    </Pressable>
  </Modal>
);

export default FilterOptions;
