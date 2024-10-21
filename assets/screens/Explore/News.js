import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import SearchandCat from './SearchandCat';
import style from './style';
import {verticalScale, horizontalScale} from '../../Styles/Scaling';
import NewsPost from '../../../Components/NewsPost/NewsPost';

const News = ({navigation}) => {
  const NewsPosts = [
    {
      NewsHeader:
        'Innovative Technology Brings Clean Water to Rural Communities',
      NewsBody:
        "In a groundbreaking effort to combat water scarcity, local engineers have developed a solar-powered filtration system that is bringing clean drinking water to thousands of people in rural villages across Sub-Saharan Africa. This innovative technology harnesses renewable energy to purify groundwater, ensuring that even the most remote communities have access to safe and clean water. The system operates entirely off the grid, making it ideal for areas that lack reliable infrastructure. So far, the project has been implemented in over 20 villages, with plans to expand into even more regions in the coming year. Experts believe this solution could play a vital role in addressing the global water crisis, which currently affects more than 2 billion people around the world. 'This is not just about water,' said project leader Dr. Amina Diallo. 'It’s about health, education, and economic development. When people have access to clean water, their lives improve in countless ways.'",
      Image1: require('../../../assets/Images/default_post.png'),
      Image2: require('../../../assets/Images/default_post.png'),
      Image3: require('../../../assets/Images/default_post.png'),
      Image4: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      AccountName: 'Compassionate Hearts Initiative',
      Donations: 199000,
      likes: 122000,
      comments: 30200,
      bookmarks: 50,
    },
    {
      NewsHeader: 'Global Efforts to Tackle Climate Change Gain Momentum',
      NewsBody:
        "As the Global Climate Summit gets underway in Geneva, leaders from more than 120 nations are gathering to address the growing urgency of climate change. The summit comes at a critical time, with extreme weather events on the rise and global temperatures continuing to climb. Discussions are centered on achieving the 2030 targets outlined in the Paris Agreement, including reducing carbon emissions and transitioning to renewable energy sources. Several countries have already committed to more ambitious climate goals, with some pledging to reach net-zero emissions by 2050. In addition to government representatives, the summit has attracted a range of stakeholders, including environmental organizations, businesses, and indigenous groups, all calling for swift and decisive action. 'This is a defining moment for our planet,' said UN Secretary-General António Guterres in his opening remarks. 'We cannot afford to wait any longer. The time for bold action is now.' The summit will continue over the next week, with key announcements expected from major economies.",
      Image1: require('../../../assets/Images/default_post.png'),
      Image2: require('../../../assets/Images/default_post.png'),
      Image3: require('../../../assets/Images/default_post.png'),
      Image4: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      AccountName: 'Hope Horizon Foundation',
      Donations: 22000,
      likes: 1200,
      comments: 300,
      bookmarks: 502,
    },
    {
      NewsHeader:
        'Local Charity Raises Over $500,000 to Support Homeless Veterans',
      NewsBody:
        "In a heartwarming display of community spirit, a charity event in New York City has raised over $500,000 to provide critical support for homeless veterans. The event, which took place over the weekend, included a 10K marathon, a silent auction, and live performances from local artists. Proceeds from the event will go towards housing, mental health services, and job training programs for veterans who are struggling to reintegrate into civilian life. Organizers were overwhelmed by the turnout, with more than 3,000 participants registering for the marathon and countless others contributing through donations. 'We are so grateful for the generosity of our community,' said Sarah Mitchell, director of the Veterans Support Foundation. 'These funds will make a real difference in the lives of our veterans, many of whom have sacrificed so much for our country.' According to recent reports, there are over 37,000 homeless veterans in the United States, many of whom suffer from post-traumatic stress disorder (PTSD) and other mental health conditions. The event has sparked renewed efforts to address this growing crisis.",
      Image1: require('../../../assets/Images/default_post.png'),
      Image2: require('../../../assets/Images/default_post.png'),
      Image3: require('../../../assets/Images/default_post.png'),
      Image4: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      AccountName: 'Hands of Humanity',
      Donations: 132000,
      likes: 12200,
      comments: 30,
      bookmarks: 50,
    },
    {
      NewsHeader:
        'Tech Startups Revolutionizing Healthcare in Developing Countries',
      NewsBody:
        "A wave of innovative tech startups is transforming healthcare delivery in developing countries, making it easier for people in remote areas to access essential medical services. Through mobile health platforms, patients can now consult with doctors, receive diagnoses, and even order prescriptions without leaving their homes. These apps, which operate on low-bandwidth networks, are specifically designed for regions with limited internet access. One startup, HealthConnect, has already launched its app in several countries in East Africa, providing critical healthcare to communities that would otherwise need to travel long distances to see a doctor. 'Our mission is to make healthcare accessible to everyone, no matter where they live,' said CEO of HealthConnect, Peter Okoye. In addition to virtual consultations, the app also offers health education resources and reminders for vaccinations and check-ups. With growing support from international donors and private investors, these startups are poised to scale their operations and reach millions more people in need. Experts believe that mobile health technologies could be a game-changer in improving health outcomes and reducing the burden on overstretched healthcare systems.",
      Image1: require('../../../assets/Images/default_post.png'),
      Image2: require('../../../assets/Images/default_post.png'),
      Image3: require('../../../assets/Images/default_post.png'),
      Image4: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      AccountName: 'Bright Future Trust',
      Donations: 102000,
      likes: 11000,
      comments: 30200,
      bookmarks: 50,
    },
    {
      NewsHeader:
        'Art Exhibition Celebrates Cultural Diversity in Modern Society',
      NewsBody:
        "A new art exhibition at the National Gallery in London is shining a spotlight on the beauty of cultural diversity in modern society. The exhibition, titled 'We Are One,' features a collection of works from 30 artists around the globe, each offering their own unique perspective on themes of identity, migration, and belonging. Visitors are taken on a journey through various mediums, including painting, sculpture, photography, and digital installations, with each piece telling a story of how culture shapes our experiences and perceptions of the world. 'This exhibition is a celebration of the human spirit in all its diversity,' said curator Maya Rodriguez. 'It’s a reminder that despite our differences, we share a common humanity.' The exhibition has been praised for its timely message, particularly in light of current global events related to immigration and social justice. With interactive displays and immersive installations, 'We Are One' invites visitors to engage deeply with the art and reflect on their own cultural heritage. The exhibition will run through the end of the month, and there are plans to take it on tour to other major cities around the world.",
      Image1: require('../../../assets/Images/default_post.png'),
      Image2: require('../../../assets/Images/default_post.png'),
      Image3: require('../../../assets/Images/default_post.png'),
      Image4: require('../../../assets/Images/default_post.png'),
      profileImage: require('../../../assets/Images/default_profile.png'),
      AccountName: 'Global Care Alliance',
      Donations: 12200,
      likes: 12010,
      comments: 30200,
      bookmarks: 5030,
    },
  ];

  const [NewsPostsFetchedCounter, setNewsPostFetchedCounter] = useState(1);
  const [NewsPostsrenderedData, setNewsPostsrenderedData] = useState([]);
  const [isLoadingNewsPosts, setisLoadingNewsPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startindex = (currentPage - 1) * pageSize;
    const endindex = startindex + pageSize;
    if (startindex >= database.length) {
      return [];
    }
    return database.slice(startindex, endindex);
  };

  const NewsPostsPageSize = 3;
  useEffect(() => {
    setisLoadingNewsPosts(true);
    const getInitialdataPosts = pagination(NewsPosts, 1, NewsPostsPageSize);
    setNewsPostsrenderedData(getInitialdataPosts);
    setisLoadingNewsPosts(false);
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
            if (isLoadingNewsPosts) {
              return;
            }
            setisLoadingNewsPosts(true);
            const contentToappend = pagination(
              NewsPosts,
              NewsPostsFetchedCounter + 1,
              NewsPostsPageSize,
            );
            if (contentToappend.length > 0) {
              setNewsPostFetchedCounter(NewsPostsFetchedCounter + 1);
              setNewsPostsrenderedData(prev => [...prev, ...contentToappend]);
            }
            setisLoadingNewsPosts(false);
          }}
          showsVerticalScrollIndicator={false}
          data={NewsPostsrenderedData}
          renderItem={({item}) => (
            <NewsPost
              NewsHeader={item.NewsHeader}
              NewsBody={item.NewsBody}
              profileImage={item.profileImage}
              AccountName={item.AccountName}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              Image1={item.Image1}
              Image2={item.Image2}
              Image3={item.Image3}
              Image4={item.Image4}
              Donations={item.Donations}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default News;
