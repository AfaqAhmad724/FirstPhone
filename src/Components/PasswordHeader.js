import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Fonts } from '../Constants/Fonts';
import { wp, hp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';
import { Fontsize } from '../Constants/Fontsize';
import { useNavigation } from '@react-navigation/native';

const PasswordHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[styles.vectorStyle, props.iconStyle]}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={Images.arrowleft}
          style={styles.arrowIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.setHeading}>{props?.header}</Text>
      <View style={styles.space}></View>
    </View>
  );
};

export default PasswordHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(4),
    marginLeft: 0.1,
  },
  vectorStyle: {
    width: wp(7.0),
    height: wp(7),
    backgroundColor: Colors.primary,
    borderRadius: wp(2.1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: wp(3.8),
    height: hp(2.2),
  },
  setHeading: {
    fontFamily: Fonts.semibold,
    color: Colors.black,
    fontSize: Fontsize.m,
  },
  space: {
    width: wp(10),
  },
});
