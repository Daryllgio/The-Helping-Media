import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import style from './style';
import UserStories from '../../../Components/UserStories/UserStories';
import UserPosts from '../../../Components/UserPosts/UserPosts';
import {scaleFontsSize} from '../../../assets/Styles/Scaling';
import globalStyles from '../../Styles/globalStyles';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../../Navigation/Routes';

const Home = ({navigation}) => {
  const userstories = [
    {
      UserName: '@Giovanny',
      id: 1,
      profileImage: require('../../../assets/Images/default_profile.png'),
    },
    {
      UserName: '@Tracy ',
      id: 2,
      profileImage: require('../../../assets/Images/default_profile.png'),
    },
    {
      UserName: '@Jeff',
      id: 3,
      profileImage: require('../../../assets/Images/default_profile.png'),
    },
    {
      UserName: '@Amaris',
      id: 4,
      profileImage: require('../../../assets/Images/default_profile.png'),
    },
    {
      UserName: '@Vianney',
      id: 5,
      profileImage: require('../../../assets/Images/default_profile.png'),
    },
    {
      UserName: '@Noa',
      id: 6,
      profileImage: require('../../../assets/Images/default_profile.png'),
    },
    {
      UserName: '@Jean-Pierre',
      id: 7,
      profileImage: require('../../../assets/Images/default_profile.png'),
    },
    {
      UserName: '@Nancy',
      id: 8,
      profileImage: require('../../../assets/Images/default_profile.png'),
    },
    {
      UserName: '@Asta',
      id: 9,
      profileImage: require('../../../assets/Images/default_profile.png'),
    },
  ]; // This an array that will hold all the informations about each userstories. We assume, each userstories
  // are represented by objects with the firstName, id and profile image of the user.
  const userposts = [
    {
      firstName: 'Giovanny',
      LastName: 'Mbal',
      location: 'Ottawa, Canada',
      Donations: '100k',
      likes: 120,
      comments: 30,
      bookmarks: 50,
      id: 1,
      post: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      postContent: 'This is the content of the post.',
    },
    {
      firstName: 'Tracy',
      LastName: 'Ndikum',
      location: 'Minneapolis, Minnesota',
      Donations: '3k',
      likes: 500,
      comments: 800,
      bookmarks: 9,
      id: 2,
      post: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      postContent: 'This is the content of the post.',
    },
    {
      firstName: 'Jeff',
      LastName: 'Fodop',
      location: 'Fayetteville, North Carolina',
      Donations: '10k',
      likes: 400,
      comments: 32,
      bookmarks: 15,
      id: 3,
      post: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      postContent: 'This is the content of the post.',
    },
    {
      firstName: 'Amaris',
      LastName: 'Mbaugbaw',
      location: 'Cypress, Texas',
      Donations: '5k',
      likes: 550,
      comments: 70,
      bookmarks: 35,
      id: 4,
      post: require('../../..//assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      postContent: 'This is the content of the post.',
    },
    {
      firstName: 'Vianney',
      LastName: 'Tanifor',
      location: 'Upper Marlboro, Maryland',
      Donations: '1k',
      likes: 120,
      comments: 50,
      bookmarks: 45,
      id: 5,
      post: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      postContent: 'This is the content of the post.',
    },
    {
      firstName: 'Noa',
      LastName: 'Winner',
      location: 'Paris, France',
      Donations: '8k',
      likes: 12,
      comments: 10,
      bookmarks: 1,
      id: 6,
      post: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      postContent: 'This is the content of the post.',
    },
  ];
  const UserStoriesPageSize = 4;
  const [userStoriesFetchedCounter, setuserStoriesFetchedCounter] = useState(1);
  const [userStoriesrenderedData, setuserStoriesrenderedData] = useState([]);
  const [isLoadinguserStories, setisLoadinguserStories] = useState(false);

  const [userPostsFetchedCounter, setuserPostsFetchedCounter] = useState(1);
  const [userPostsrenderedData, setuserPostsrenderedData] = useState([]);
  const [isLoadinguserPosts, setisLoadinguserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startindex = (currentPage - 1) * pageSize;
    const endindex = startindex + pageSize;
    if (startindex >= database.length) {
      return [];
    }
    return database.slice(startindex, endindex);
  };

  const UserPostsPageSize = 1;
  useEffect(() => {
    setisLoadinguserStories(true);
    const getInitialdata = pagination(userstories, 1, UserStoriesPageSize);
    setuserStoriesrenderedData(getInitialdata);
    setisLoadinguserStories(false);

    setisLoadinguserPosts(true);
    const getInitialdataPosts = pagination(userposts, 1, UserPostsPageSize);
    setuserPostsrenderedData(getInitialdataPosts);
    setisLoadinguserPosts(false);
  }, []);

  return (
    <SafeAreaView style={globalStyles.backgroundWhite}>
      <StatusBar backgroundColor={'black'} barStyle={'dark-content'} />

      <View style={style.AppContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.hearder}>
                <Text style={style.DonateTxt}>Donate Now</Text>
                <View style={style.IconContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(Routes.Explore);
                    }}
                    style={style.Icon}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      size={scaleFontsSize(22)}
                      color={'#022150'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(Routes.Notification);
                    }}
                    style={style.Icon}>
                    <FontAwesomeIcon
                      icon={faBell}
                      size={scaleFontsSize(26)}
                      color={'#022150'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.Stories}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadinguserStories) {
                      return;
                    }
                    setisLoadinguserStories(true);
                    const contentToappend = pagination(
                      userstories,
                      userStoriesFetchedCounter + 1,
                      UserStoriesPageSize,
                    );
                    if (contentToappend.length > 0) {
                      setuserStoriesFetchedCounter(
                        userStoriesFetchedCounter + 1,
                      );
                      setuserStoriesrenderedData(prev => [
                        ...prev,
                        ...contentToappend,
                      ]);
                    }
                    setisLoadinguserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false} // to remove the line that appewars when you scroll
                  horizontal={true} // for the items in the list to appear horizonatally
                  data={userStoriesrenderedData}
                  renderItem={({item}) => (
                    <UserStories
                      key={'userstories' + item.id}
                      UserName={item.UserName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadinguserPosts) {
              return;
            }
            setisLoadinguserPosts(true);
            const contentToappend = pagination(
              userposts,
              userPostsFetchedCounter + 1,
              UserPostsPageSize,
            );
            if (contentToappend.length > 0) {
              setuserPostsFetchedCounter(userPostsFetchedCounter + 1);
              setuserPostsrenderedData(prev => [...prev, ...contentToappend]);
            }
            setisLoadinguserPosts(false);
          }}
          showsVerticalScrollIndicator={false}
          data={userPostsrenderedData}
          renderItem={({item}) => (
            <UserPosts
              firstName={item.firstName}
              LastName={item.LastName}
              location={item.location}
              post={item.post}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
              Donations={item.Donations}
              postContent={item.postContent}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
