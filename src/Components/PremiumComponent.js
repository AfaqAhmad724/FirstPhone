import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Image } from 'react-native-elements';
import { Fonts } from '../Constants/Fonts';

const PremiumComponent = ({ img, title, subtitle, days }) => {
  return (
    <View style={styles.box}>
      <Image source={img} style={styles.crown} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Text style={styles.days}>{days} Days Left</Text>
    </View>
  );
};

export default PremiumComponent;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(88.7),
    height: hp(10),
    backgroundColor: Colors.premiumgrey,
    borderRadius: wp(3.4),
    marginTop: hp(6),
    marginLeft: wp(0.6),
  },

  crown: {
    width: wp(14),
    height: hp(8),
    resizeMode: 'contain',
    marginLeft: wp(3),
    marginBottom: hp(1),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: wp(5.2),
    color: Colors.bg,
    fontFamily: Fonts.medium,
    lineHeight: hp(2.4),
  },
  subtitle: {
    fontSize: wp(3),
    color: Colors.bg,
    fontFamily: Fonts.regular,
    marginTop: hp(0.1),
  },
  days: {
    fontSize: wp(3),
    color: Colors.bg,
    fontFamily: Fonts.regular,
    marginBottom: wp(12),
    marginRight: wp(3),
  },
});
