import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../Constants/Fonts';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';
import Btn from './Btn';
import { Images } from '../Assets';

const MobileRequest = props => {
  return (
    <View style={styles.Container}>
      <Image
        source={Images.SadMobile}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.heading}>{props?.mobileheading}</Text>
      <Text style={styles.subtitle}>{props?.define}</Text>
      <View style={styles.btncontainer}>
        <Btn title="Request This Mobile" style={styles.secondary} />
      </View>
    </View>
  );
};

export default MobileRequest;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: hp('12%'),
  },
  title: {
    textAlign: 'center',
    marginBottom: hp('2%'),
    fontSize: wp('5%'),
  },
  imageStyle: {
    width: wp('48%'),
    height: hp('25%'),
    alignSelf: 'center',
    marginBottom: hp('2%'),
    marginRight: wp('4%'),
  },

  subtitle: {
    color: Colors.eyecolor,
    fontSize: Fontsize.fz,
    fontFamily: Fonts.medium,
    textAlign: 'center',
    width: wp(84),
    marginLeft: wp(3.2),
  },
  heading: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.fm,
    textAlign: 'center',
  },
  btncontainer: {
    marginTop: hp('21.9%'),
    // marginRight: wp('1.5%'),
  },
  secondary: {
    // backgroundColor: 'red',
  },
});
