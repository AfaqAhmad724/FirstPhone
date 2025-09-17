import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';

const ProfileComponent = ({ icon, title, iconColor, onPress }) => {
  return (
    <TouchableOpacity style={styles.box1} onPress={onPress}>
      {typeof icon === 'string' ? (
        <MaterialIcons
          name={icon}
          size={wp(6.5)}
          color={iconColor || Colors.black}
        />
      ) : (
        <Image
          source={icon}
          style={[styles.iconImage, { tintColor: Colors.primary }]}
          resizeMode="contain"
        />
      )}

      <Text style={styles.title}>{title}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={wp(7)}
        color={Colors.black}
      />
    </TouchableOpacity>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  box1: {
    width: wp(90),
    // height: wp(14.6),
    paddingVertical: hp(1.4),
    backgroundColor: '#F8F7F7',
    // backgroundColor: 'red',
    borderRadius: wp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginBottom: hp(1.5),
  },
  title: {
    flex: 1,
    marginLeft: wp(3),
    fontFamily: Fonts.semibold,
    fontSize: wp(3.8),
    color: Colors.black,
  },
  iconImage: {
    width: wp(6),
    height: wp(6),
  },
});