import React, {useState} from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import * as Progress from 'react-native-progress';
import {scaleFontsSize} from '../../assets/Styles/Scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowUpFromBracket,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {faBell as faBellSolid} from '@fortawesome/free-solid-svg-icons';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {useNavigation} from '@react-navigation/native';

const EventsPosts = props => {
  const navigation = useNavigation();
  const [isNotificationOn, setIsNotificationOn] = useState(false);
  const toggleNotification = () => {
    setIsNotificationOn(!isNotificationOn);
  };
  const handleDonatePress = () => {
    navigation.navigate('DonationPage', {
      donationType: 'Event',
      Char_Event_name: props.EventName,
    });
  };
  return (
    <View style={style.Container}>
      <View style={style.UserDetails}>
        <UserProfileImage
          profileImage={props.profileImage}
          ImageDimensions={38}
        />
        <Text style={style.AccountName}>{props.AccountName}</Text>
      </View>
      <View style={style.ImageContainer}>
        <Image source={props.Image} style={style.Image} />
      </View>
      <View>
        <View style={style.hearderContainer}>
          <Text style={style.EventName}>{props.EventName}</Text>
          <Pressable onPress={toggleNotification}>
            <FontAwesomeIcon
              icon={isNotificationOn ? faBellSolid : faBell}
              size={scaleFontsSize(23)}
              color={'#0753F7'}
              style={{
                marginRight: scaleFontsSize(8),
                marginLeft: scaleFontsSize(3),
              }}
            />
          </Pressable>

          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            size={scaleFontsSize(22)}
            color={'#0753F7'}
          />
        </View>
        <View style={style.EventDetailsContainer}>
          <FontAwesomeIcon
            icon={faLocationDot}
            size={scaleFontsSize(18)}
            color={'#0753F7'}
          />
          <Text style={style.EventDetailsText}>{props.location}</Text>
        </View>
        <View style={style.EventDetailsContainer}>
          <FontAwesomeIcon
            icon={faCalendar}
            size={scaleFontsSize(18)}
            color={'#0753F7'}
          />
          <Text style={style.EventDetailsText}>{props.Date}</Text>
        </View>

        <View style={{flex: 'column', marginHorizontal: scaleFontsSize(23)}}>
          <View style={style.StatsContainer}>
            <Text style={style.statistics}>
              ${props.CurrentAmount} of ${props.DonationGoal} raised
            </Text>
            <Text style={style.statistics}>{props.PercentageContributed}%</Text>
          </View>

          <Progress.Bar
            progress={0.1}
            width={null}
            style={{marginVertical: scaleFontsSize(3)}}
          />
          <Text style={style.statistics}>
            {props.NumOfDonations} supporters
          </Text>
        </View>

        <View style={style.ActionContainer}>
          <TouchableOpacity onPress={props.onReadMore}>
            <Text style={style.ReadMoreTxt}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleDonatePress}
            style={style.DonateButton}>
            <Text style={style.DonateTxtx}>Donate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

EventsPosts.propTypes = {
  EventName: PropTypes.string.isRequired,
  NumOfDonations: PropTypes.string.isRequired,
  DonationGoal: PropTypes.string.isRequired,
  Image: PropTypes.any.isRequired,
  CurrentAmount: PropTypes.string.isRequired,
  PercentageContributed: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  AccountName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
  Date: PropTypes.string.isRequired,
  onReadMore: PropTypes.func.isRequired,
};

export default EventsPosts;
