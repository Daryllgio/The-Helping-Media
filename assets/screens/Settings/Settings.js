import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
  Text,
  TextInput,
} from 'react-native';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faUser,
  faLock,
  faShieldAlt,
  faPowerOff,
  faBell,
  faPalette,
  faChartBar,
  faHandHoldingHeart,
  faExclamationCircle,
  faLightbulb,
  faQuestionCircle,
  faFileAlt,
  faUserPlus,
  faShieldHalved,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Settings = ({navigation}) => {
  const [search, setSearch] = useState('');

  const renderSettingItem = (
    icon,
    text,
    onPress,
    isLast = false,
    isLogout = false,
  ) => (
    <Pressable
      underlayColor="#F0F3F8"
      onPress={onPress}
      style={[style.settingItem, isLast && {borderBottomWidth: 0}]}>
      <View style={style.settingItemContent}>
        <View style={style.settingItemLeft}>
          <FontAwesomeIcon
            icon={icon}
            size={20}
            color={isLogout ? '#FF3B30' : '#022150'}
            style={[style.settingItemIcon]}
          />
          <Text style={[style.settingText, isLogout && style.logoutText]}>
            {text}
          </Text>
        </View>
        <FontAwesomeIcon icon={faChevronRight} size={16} color="#8F9BB3" />
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Pressable underlayColor="#F0F3F8" onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#022150" />
        </Pressable>
        <View style={style.headerTextContainer}>
          <Text style={style.headerText}>Settings</Text>
        </View>
      </View>

      <ScrollView>
        <View style={style.searchContainer}>
          <TextInput
            style={style.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            placeholderTextColor="#8F9BB3"
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={style.searchIcon}
            size={18}
            color="#8F9BB3"
          />
        </View>
        <View style={style.sectionContainer}>
          <Text style={style.sectionHeader}>Account Management</Text>
          {renderSettingItem(faUser, 'Personal Information', () => {})}
          {renderSettingItem(faLock, 'Password', () => {})}
          {renderSettingItem(faShieldAlt, 'Account Privacy', () => {})}
          {renderSettingItem(faPowerOff, 'Deactivate Your Account', () => {})}
        </View>

        <View style={style.sectionContainer}>
          <Text style={style.sectionHeader}>General</Text>
          {renderSettingItem(faBell, 'Notifications', () => {})}
          {renderSettingItem(faPalette, 'Theme', () => {})}
          {renderSettingItem(faChartBar, 'Your Activity', () => {})}
          {renderSettingItem(faHandHoldingHeart, 'Donations', () => {})}
        </View>

        <View style={style.sectionContainer}>
          <Text style={style.sectionHeader}>Feedback</Text>
          {renderSettingItem(faExclamationCircle, 'Report an Issue', () => {})}
          {renderSettingItem(faLightbulb, 'Give a Suggestion', () => {}, true)}
        </View>

        <View style={style.sectionContainer}>
          <Text style={style.sectionHeader}>Support</Text>
          {renderSettingItem(faQuestionCircle, 'Help Center', () => {})}
          {renderSettingItem(faFileAlt, 'Terms of Service', () => {})}
          {renderSettingItem(faShieldAlt, 'Privacy Policy', () => {}, true)}
        </View>

        <View style={[style.sectionContainer, {marginBottom: 40}]}>
          <Text style={style.sectionHeader}>Login</Text>
          {renderSettingItem(faUserPlus, 'Add Account', () => {})}
          {renderSettingItem(faShieldHalved, 'Security', () => {})}
          {renderSettingItem(faSignOutAlt, 'Log Out', () => {}, true, true)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
