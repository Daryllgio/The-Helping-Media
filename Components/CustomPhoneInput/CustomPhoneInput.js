import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Animated, TouchableWithoutFeedback} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';

const CustomPhoneInput = React.forwardRef(
  ({label, value, onChange, error}, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const phoneInputRef = useRef(null);
    const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

    const handleAnimation = toValue => {
      Animated.timing(animatedIsFocused, {
        toValue: toValue,
        duration: 200,
        useNativeDriver: false,
      }).start();
    };

    useEffect(() => {
      handleAnimation(isFocused || value ? 1 : 0);
    }, [isFocused, value]);

    const labelStyle = {
      position: 'absolute',
      left: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [140, 65],
      }),
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0],
      }),
      fontSize: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
      }),
      color: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#0753F7'],
      }),
      zIndex: 1,
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const handleContainerPress = () => {
      if (phoneInputRef.current && phoneInputRef.current.focus) {
        phoneInputRef.current.focus();
      }
      handleFocus();
    };

    return (
      <TouchableWithoutFeedback onPress={handleContainerPress}>
        <View style={styles.inputContainer}>
          <Animated.Text style={labelStyle} pointerEvents="none">
            {label}
          </Animated.Text>
          <PhoneInput
            ref={input => {
              phoneInputRef.current = input;
              if (ref) {
                if (typeof ref === 'function') {
                  ref(input);
                } else {
                  ref.current = input;
                }
              }
            }}
            value={value}
            onChangeText={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            withDarkTheme={false}
            withShadow={false}
            autoFocus={false}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneInputTextContainer}
            textInputStyle={styles.phoneInputTextInput}
            codeTextStyle={styles.phoneInputCodeText}
            flagButtonStyle={styles.phoneInputFlagButton}
            countryPickerButtonStyle={styles.phoneInputCountryPickerButton}
            placeholder=" "
            defaultCode="CM"
            layout="first"
            textInputProps={{
              onFocus: handleFocus,
              onBlur: handleBlur,
            }}
            countryPickerProps={{
              withAlphaFilter: true,
              withFlag: true,
              withCountryNameButton: true,
              withCallingCode: true,
              withEmoji: true,
              theme: {
                backgroundColor: 'white',
                flagSizeButton: 20,
                onBackgroundTextColor: '#000',
                countryNameTextColor: '#000',
                callingCodeTextColor: '#000',
              },
            }}
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

export default CustomPhoneInput;
