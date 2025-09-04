import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';

const AuthHeader = props => {
  return (
    <View style={styles.signupcontainer}>
      <Text style={styles.label}>{props?.label}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  signupcontainer: {
    backgroundColor: '#4AB95A',
    height: hp(12.3),
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    marginLeft: wp(5.3),
    fontFamily: Fonts.semibold,
    marginTop: hp(6),
    fontSize: 14,
  },
});
