import React, {useState} from 'react';
import {View, Text, Image, Pressable, FlatList, Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {
  faBookmark,
  faComment,
  faHeart,
  faShareSquare,
} from '@fortawesome/free-regular-svg-icons';
import {scaleFontsSize} from '../../assets/Styles/Scaling';
import PropTypes from 'prop-types';
import style from './style';
import {faDonate} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const IMAGE_WIDTH = width * 0.7;
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.75;

const NewsPost = props => {
  const navigation = useNavigation();
  const [showFullNewsBody, setShowFullNewsBody] = useState(false);
  const images = [
    props.Image1,
    props.Image2,
    props.Image3,
    props.Image4,
  ].filter(Boolean);

  const toggleDescription = () => {
    setShowFullNewsBody(!showFullNewsBody);
  };

  const renderImage = ({item}) => (
    <Image
      source={item}
      style={{
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        borderRadius: 8,
        marginRight: 10,
      }}
    />
  );

  return (
    <View style={style.NewsContainer}>
      <View style={style.UserDetails}>
        <UserProfileImage
          profileImage={props.profileImage}
          ImageDimensions={36}
        />
        <Text style={style.AccountName}>{props.AccountName}</Text>
      </View>
      <View style={style.NewsContent}>
        <Text style={style.NewsHeader}>{props.NewsHeader}</Text>
        <Text style={style.NewsBody}>
          {showFullNewsBody
            ? props.NewsBody
            : `${props.NewsBody.slice(0, 150)}...`}
        </Text>
        <Pressable onPress={toggleDescription}>
          <Text style={style.NewsBodyExpandText}>
            {showFullNewsBody ? 'Show less' : 'Show more'}
          </Text>
        </Pressable>
        {images.length > 0 && (
          <FlatList
            data={images}
            renderItem={renderImage}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginVertical: 10}}
          />
        )}

        <View style={style.IconsContainer}>
          <View style={style.icons}>
            <Pressable
              onPress={() => {
                navigation.navigate('DonationPage');
              }}>
              <FontAwesomeIcon
                icon={faDonate}
                size={scaleFontsSize(22)}
                color={'#000'}
                style={style.iconSpace}
              />
            </Pressable>
            <Text style={style.numbers}>{props.Donations}k</Text>
          </View>

          <View style={style.icons}>
            <Pressable>
              <FontAwesomeIcon
                icon={faHeart}
                size={scaleFontsSize(20)}
                color={'#000'}
                style={style.iconSpace}
              />
            </Pressable>
            <Text style={style.numbers}>{props.likes}k</Text>
          </View>

          <View style={style.icons}>
            <Pressable>
              <FontAwesomeIcon
                icon={faComment}
                size={scaleFontsSize(20)}
                color={'#000'}
                style={style.iconSpace}
              />
            </Pressable>

            <Text style={style.numbers}>{props.comments}k</Text>
          </View>

          <View style={style.icons}>
            <Pressable>
              <FontAwesomeIcon
                icon={faBookmark}
                size={scaleFontsSize(20)}
                color={'#000'}
                style={style.iconSpace}
              />
            </Pressable>
            <Text style={style.numbers}>{props.bookmarks}k</Text>
          </View>
          <FontAwesomeIcon
            icon={faShareSquare}
            size={scaleFontsSize(23)}
            color={'#000'}
            style={style.iconSpace}
          />
        </View>
      </View>
    </View>
  );
};

NewsPost.propTypes = {
  NewsHeader: PropTypes.string.isRequired,
  NewsBody: PropTypes.string.isRequired,
  AccountName: PropTypes.string.isRequired,
  Donations: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  Image1: PropTypes.any,
  Image2: PropTypes.any,
  Image3: PropTypes.any,
  Image4: PropTypes.any,
  profileImage: PropTypes.any.isRequired,
};
export default NewsPost;
