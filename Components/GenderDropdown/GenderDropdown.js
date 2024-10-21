import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

const GenderDropdown = ({value, onChange, error}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownTop, setDropdownTop] = useState(0);

  // Define the items array for the gender options
  const items = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
    {label: 'Prefer not to say', value: 'prefer_not_to_say'},
  ];

  // Animate the placeholder (similar to the other fields)
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: open || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [open, value]);

  const labelStyle = {
    position: 'absolute',
    left: 16,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0], // Adjust top to move the label
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Shrink the text when focused
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#0753F7'], // Turn blue when selected
    }),
    zIndex: 1,
  };

  const handleSelect = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
  };

  const toggleDropdown = () => {
    if (!open) {
      dropdownRef.current.measure((fx, fy, width, height, px, py) => {
        setDropdownTop(py + height + 5); // Slight offset for the modal
      });
    }
    setOpen(!open);
  };

  return (
    <View style={styles.inputContainer}>
      <TouchableWithoutFeedback onPress={toggleDropdown}>
        <View ref={dropdownRef} style={styles.inputWrapper}>
          <Animated.Text style={labelStyle}>Gender</Animated.Text>
          <Text style={[styles.input, value && styles.activeInput]}>
            {value ? items.find(item => item.value === value)?.label : ''}
          </Text>
          <FontAwesomeIcon
            icon={open ? faChevronUp : faChevronDown}
            size={16}
            color="#000"
            style={styles.dropdownIcon}
          />
        </View>
      </TouchableWithoutFeedback>
      {error && <Text style={styles.errorText}>{error}</Text>}

      <Modal
        transparent={true}
        visible={open}
        animationType="fade"
        onRequestClose={() => setOpen(false)}>
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
          <View style={{flex: 1}}>
            <View
              style={[
                styles.modalContent,
                {
                  top: dropdownTop,
                  left: 16,
                  right: 16,
                },
              ]}>
              <FlatList
                data={items}
                keyExtractor={item => item.value}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleSelect(item.value)}>
                    <Text
                      style={[
                        styles.dropdownText,
                        item.value === value && styles.activeDropdownText,
                      ]}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
export default GenderDropdown;
