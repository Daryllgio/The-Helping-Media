// BottomSheet.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = React.forwardRef(({children, height = 250}, ref) => (
  <RBSheet
    ref={ref}
    closeOnDragDown={true}
    closeOnPressMask={true}
    customStyles={{
      wrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      draggableIcon: {
        backgroundColor: 'black',
      },
      container: {
        height: height,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    }}>
    <View style={styles.contentContainer}>{children}</View>
  </RBSheet>
));

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
});

export default BottomSheet;
