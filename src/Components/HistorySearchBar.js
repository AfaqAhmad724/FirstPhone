import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeTextInput from './HomeTextInput';
import { Images } from '../Assets';
import { Colors } from '../Constants/Colors';
import { Strings } from '../Constants/Strings';
import { hp, wp } from '../Constants/Responsive';
import { Fontsize } from '../Constants/Fontsize';
import { Fonts } from '../Constants/Fonts';

const HistorySearchBar = () => {
  return (
    <View>
      <HomeTextInput
        placeholder="Search here"
        icon={Images.search}
        placeholderTextColor={Colors.gray}
        keyboardType="email-address"
        backgroundColor={Colors.bg}
        vectorstyle={{ width: wp(6) }}
        inputContainer={styles.inputContainer}
      />
      <Text style={styles.mobileModal}>{Strings.mobileModals}</Text>
    </View>
  );
};

export default HistorySearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: Colors.silverGrey,
    borderWidth: wp(0.2),
  },
  mobileModal: {
    width: wp(90),
    marginTop: hp(1),
    color: Colors.graylight,
    fontSize: Fontsize.xs,
    fontFamily: Fonts.regular,
  },
});
