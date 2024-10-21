import React, {useState, useRef, useCallback} from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';
import {
  faBookmark,
  faComment,
  faHeart,
  faShareSquare,
} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {faBookmark as faBookmarkSolid} from '@fortawesome/free-solid-svg-icons';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {scaleFontsSize} from '../../assets/Styles/Scaling';
import {faBars, faDonate} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

import {Dimensions} from 'react-native';

const UserPosts = props => {
  const PostSettingsSheetRef = useRef(null);
  const navigation = useNavigation();
  const [PostLiked, setPostLiked] = useState(false);
  const [PostBookmarked, setPostBookmarked] = useState(false);
  const [likesDelta, setLikesDelta] = useState(0);
  const [bookmarksDelta, setBookmarksDelta] = useState(0);

  const [comments, setComments] = useState(props.commentsData || []);
  const commentSheetRef = useRef(null);

  const {height: SCREEN_HEIGHT} = Dimensions.get('window');

  const formatStat = value => {
    value = parseInt(value);
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1).replace('.0', '') + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1).replace('.0', '') + 'K';
    }
    return value.toString();
  };
  const toggleLikedButton = () => {
    setPostLiked(prevLiked => {
      const newLikedState = !prevLiked;
      setLikesDelta(prevDelta =>
        newLikedState ? prevDelta + 1 : prevDelta - 1,
      );
      return newLikedState;
    });
  };

  const handleDonatePress = () => {
    navigation.navigate('DonationPage', {
      donationType: 'Charity',
      Char_Event_name: `${props.firstName} ${props.LastName}`,
    });
  };

  const BookmarkedButton = () => {
    setPostBookmarked(prevBookmarked => {
      const newBookmarkedState = !prevBookmarked;
      setBookmarksDelta(prevDelta =>
        newBookmarkedState ? prevDelta + 1 : prevDelta - 1,
      );
      return newBookmarkedState;
    });
  };

  return (
    <View style={style.post}>
      <View style={style.postInfo}>
        <View style={{flexDirection: 'row'}}>
          <UserProfileImage
            profileImage={props.profileImage}
            ImageDimensions={40}
          />
          <View style={style.NamesLoc}>
            <Text style={style.UserName}>
              {props.firstName} {props.LastName}
            </Text>
            {props.location && (
              <Text style={style.Location}>{props.location}</Text>
            )}
          </View>
        </View>

        <Pressable>
          <FontAwesomeIcon
            icon={faBars}
            size={scaleFontsSize(22)}
            color={'#000'}
            style={style.iconSpace}
          />
        </Pressable>
      </View>
      <Image source={props.post} style={style.Image} />

      <View style={[style.postInfo, {alignItems: 'flex-start'}]}>
        <View style={{flexDirection: 'row'}}>
          <View style={style.icons}>
            <Pressable onPress={handleDonatePress}>
              <FontAwesomeIcon
                icon={faDonate}
                size={scaleFontsSize(24)}
                color={'#000'}
                style={style.iconSpace}
              />
            </Pressable>
            <Text style={style.numbers}>{formatStat(props.Donations)}</Text>
          </View>

          <View style={style.icons}>
            <Pressable onPress={toggleLikedButton}>
              <FontAwesomeIcon
                icon={PostLiked ? faHeartSolid : faHeart}
                size={scaleFontsSize(22)}
                color={PostLiked ? 'red' : '#000'}
                style={style.iconSpace}
              />
            </Pressable>
            <Text style={style.numbers}>
              {formatStat(parseInt(props.likes) + likesDelta)}
            </Text>
          </View>

          <View style={style.icons}>
            <Pressable>
              <FontAwesomeIcon
                icon={faComment}
                size={scaleFontsSize(22)}
                color={'#000'}
                style={style.iconSpace}
              />
            </Pressable>

            <Text style={style.numbers}>{formatStat(props.comments)}</Text>
          </View>

          <View style={style.icons}>
            <Pressable onPress={BookmarkedButton}>
              <FontAwesomeIcon
                icon={PostBookmarked ? faBookmarkSolid : faBookmark}
                size={scaleFontsSize(22)}
                color={PostBookmarked ? '#0753F7' : '#000'}
                style={style.iconSpace}
              />
            </Pressable>
            <Text style={style.numbers}>
              {formatStat(parseInt(props.bookmarks) + bookmarksDelta)}
            </Text>
          </View>

          <FontAwesomeIcon
            icon={faShareSquare}
            size={scaleFontsSize(25)}
            color={'#000'}
            style={style.iconSpace}
          />
        </View>
      </View>
    </View>
  );
};

UserPosts.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
  LastName: PropTypes.string.isRequired,
  Donations: PropTypes.number.isRequired,
  location: PropTypes.string, // Location doesn't need to be present on the post
  post: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  ImageDimensions: PropTypes.number.isRequired,
  commentsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default UserPosts;
