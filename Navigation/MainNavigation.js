import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Routes} from './Routes';
import Home from '../assets/screens/Home/Home';
import React from 'react';
import Profile from '../assets/screens/Profile/Profile';
import Spotlight from '../assets/screens/Spotlight/Spotlight';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faPlus,
  faHandHoldingHeart,
} from '@fortawesome/free-solid-svg-icons';
import {scaleFontsSize, verticalScale} from '../assets/Styles/Scaling';
import DonationPage from '../assets/screens/DonationPage/DonationPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {faMessage, faUser} from '@fortawesome/free-regular-svg-icons';
import Chats from '../assets/screens/Chats/Chats';
import Create from '../assets/screens/Create/Create';
import {createStackNavigator} from '@react-navigation/stack';
import Explore from '../assets/screens/Explore/Explore';
import Settings from '../assets/screens/Settings/Settings';
import SelectionScreen from '../assets/screens/SelectionScreen/SelectionScreen';
import Search from '../Components/Search';
import {View} from 'react-native';
import Post from '../assets/screens/Explore/Post';
import News from '../assets/screens/Explore/News';
import Event from '../assets/screens/Explore/Event';
import ProfileAboutSection from '../assets/screens/Profile/ProfileAboutSection';
import ProfileEventsSection from '../assets/screens/Profile/ProfileEventsSection';
import ProfileNewsSection from '../assets/screens/Profile/ProfileNewsSection';
import ProfilePostSection from '../assets/screens/Profile/ProfilePostSection';
import ProfileTeamSection from '../assets/screens/Profile/ProfileTeamSection';
import Notification from '../assets/screens/Notifications/Notification';
import {getFontFamily} from '../assets/fonts/helper';
import ProfileTestimoniesSection from '../assets/screens/Profile/ProfileTestimoniesSection';
import ChatDetail from '../assets/screens/Chats/ChatDetail';
import EventDescription from '../assets/screens/EventDescription/EventDescription';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const ProfileTaps = createMaterialTopTabNavigator();
const ExploreTabs = createMaterialTopTabNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export const ProfiletackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export const ExplorePageTabsNavigator = () => {
  return (
    <ExploreTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: getFontFamily('Inter', '600'),
          fontSize: scaleFontsSize(14.5),
        },

        tabBarIndicatorStyle: {
          backgroundColor: '#022150', // Indicator color for the focused tab
        },
      }}>
      <ExploreTabs.Screen name="Posts" component={Post} />
      <ExploreTabs.Screen name="Events" component={Event} />
      <ExploreTabs.Screen name="News" component={News} />
    </ExploreTabs.Navigator>
  );
};

export const ProfileTabsNavigations = () => {
  return (
    <ProfileTaps.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: getFontFamily('Inter', '600'),
          fontSize: scaleFontsSize(14),
          paddingHorizontal: 20, // Add padding to create space between tabs
        },
        tabBarStyle: {
          paddingBottom: verticalScale(3),
        },
        tabBarScrollEnabled: true, // Enable scrollable tabs
        tabBarItemStyle: {
          width: 'auto', // Ensure tabs have dynamic width based on content
        },
        swipeEnabled: false, // Disable swipe gestures
        lazy: true, // Load screens lazily
      }}>
      <ProfileTaps.Screen name={'About'} component={ProfileAboutSection} />
      <ProfileTaps.Screen name={'Team'} component={ProfileTeamSection} />
      <ProfileTaps.Screen name={'Posts'} component={ProfilePostSection} />
      <ProfileTaps.Screen name={'Events'} component={ProfileEventsSection} />
      <ProfileTaps.Screen name={'News'} component={ProfileNewsSection} />
      <ProfileTaps.Screen
        name={'Testimonies'}
        component={ProfileTestimoniesSection}
      />
    </ProfileTaps.Navigator>
  );
};

const MainTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
        tabBarShowLabel: true,
      }}
      initialRouteName={Routes.Home}>
      <BottomTabs.Screen
        name={Routes.Home}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faHome}
              size={scaleFontsSize(23)}
              color={'#000'}
            />
          ),
        }}
        component={HomeStackNavigator}
      />

      <BottomTabs.Screen
        name={Routes.Chats}
        options={{
          tabBarIcon: () => (
            <View>
              <FontAwesomeIcon
                icon={faMessage}
                size={scaleFontsSize(22)}
                color={'#000'}
              />
            </View>
          ),
        }}
        component={Chats}
      />
      <BottomTabs.Screen
        name={Routes.Create}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faPlus}
              size={scaleFontsSize(23)}
              color={'#000'}
            />
          ),
        }}
        component={Create}
      />
      <BottomTabs.Screen
        name={Routes.Profile}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faUser}
              size={scaleFontsSize(23)}
              color={'#000'}
            />
          ),
        }}
        component={ProfiletackNavigator}
      />
      <BottomTabs.Screen
        name={Routes.Spotlight}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              size={scaleFontsSize(23)}
              color={'#000'}
            />
          ),
        }}
        component={Spotlight}
      />
    </BottomTabs.Navigator>
  );
};

const RootStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="MainTabs" component={MainTabsNavigator} />
      <RootStack.Screen name="ChatDetail" component={ChatDetail} />
      <RootStack.Screen name="DonationPage" component={DonationPage} />
      <RootStack.Screen name="SelectionScreen" component={SelectionScreen} />
      <RootStack.Screen name="EventDescription" component={EventDescription} />
      <RootStack.Screen name="Search" component={Search} />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
