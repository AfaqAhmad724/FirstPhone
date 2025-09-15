import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { Colors } from '../Constants/Colors';
import { hp, wp } from '../Constants/Responsive';

const DeliveryMethodComponent = ({ item }) => {
  return (
    <View>
      <View style={styles.optionBox}>
        <View style={styles.iconContainerGray}>
          <Image
            source={item.icon}
            style={[
              styles.imageStyle,

              item.subtitle === 'Secure online payment' && {
                width: wp(6.5),
                height: wp(6.5),
              },
            ]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.paystyleBlack,
              item.subtitle === 'Secure online payment' && {
                color: Colors.primary,
              },
            ]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              styles.statusStyleGray,
              item.subtitle === 'Secure online payment' && {
                color: Colors.primary,
              },
            ]}
          >
            {item.subtitle}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.borderstyle,
          item.subtitle === 'Secure online payment'
            ? { borderBottomColor: Colors.primary, opacity: 0.6 }
            : { borderBottomColor: Colors.shadowgray, opacity: 0.2 },
        ]}
      />
    </View>
  );
};

export default DeliveryMethodComponent;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: hp(10),
    marginLeft: wp(5.3),
    marginRight: wp(5.3),
  },
  heading: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.m,
    marginBottom: hp(0.5),
    color: Colors.black,
  },
  define: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.fz,
    color: Colors.shadowgray,
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.6),
  },
  iconContainerGray: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: '#0000000D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: wp(7),
    height: wp(7),
  },
  textContainer: {
    marginLeft: wp(3),
    flex: 1,
  },
  paystyleBlack: {
    fontFamily: Fonts.medium,
    fontSize: wp(3.5),
    color: Colors.black,
  },
  statusStyleGray: {
    color: Colors.shadowgray,
    fontFamily: Fonts.regular,
    fontSize: wp(2.8),
  },
  borderstyle: {
    borderBottomWidth: 1,
    marginLeft: wp(0),
    marginVertical: hp(1),
  },
});
