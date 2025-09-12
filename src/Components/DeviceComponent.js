import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../Constants/Fonts';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';
import CustomInputText from './CustomInputText';

const DeviceComponent = props => {
  return (
    <View style={styles.Container}>
      <Text style={styles.textStyle}>{props?.name}</Text>
      <CustomInputText
        placeholder={props?.placeholder}
        placeholderTextColor={props?.placeholdertextColor}
        inputContainer={styles.inputStyle}
        keyboardType={props?.keyboardType}
      />
    </View>
  );
};

export default DeviceComponent;

const styles = StyleSheet.create({
  Container: {
    marginTop: hp(1.6),
  },
  textStyle: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    fontSize: Fontsize.xs2,
    marginBottom: wp(0.1),
    marginLeft: hp(0.2),
  },
  inputStyle: {
    fontSize: Fontsize.xsm,
    paddingHorizontal: wp(3),
    borderColor: Colors.lightgray,
    marginTop: hp(0.1),
  },
});
