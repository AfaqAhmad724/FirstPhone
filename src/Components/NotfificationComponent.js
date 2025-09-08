import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { Colors } from '../Constants/Colors';

const NotfificationComponent = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.box1}>
        <View style={styles.rowBetween}>
          <Text style={styles.heading}>Order Placed Successfully</Text>
          <Text style={styles.nowStyle}>Now</Text>
        </View>
        <Text style={styles.define}>
          Your order has been placed and is now being processed.
        </Text>
      </View>

      <View style={styles.box1}>
        <View style={styles.rowBetween}>
          <Text style={styles.heading}>Order Shipped</Text>
          <Text style={styles.nowStyle}>Now</Text>
        </View>
        <Text style={styles.define}>
          Your order is out for delivery. We’ll notify you once it arrives.
        </Text>
      </View>

      <View style={styles.box1}>
        <View style={styles.rowBetween}>
          <Text style={styles.heading}>Order Delivered</Text>
          <Text style={styles.nowStyle}>Now</Text>
        </View>
        <Text style={styles.define}>
          Your order has been delivered successfully. Enjoy your new mobile!
        </Text>
      </View>
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
    height: hp(8),
    borderRadius: wp(2.25),
    marginBottom: hp(1.2),
    paddingHorizontal: 10,
    paddingVertical: hp(1),
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xs2,
    marginTop: hp(0.3),
    color: Colors.black,
  },
  nowStyle: {
    marginTop: hp(0.3),
    fontSize: hp(1.2),
    color: Colors.graay,
    fontFamily: Fonts.regular,
  },
  define: {
    marginTop: 2,
    fontSize: Fontsize.xm,
    width: wp(74),
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
});
