import React from 'react';
import Tabs from '../../../Components/Tabs/Tabs';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  scaleFontsSize,
  horizontalScale,
  verticalScale,
} from '../../Styles/Scaling';
import {toggleCategory} from '../../../redux/reducers/categoriesSlice';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {useSelector, useDispatch} from 'react-redux';

const SelectionScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {allCategories, selectedCategories} = useSelector(
    state => state.categories,
  );

  const renderCategory = ({item}) => (
    <View style={style.categoryContainer}>
      <Text style={style.HeaderTxt}>{item.title}</Text>
      <FlatList
        data={item.subCategories}
        renderItem={({item: subCategory}) => (
          <View style={style.Option}>
            <Tabs
              TabsTxt={subCategory}
              TabsWidth={horizontalScale(160)}
              TabsHeight={verticalScale(43)}
              TabsTextFont={scaleFontsSize(16)}
              isSelected={selectedCategories.includes(subCategory)}
              onPress={() => dispatch(toggleCategory(subCategory))}
            />
          </View>
        )}
        keyExtractor={item => item}
        numColumns={2}
      />
    </View>
  );

  return (
    <SafeAreaView style={style.safeAreaView}>
      <View style={style.Container}>
        <FlatList
          ListHeaderComponent={
            <>
              <TouchableOpacity
                style={{marginRight: horizontalScale(100)}}
                onPress={() => navigation.goBack()}>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  size={scaleFontsSize(25)}
                  color={'#022150'}
                />
              </TouchableOpacity>
              <View style={style.HeaderContainer}>
                <Text style={style.PageHearderTxt}>
                  Which Would Do You Want to Support?
                </Text>
                <Text style={style.HearderTxtTExplanation}>
                  Select a charity category you are passionate about. You'll
                  receive updates on related charities worldwide, keeping you
                  informed and engaged.
                </Text>
              </View>
            </>
          }
          data={allCategories}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectionScreen;
