import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { Colors } from '../Constants/Colors';
import { hp, wp } from '../Constants/Responsive';

const ChooseShippingComponent = props => {
  return (
    <View>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>{props?.heading}</Text>

        <View style={styles.direction}>
          <Image
            source={require('../Assets/Images/location.png')}
            style={styles.imagestyle}
          />
          <Text style={styles.addressText}>{props?.addressText}</Text>
        </View>
        <View style={styles.define}>
          <Text style={styles.textStyle}>{props?.status}</Text>
          <Image source={require('../Assets/Images/Delete.png')} />
        </View>
      </View>
    </View>
  );
};

export default ChooseShippingComponent;

const styles = StyleSheet.create({
  header: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.m,
    color: Colors.black,
    marginTop: hp(4.5),
  },
  imagestyle: {
    width: wp(4.5),
    height: hp(2.6),
    marginLeft: wp(1.6),
    resizeMode: 'contain',
  },
  direction: {
    flexDirection: 'row',
    marginTop: wp(4.3),
  },
  addressText: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
    fontSize: Fontsize.s,
    marginLeft: wp(1.8),
  },
  innerContainer: {
    marginLeft: wp(4.7),
  },
  textStyle: {
    fontFamily: Fonts.regular,
    fontSize: wp(3.2),
    marginLeft: wp(7.5),
    color: Colors.primary,
    width: wp(56),
  },
});
