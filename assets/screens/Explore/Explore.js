import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ExplorePageTabsNavigator} from '../../../Navigation/MainNavigation';

const Explore = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <ExplorePageTabsNavigator />
      </View>
    </SafeAreaView>
  );
};

export default Explore;
