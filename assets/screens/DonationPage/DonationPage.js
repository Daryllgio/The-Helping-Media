// DonationPage.js
import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {
  horizontalScale,
  scaleFontsSize,
  verticalScale,
} from '../../Styles/Scaling';

import Buttons from '../../../Components/Buttons/Buttons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {useNavigation} from '@react-navigation/native';

const DonationPage = () => {
  const navigation = useNavigation();

  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [CardHolderName, setCardHolderName] = useState('');
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
  const getSwitchContainerStyle = isToggled => ({
    ...styles.switchContainer,
    marginBottom: isToggled ? verticalScale(5) : verticalScale(30),
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{padding: horizontalScale(20)}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            size={scaleFontsSize(30)}
            color={'#022150'}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Donate Now</Text>

        <TextInput
          style={styles.input}
          placeholder="Donation Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <View
          style={[styles.switchContainer, {marginBottom: verticalScale(10)}]}>
          <Text style={styles.txt}>Anonymous Donation</Text>
          <Switch value={isAnonymous} onValueChange={setIsAnonymous} />
        </View>

        {!isAnonymous && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </>
        )}

        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          value={CardHolderName}
          onChangeText={setCardHolderName}
        />

        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCvv}
        />

        <View style={getSwitchContainerStyle(isRecurring)}>
          <Text style={styles.txt}>Recurring Donation</Text>
          <Switch value={isRecurring} onValueChange={setIsRecurring} />
        </View>

        {isRecurring && (
          <View style={{marginBottom: verticalScale(20)}}>
            {recurringOptions.map(option => (
              <TouchableOpacity
                key={option}
                onPress={() => setRecurringOption(option)}
                style={styles.optionButton}>
                <Text
                  style={
                    recurringOption === option
                      ? styles.selectedOption
                      : styles.option
                  }>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={{marginBottom: verticalScale(60), alignItems: 'center'}}>
          <Buttons
            ButtonTxt={'Donate'}
            ButtonWidth={horizontalScale(200)}
            ButtonHeight={verticalScale(40)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonationPage;
