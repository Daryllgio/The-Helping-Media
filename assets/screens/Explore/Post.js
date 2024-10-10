import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import SearchandCat from './SearchandCat';
import UserPosts from '../../../Components/UserPosts/UserPosts';
import {horizontalScale, verticalScale} from '../../Styles/Scaling';
import style from './style';

const Post = ({navigation}) => {
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
    },
  ];
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
    setisLoadinguserPosts(true);
    const getInitialdataPosts = pagination(userposts, 1, UserPostsPageSize);
    setuserPostsrenderedData(getInitialdataPosts);
    setisLoadinguserPosts(false);
  }, []);
  return (
    <SafeAreaView style={style.PageContainer}>
      <View style={{marginHorizontal: horizontalScale(10)}}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={{marginVertical: verticalScale(12)}}>
                <SearchandCat navigation={navigation} />
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
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Post;
