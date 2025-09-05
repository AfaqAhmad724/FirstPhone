import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Images } from '../Assets';

const ButtonGoogleApple = props => {
  return (
    <View style={styles.socialButtonsContainer}>
      <TouchableOpacity style={[styles.googleButton, styles.socialButtonLeft]}>
        <Image source={Images.google} style={styles.googleImage} />
        <Text style={styles.googleStyle}>{props?.google}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.googleButton, styles.socialButtonRight]}>
        <Image source={Images.apple} style={styles.googleImage} />
        <Text style={styles.googleStyle}>{props?.apple}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGoogleApple;

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp('6.9%'),
    paddingVertical: hp('1.6%'),
    paddingHorizontal: wp('12.3%'),
    marginTop: hp('1.35%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleImage: {
    marginRight: wp(2),
    resizeMode: 'contain',
    width: wp(5),
    height: wp(5),
  },
  googleStyle: {
    fontFamily: Fonts.medium,
    color: '#64748B',
    fontSize: wp(3.3),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: hp('1.35%'),
  },
  socialButtonLeft: {
    marginRight: wp(0.2),
  },
  socialButtonRight: {
    marginLeft: wp(2),
  },
});
