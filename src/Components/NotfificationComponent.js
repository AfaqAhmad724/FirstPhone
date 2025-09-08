import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';

const NotfificationComponent = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.box1}>
        <Text style={styles.heading}>Order Placed Successfully</Text>
        <Text>Now</Text>
      </View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
    </View>
  );
};

export default NotfificationComponent;

const styles = StyleSheet.create({
  conatiner: {
    marginTop: hp(2.8),
  },
  box1: {
    backgroundColor: '#C7F8C959',
    width: wp(89),
    height: hp(13),
    marginLeft: wp(0.5),
    borderRadius: wp(2.25),
    marginBottom: hp(1.2),
  },
  heading: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xs2,
  },
});
