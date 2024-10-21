import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronDown,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import {useForm, Controller} from 'react-hook-form';
import styles from './styles';
import GenderDropdown from '../../../../Components/GenderDropdown/GenderDropdown';
import CustomPhoneInput from '../../../../Components/CustomPhoneInput/CustomPhoneInput';

const FloatingLabelInput = React.forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      secureTextEntry = false,
      keyboardType = 'default',
      autoCapitalize = 'sentences',
      onBlur,
      error,
      showPasswordToggle = false,
      onTogglePasswordVisibility,
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

    useEffect(() => {
      Animated.timing(animatedIsFocused, {
        toValue: isFocused || value !== '' ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [isFocused, value]);

    const labelStyle = {
      position: 'absolute',
      left: 16,
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
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

    const handleFocus = () => {
      setIsFocused(true);
      inputRef.current.focus();
    };

    const handleBlur = () => {
      setIsFocused(false);
      inputRef.current.blur();
      onBlur && onBlur();
    };

    return (
      <TouchableWithoutFeedback onPress={handleFocus}>
        <View style={styles.inputContainer}>
          <Animated.Text style={labelStyle}>{label}</Animated.Text>
          <View style={styles.inputWrapper}>
            <TextInput
              ref={input => {
                inputRef.current = input;
                if (ref) {
                  if (typeof ref === 'function') {
                    ref(input);
                  } else {
                    ref.current = input;
                  }
                }
              }}
              style={styles.input}
              value={value}
              onChangeText={onChangeText}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              blurOnSubmit={true}
            />
            {showPasswordToggle && (
              <TouchableOpacity
                onPress={onTogglePasswordVisibility}
                style={styles.eyeIcon}>
                <FontAwesomeIcon
                  icon={secureTextEntry ? faEye : faEyeSlash}
                  size={20}
                  color="#0753F7"
                />
              </TouchableOpacity>
            )}
          </View>
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

const DonorSignUp = ({navigation}) => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const password = watch('password');

  const capitalizeFirstLetter = string => {
    return string.replace(/\b\w/g, l => l.toUpperCase());
  };

  const handleNameChange = (text, onChange) => {
    const capitalizedText = capitalizeFirstLetter(text);
    onChange(capitalizedText);
  };

  const validateDateOfBirth = dob => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!regex.test(dob)) {
      return 'Invalid date format (DD/MM/YYYY)';
    }

    const [day, month, year] = dob.split('/').map(Number);

    if (month < 1 || month > 12) {
      return 'Invalid month. Please enter a valid month between 01 and 12.';
    }

    if (day < 1 || day > 31) {
      return 'Invalid day. Please enter a valid day between 01 and 31.';
    }

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    const daysInMonth = {
      1: 31,
      2: isLeapYear ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };

    if (day > daysInMonth[month]) {
      return 'Invalid day for this month. Please enter a valid day.';
    }

    return true;
  };

  const validatePassword = value => {
    if (value.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(value)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(value)) {
      return 'Password must contain at least one number';
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return 'Password must contain at least one special character';
    }
    return true;
  };

  const handleDateOfBirthChange = (text, onChange, previousValue) => {
    let cleaned = text.replace(/\D/g, '');
    if (text.length < previousValue.length) {
      if (text.length === 2 || text.length === 5) {
        cleaned = cleaned.slice(0, -1);
      }
    }
    if (cleaned.length >= 2) {
      cleaned = cleaned.slice(0, 2) + '/' + cleaned.slice(2);
    }
    if (cleaned.length >= 5) {
      cleaned = cleaned.slice(0, 5) + '/' + cleaned.slice(5);
    }
    cleaned = cleaned.slice(0, 10);
    onChange(cleaned);
  };

  const isStepValid = async () => {
    let isValid = false;
    switch (step) {
      case 1:
        isValid = await trigger([
          'firstName',
          'lastName',
          'gender',
          'dateOfBirth',
        ]);
        break;
      case 2:
        isValid = await trigger([
          'email',
          'phoneNumber',
          'password',
          'confirmPassword',
        ]);
        break;
      default:
        isValid = true;
    }
    return isValid;
  };

  const onSubmit = async data => {
    if (step < 3) {
      const valid = await isStepValid();
      if (valid) {
        setStep(prevStep => prevStep + 1);
      }
    } else {
      navigation.navigate('CategorySelection', {formData: data});
    }
  };

  const goToPreviousStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View key={step}>
            <Text style={styles.header}>Create Your Account</Text>
            <Text style={styles.subheader}>
              Let's start with some basic information
            </Text>
            <Controller
              control={control}
              rules={{required: 'First name is required'}}
              render={({field: {onChange, onBlur, value}}) => (
                <FloatingLabelInput
                  label="First Name"
                  onChangeText={text => handleNameChange(text, onChange)}
                  onBlur={onBlur}
                  value={value}
                  error={errors.firstName?.message}
                />
              )}
              name="firstName"
            />
            <Controller
              control={control}
              rules={{required: 'Last name is required'}}
              render={({field: {onChange, onBlur, value}}) => (
                <FloatingLabelInput
                  label="Last Name"
                  onChangeText={text => handleNameChange(text, onChange)}
                  onBlur={onBlur}
                  value={value}
                  error={errors.lastName?.message}
                />
              )}
              name="lastName"
            />
            <Controller
              control={control}
              rules={{required: 'Gender is required'}}
              render={({field: {onChange, value}}) => (
                <GenderDropdown
                  value={value}
                  onChange={onChange}
                  error={errors.gender?.message}
                />
              )}
              name="gender"
            />
            <Controller
              control={control}
              rules={{
                required: 'Date of birth is required',
                validate: validateDateOfBirth,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <FloatingLabelInput
                  label="Date of Birth (DD/MM/YYYY)"
                  onChangeText={text =>
                    handleDateOfBirthChange(text, onChange, value)
                  }
                  onBlur={onBlur}
                  value={value}
                  error={errors.dateOfBirth?.message}
                  keyboardType="numeric"
                />
              )}
              name="dateOfBirth"
            />
          </View>
        );
      case 2:
        return (
          <View key={step}>
            <Text style={styles.header}>Almost there!</Text>
            <Text style={styles.subheader}>
              Now, let's get your contact details
            </Text>
            <Controller
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email format',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <FloatingLabelInput
                  label="Email"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.email?.message}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              )}
              name="email"
            />
            <Controller
              control={control}
              rules={{
                required: 'Phone number is required',
                validate: value => {
                  // Add phone number validation logic here
                  return true; // Replace with actual validation
                },
              }}
              render={({field: {onChange, value}}) => (
                <CustomPhoneInput
                  label="Phone Number"
                  value={value}
                  onChange={onChange}
                  error={errors.phoneNumber?.message}
                />
              )}
              name="phoneNumber"
            />
            <Controller
              control={control}
              rules={{
                required: 'Password is required',
                validate: validatePassword,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <FloatingLabelInput
                  label="Password"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.password?.message}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  showPasswordToggle={true}
                  onTogglePasswordVisibility={() =>
                    setShowPassword(!showPassword)
                  }
                />
              )}
              name="password"
            />
            <Controller
              control={control}
              rules={{
                required: 'Please confirm your password',
                validate: value =>
                  value === password || 'Passwords do not match',
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <FloatingLabelInput
                  label="Confirm Password"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.confirmPassword?.message}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  showPasswordToggle={true}
                  onTogglePasswordVisibility={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                />
              )}
              name="confirmPassword"
            />
          </View>
        );
      case 3:
        return (
          <View key={step}>
            <Text style={styles.header}>Verify Your Email</Text>
            <Text style={styles.subheader}>
              We've sent a confirmation email to {watch('email')}
            </Text>
            <Text style={styles.confirmationText}>
              Please check your inbox and click the link to verify your account.
            </Text>
            <TouchableOpacity style={styles.resendButton}>
              <Text style={styles.resendButtonText}>
                Resend Confirmation Email
              </Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <View style={styles.progressContainer}>
          {[1, 2, 3].map(i => (
            <View
              key={i}
              style={[styles.progressDot, i <= step ? styles.activeDot : null]}
            />
          ))}
        </View>
        {renderStep()}
        <View style={styles.buttonContainer}>
          {step > 1 && (
            <TouchableOpacity
              onPress={goToPreviousStep}
              style={styles.backButton}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>
              {step === 3 ? 'Choose Categories' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DonorSignUp;
