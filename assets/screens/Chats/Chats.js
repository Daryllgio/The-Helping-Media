import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Text, View, FlatList, Pressable} from 'react-native';
import MessageBar from '../../../Components/MessagesBar/MessageBar';
import {
  faFilter,
  faMicrophone,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';
import FilterOptions from '../../../Components/FilterOptions/FilterOptions';

import {faPenToSquare} from '@fortawesome/free-regular-svg-icons';
import {scaleFontsSize} from '../../Styles/Scaling';
import {Routes} from '../../../Navigation/Routes';

const Chats = ({navigation}) => {
  const MessagesBars = [
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Name: 'Bill and Melinda gates foundation',
      message:
        'We want to have a partnership with you ncduiwbcvj owcnweiwbcewc',
      DorH_received: '15h',
      id: '1',
    },
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Name: 'Chan Zuckerberg Initiative',
      message: 'We admire your Initiative',
      DorH_received: '1d',
      id: '2',
    },
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Name: 'Warren Buffet',
      message: 'I just donated 5 Million dollars for your next project',
      DorH_received: '2w',
      id: '3',
    },
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Name: 'Job searcher',
      message: 'I wish to know if the are available accounting job spaces',
      DorH_received: '12m',
      id: '4',
    },
    {
      profileImage: require('../../../assets/Images/default_profile.png'),
      Name: 'Volunteer',
      message: 'I wish to volunteer for your next initiative',
      DorH_received: '18m',
      id: '5',
    },
  ];

  const onMessagePress = item => {
    navigation.navigate('ChatDetail', {
      Name: item.Name,
      profileImage: item.profileImage, // Pass user data to ChatDetail screen
    });
  };
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filterIconPosition, setFilterIconPosition] = useState({x: 0, y: 0});
  const filterIconRef = useRef(null);

  const toggleFilter = () => {
    filterIconRef.current.measure((fx, fy, width, height, px, py) => {
      setFilterIconPosition({x: px, y: py});
      setIsFilterVisible(!isFilterVisible);
    });
  };

  const UserMessagePageSize = 7;
  const [userMessageFetchedCounter, setuserMessageFetchedCounter] = useState(1);
  const [userMessagerenderedData, setuserMessagerenderedData] = useState([]);
  const [isLoadinguserMessage, setisLoadinguserMessage] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startindex = (currentPage - 1) * pageSize;
    const endindex = startindex + pageSize;
    if (startindex >= database.length) {
      return [];
    }
    return database.slice(startindex, endindex);
  };
  useEffect(() => {
    setisLoadinguserMessage(true);
    const getInitialdata = pagination(MessagesBars, 1, UserMessagePageSize);
    setuserMessagerenderedData(getInitialdata);
    setisLoadinguserMessage(false);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View style={style.labels}>
          <Pressable
            style={style.icon}
            onPress={toggleFilter}
            ref={filterIconRef}>
            <FontAwesomeIcon
              icon={faFilter}
              size={scaleFontsSize(23)}
              color={'#0753F7'}
            />
          </Pressable>
          <Text style={style.ChatLabel}>Messages</Text>

          <Pressable>
            <FontAwesomeIcon
              icon={faPenToSquare}
              size={scaleFontsSize(23)}
              color={'#0753F7'}
            />
          </Pressable>
        </View>
      </View>
      <FilterOptions
        visible={isFilterVisible}
        onClose={() => setIsFilterVisible(false)}
        filterIconPosition={filterIconPosition}
      />

      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.SearchBarContainer}>
              <Pressable
                style={style.SearchBarIcon}
                onPress={() => navigation.navigate(Routes.Search)}>
                <View style={style.SearchAndText}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    size={scaleFontsSize(18)}
                    color={'#818181'}
                  />
                  <Text style={style.SearchText}>Search</Text>
                </View>
                <View>
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    size={scaleFontsSize(18)}
                    color={'#818181'}
                  />
                </View>
              </Pressable>
            </View>
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoadinguserMessage) {
            return;
          }
          setisLoadinguserMessage(true);
          const contentToappend = pagination(
            MessagesBars,
            userMessageFetchedCounter + 1,
            UserMessagePageSize,
          );
          if (contentToappend.length > 0) {
            setuserMessageFetchedCounter(userMessageFetchedCounter + 1);
            setuserMessagerenderedData(prev => [...prev, ...contentToappend]);
          }
          setisLoadinguserMessage(false);
        }}
        showsVerticalScrollIndicator={false}
        data={userMessagerenderedData}
        renderItem={({item}) => (
          <Pressable onPress={() => onMessagePress(item)}>
            <MessageBar
              key={item.id}
              Name={item.Name}
              message={item.message}
              profileImage={item.profileImage}
              DorH_received={item.DorH_received}
            />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default Chats;
