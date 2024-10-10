import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import style from './style';
import EventsPosts from '../../../Components/EventsPosts/EventsPosts';
import SearchandCat from './SearchandCat';
import {scaleFontsSize} from '../../Styles/Scaling';

const Event = ({navigation}) => {
  const EventsPostsData = [
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Date: '25/12/2024',
      AccountName: 'The Gwags Foundation',
      EventName: 'Global Food Service Move',
      NumOfDonations: '3900',
      DonationGoal: '100,000',
      CurrentAmount: '90,000',
      PercentageContributed: 81,
      Image: require('../../../assets/Images/default_post.png'),
      location: 'Bonamoussadi, Douala Cameroon',
      description:
        "Join us for our Global Food Service Move event! We'll be providing meals to those in need across Douala. Your donations will help us reach more people and make a bigger impact in our community.",
      images: [
        require('../../../assets/Images/default_post.png'),
        require('../../../assets/Images/default_post.png'),
        require('../../../assets/Images/default_post.png'),
      ],
    },
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Date: '25/12/2024',
      AccountName: 'The Gwags Foundation',
      EventName: 'Global Food Service in Douala Cameroon',
      NumOfDonations: '3900',
      DonationGoal: '100,000',
      CurrentAmount: '10,000',
      PercentageContributed: 81,
      Image: require('../../../assets/Images/default_post.png'),
      location: 'Bonamoussadi, Douala Cameroon',
      description:
        "Join us for our Global Food Service Move event! We'll be providing meals to those in need across Douala. Your donations will help us reach more people and make a bigger impact in our community.",
    },
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Date: '25/12/2024',
      AccountName: 'The Gwags Foundation',
      EventName: 'Global Food Service in Douala Cameroon',
      NumOfDonations: '3900',
      DonationGoal: '100,000',
      CurrentAmount: '10,000',
      PercentageContributed: 81,
      Image: require('../../../assets/Images/default_post.png'),
      location: 'Bonamoussadi, Douala Cameroon',
    },
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Date: '25/12/2024',
      AccountName: 'The Gwags Foundation',
      EventName: 'Global Food Service in Douala Cameroon',
      NumOfDonations: '3900',
      DonationGoal: '100,000',
      CurrentAmount: '10,000',
      PercentageContributed: 81,
      Image: require('../../../assets/Images/default_post.png'),
      location: 'Bonamoussadi, Douala Cameroon',
    },
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Date: '25/12/2024',
      AccountName: 'The Gwags Foundation',
      EventName: 'Global Food Service in Douala Cameroon',
      NumOfDonations: '3900',
      DonationGoal: '100,000',
      CurrentAmount: '10,000',
      PercentageContributed: 81,
      Image: require('../../../assets/Images/default_post.png'),
      location: 'Bonamoussadi, Douala Cameroon',
    },
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Date: '25/12/2024',
      AccountName: 'The Gwags Foundation',
      EventName: 'Global Food Service in Douala Cameroon',
      NumOfDonations: '3900',
      DonationGoal: '100,000',
      CurrentAmount: '10,000',
      PercentageContributed: 81,
      Image: require('../../../assets/Images/default_post.png'),
      location: 'Bonamoussadi, Douala Cameroon',
    },
  ];
  const EventPostsPageSize = 2;
  const [EventPostsCounter, setEventPostsCounter] = useState(1);
  const [EventPostsrenderedData, setEventPostsrenderedData] = useState([]);
  const [isLoadingEventPosts, setisLoadingEventPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startindex = (currentPage - 1) * pageSize;
    const endindex = startindex + pageSize;
    if (startindex >= database.length) {
      return [];
    }
    return database.slice(startindex, endindex);
  };

  useEffect(() => {
    setisLoadingEventPosts(true);
    const getInitialdata = pagination(EventsPostsData, 1, EventPostsPageSize);
    setEventPostsrenderedData(getInitialdata);
    setisLoadingEventPosts(false);
  }, []);

  const handleReadMore = item => {
    navigation.navigate('EventDescription', {eventData: item});
  };

  return (
    <SafeAreaView style={style.PageContainer}>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View
                style={{
                  marginTop: scaleFontsSize(10),
                  marginHorizontal: scaleFontsSize(10),
                }}>
                <SearchandCat navigation={navigation} />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingEventPosts) {
              return;
            }
            setisLoadingEventPosts(true);
            const contentToappend = pagination(
              EventsPostsData,
              EventPostsCounter + 1,
              EventPostsPageSize,
            );
            if (contentToappend.length > 0) {
              setEventPostsCounter(EventPostsCounter + 1);
              setEventPostsrenderedData(prev => [...prev, ...contentToappend]);
            }
            setisLoadingEventPosts(false);
          }}
          data={EventPostsrenderedData}
          renderItem={({item}) => (
            <EventsPosts
              AccountName={item.AccountName}
              EventName={item.EventName}
              NumOfDonations={item.NumOfDonations}
              DonationGoal={item.DonationGoal}
              Image={item.Image}
              CurrentAmount={item.CurrentAmount}
              PercentageContributed={item.PercentageContributed}
              location={item.location}
              profileImage={item.profileImage}
              Date={item.Date}
              onReadMore={() => handleReadMore(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Event;
