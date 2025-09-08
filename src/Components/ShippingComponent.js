import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../Constants/Fonts';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';
import CustomInputText from './CustomInputText';

const ShippingComponent = props => {
  return (
    <View style={styles.Container}>
      <Text style={styles.textStyle}>{props?.name}</Text>

      <CustomInputText
        placeholder={props?.placeholder}
        placeholderTextColor={props?.placeholdertextColor}
        style={styles.inputStyle}
      />
    </View>
  );
};

export default ShippingComponent;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: wp(5),
    marginTop: hp(4.2),
    // marginTop: hp(2),
  },
  textStyle: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    fontSize: Fontsize.s,
    marginBottom: hp(0.1),
  },
  inputStyle: {
    fontSize: Fontsize.xsm,
    color: Colors.mediumGrey,
    // marginTop: hp(0.5), //
  },
});
