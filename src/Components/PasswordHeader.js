import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Fonts } from '../Constants/Fonts';
import { wp, hp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';

const PasswordHeader = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.vectorStyle}>
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
    marginTop: hp(3.1),
  },
  vectorStyle: {
    width: wp(7.0),
    height: wp(7),
    backgroundColor: Colors.primary,
    borderRadius: wp(2.3),
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: wp(5.0),
  },
  arrowIcon: {
    width: wp(3.8),
    height: wp(3.8),
  },
  setHeading: {
    fontFamily: Fonts.semibold,
    fontSize: wp(4.5),
    color: Colors.black,
  },
  space: {
    flex: 0.2,
  },
});
