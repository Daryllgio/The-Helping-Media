import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faLocationDot,
  faArrowUpFromBracket,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import * as Progress from 'react-native-progress';
import style from './style';
import {
  scaleFontsSize,
  horizontalScale,
  verticalScale,
} from '../../../assets/Styles/Scaling';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {faBell as faBellSolid} from '@fortawesome/free-solid-svg-icons';

const {width, height} = Dimensions.get('window');

const EventDescription = ({route, navigation}) => {
  const {eventData} = route.params;
  const [isNotificationOn, setIsNotificationOn] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleNotification = () => {
    setIsNotificationOn(!isNotificationOn);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderImage = ({item, index}) => (
    <Image
      source={item}
      style={[
        style.carouselImage,
        {
          marginRight:
            index < eventData.images.length - 1 ? horizontalScale(10) : 0,
        },
      ]}
    />
  );

  return (
    <SafeAreaView style={style.container}>
      <ScrollView
        contentContainerStyle={style.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <ImageBackground source={eventData.Image} style={style.headerImage}>
          <Pressable
            style={style.backButton}
            onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={22} color="#FFFFFF" />
          </Pressable>
        </ImageBackground>
        <View style={style.contentContainer}>
          <Text style={style.eventName}>{eventData.EventName}</Text>

          <View style={style.infoContainer}>
            <FontAwesomeIcon icon={faCalendar} size={16} color="#0753F7" />
            <Text style={style.infoText}>{eventData.Date}</Text>
          </View>
          <View style={style.progressContainer}>
            <Text style={style.progressText}>
              ${eventData.CurrentAmount} of ${eventData.DonationGoal} raised
            </Text>
            <Progress.Bar
              progress={
                parseFloat(eventData.CurrentAmount) /
                (parseFloat(eventData.DonationGoal) || 1)
              }
              width={null}
              height={verticalScale(3.3)}
              color="#0753F7"
            />
            <Text style={style.supportersText}>
              {eventData.NumOfDonations} supporters
            </Text>
          </View>
          <Text style={style.descriptionTitle}>About This Event</Text>
          <Text style={style.descriptionText}>
            {showFullDescription
              ? eventData.description
              : `${eventData.description.slice(0, 150)}...`}
          </Text>
          <Pressable onPress={toggleDescription}>
            <Text style={style.descriptionExpandText}>
              {showFullDescription ? 'Show less' : 'Show more'}
            </Text>
          </Pressable>
        </View>
        <FlatList
          data={eventData.images}
          renderItem={renderImage}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.carouselContainer}
        />
        <View style={style.MapContainer}>
          <View style={style.MapImageContainer}>
            <Image
              source={require('../../../assets/Images/display-a-map-b4974c7cfef498eb43e99ab60191cbaf.png')}
              style={style.MapImage}
            />
          </View>
          <View style={style.locationContainer}>
            <FontAwesomeIcon icon={faLocationDot} size={17} color="#0753F7" />
            <Text style={style.locationText}>{eventData.location}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={style.ActionButtonContainer}>
        <View style={style.ActionButton}>
          <Pressable style={style.donateButton}>
            <Text style={style.donateButtonText}>Donate Now</Text>
          </Pressable>
          <Pressable onPress={toggleNotification}>
            <FontAwesomeIcon
              icon={isNotificationOn ? faBellSolid : faBell}
              size={scaleFontsSize(24)}
              color={'#0753F7'}
              style={{
                marginRight: scaleFontsSize(8),
                marginLeft: scaleFontsSize(3),
              }}
            />
          </Pressable>
          <Pressable>
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              size={scaleFontsSize(24)}
              color={'#0753F7'}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EventDescription;
