import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import style from '../assets/screens/Explore/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontsSize} from '../assets/Styles/Scaling';

const Search = ({navigation}) => {
  const [Search, setSearch] = useState('');
  return (
    <SafeAreaView>
      <View style={style.inputContainer}>
        <TouchableOpacity style={style.SearchIcon}>
          <FontAwesomeIcon
            icon={faSearch}
            color={'#022150'}
            size={scaleFontsSize(16)}
          />
        </TouchableOpacity>
        <TextInput
          style={style.input}
          placeholder="Search"
          value={Search}
          onChangeText={setSearch}
          placeholderTextColor="#022150"
          autoFocus={true}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={style.CancelTxt}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;
