import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleXmark,
  faDollarSign,
  faUser,
  faEnvelope,
  faCreditCard,
  faCalendarAlt,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {scaleFontsSize} from '../../Styles/Scaling';
import {useRoute} from '@react-navigation/native';
import styles from './styles';

const DonationPage = () => {
  const navigation = useNavigation();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [recurringOption, setRecurringOption] = useState('');

  const recurringOptions = [
    'Weekly',
    'Bi-weekly',
    'Monthly',
    '3 Months',
    '6 Months',
    'Yearly',
  ];
  const route = useRoute();
  const {donationType, Char_Event_name} = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={'false'}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            size={scaleFontsSize(20)}
            color="#000"
          />
        </TouchableOpacity>
        {Char_Event_name && (
          <Text style={styles.recipientText}>
            Donating to:{'\n'}
            {donationType === 'Event' ? 'Event' : 'Charity'} - {Char_Event_name}
          </Text>
        )}

        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faDollarSign}
            size={scaleFontsSize(20)}
            color="#6B7280"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Donation Amount"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Anonymous Donation</Text>
          <Pressable
            onPress={() => setIsAnonymous(!isAnonymous)}
            style={[styles.switch, isAnonymous && styles.switchOn]}>
            <View
              style={[styles.switchThumb, isAnonymous && styles.switchThumbOn]}
            />
          </Pressable>
        </View>

        {!isAnonymous && (
          <>
            <View style={styles.inputContainer}>
              <FontAwesomeIcon
                icon={faUser}
                size={scaleFontsSize(20)}
                color="#6B7280"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#9CA3AF"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputContainer}>
              <FontAwesomeIcon
                icon={faEnvelope}
                size={scaleFontsSize(20)}
                color="#6B7280"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </>
        )}

        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faUser}
            size={scaleFontsSize(20)}
            color="#6B7280"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Card Holder Name"
            placeholderTextColor="#9CA3AF"
            value={cardHolderName}
            onChangeText={setCardHolderName}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faCreditCard}
            size={scaleFontsSize(20)}
            color="#6B7280"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              size={scaleFontsSize(20)}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              placeholderTextColor="#9CA3AF"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
          </View>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <FontAwesomeIcon
              icon={faLock}
              size={scaleFontsSize(20)}
              color="#6B7280"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="CVV"
              placeholderTextColor="#9CA3AF"
              keyboardType="numeric"
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Recurring Donation</Text>
          <Pressable
            onPress={() => setIsRecurring(!isRecurring)}
            style={[styles.switch, isRecurring && styles.switchOn]}>
            <View
              style={[styles.switchThumb, isRecurring && styles.switchThumbOn]}
            />
          </Pressable>
        </View>

        {isRecurring && (
          <View style={styles.recurringOptionsContainer}>
            {recurringOptions.map(option => (
              <TouchableOpacity
                key={option}
                onPress={() => setRecurringOption(option)}
                style={[
                  styles.recurringOption,
                  recurringOption === option && styles.selectedRecurringOption,
                ]}>
                <Text
                  style={[
                    styles.recurringOptionText,
                    recurringOption === option &&
                      styles.selectedRecurringOptionText,
                  ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.donateButton}>
          <Text style={styles.donateButtonText}>Donate</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonationPage;
