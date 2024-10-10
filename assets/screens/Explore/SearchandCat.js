import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setActiveExploreCategory} from '../../../redux/reducers/categoriesSlice';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faSearch} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../../Navigation/Routes';

import Tabs from '../../../Components/Tabs/Tabs';
import {
  scaleFontsSize,
  horizontalScale,
  verticalScale,
} from '../../Styles/Scaling';

const SearchandCat = ({navigation}) => {
  const dispatch = useDispatch();
  const {selectedCategories, activeExploreCategory} = useSelector(
    state => state.categories,
  );

  const handleCategoryPress = category => {
    dispatch(setActiveExploreCategory(category));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.inputContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.SelectionScreen)}>
          <FontAwesomeIcon
            icon={faPlus}
            color={'#022150'}
            size={scaleFontsSize(23)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.Search)}
          style={style.TouchableSearchinput}>
          <TouchableOpacity style={style.TouchableSearchIcon}>
            <FontAwesomeIcon icon={faSearch} size={scaleFontsSize(16)} />
          </TouchableOpacity>
          <Text style={style.TouchableSearchTxt}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={selectedCategories}
        renderItem={({item}) => (
          <Tabs
            TabsTxt={item}
            TabsWidth={horizontalScale(120)}
            TabsHeight={verticalScale(30)}
            TabsTextFont={scaleFontsSize(14)}
            isSelected={item === activeExploreCategory}
            onPress={() => handleCategoryPress(item)}
          />
        )}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SearchandCat;
