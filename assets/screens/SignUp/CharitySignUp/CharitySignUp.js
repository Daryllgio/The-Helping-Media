import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const CharitySignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    organizationName: '',
    country: '',
    state: '',
    address: '',
    companySize: '',
    aboutUs: '',
    yearFounded: '',
    phoneNumber: '',
    email: '',
    // Add more fields as needed
  });

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text style={styles.stepTitle}>Company Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Organization Name"
              value={formData.organizationName}
              onChangeText={value =>
                handleInputChange('organizationName', value)
              }
            />
            <Picker
              selectedValue={formData.country}
              style={styles.picker}
              onValueChange={value => handleInputChange('country', value)}>
              <Picker.Item label="Select Country" value="" />
              {/* Add country options here */}
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="State/Province"
              value={formData.state}
              onChangeText={value => handleInputChange('state', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={formData.address}
              onChangeText={value => handleInputChange('address', value)}
            />
            <Picker
              selectedValue={formData.companySize}
              style={styles.picker}
              onValueChange={value => handleInputChange('companySize', value)}>
              <Picker.Item label="Select Company Size" value="" />
              <Picker.Item label="1-10" value="1-10" />
              <Picker.Item label="11-50" value="11-50" />
              <Picker.Item label="51-200" value="51-200" />
              <Picker.Item label="201+" value="201+" />
            </Picker>
          </>
        );
      case 2:
        return (
          <>
            <Text style={styles.stepTitle}>About Your Company</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="About Us"
              multiline
              numberOfLines={6}
              value={formData.aboutUs}
              onChangeText={value => handleInputChange('aboutUs', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Year Founded (Optional)"
              value={formData.yearFounded}
              onChangeText={value => handleInputChange('yearFounded', value)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number (Optional)"
              value={formData.phoneNumber}
              onChangeText={value => handleInputChange('phoneNumber', value)}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={formData.email}
              onChangeText={value => handleInputChange('email', value)}
              keyboardType="email-address"
            />
          </>
        );
      case 3:
        return (
          <>
            <Text style={styles.stepTitle}>Profile Details</Text>
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Upload Logo</Text>
            </TouchableOpacity>
            <Text style={styles.uploadInfo}>
              Recommended size: 300 x 300 pixels
            </Text>
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Upload Cover Image</Text>
            </TouchableOpacity>
            <Text style={styles.uploadInfo}>
              Recommended size: 1128 x 191 pixels
            </Text>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => (step > 1 ? setStep(step - 1) : null)}>
            <FontAwesomeIcon icon={faChevronLeft} size={24} color="#4a90e2" />
          </TouchableOpacity>
          <Text style={styles.title}>Charity Sign Up</Text>
          <View style={styles.placeholder} />
        </View>
        <View style={styles.progressContainer}>
          {[1, 2, 3].map(s => (
            <View
              key={s}
              style={[styles.progressDot, s <= step ? styles.activeDot : null]}
            />
          ))}
        </View>
        {renderStep()}
        <View style={styles.buttonContainer}>
          {step < 3 ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setStep(step + 1)}>
              <Text style={styles.buttonText}>Next</Text>
              <FontAwesomeIcon icon={faChevronRight} size={18} color="#fff" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('Submit', formData)}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 24,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4a90e2',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  picker: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 15,
  },
  uploadButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadInfo: {
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4a90e2',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default CharitySignUp;
