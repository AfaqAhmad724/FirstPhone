import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import CustomInputText from './CustomInputText';
import { Images } from '../Assets';
import Btn from './Btn';
import { Colors } from '../Constants/Colors';

const ProfileScreen = () => {
  return (
    <View>
      <Image
        source={Images.profile}
        style={styles.ImageStyle}
        resizeMode="contain"
      />

      <View style={styles.container}>
        <CustomInputText
          placeholder="Please enter your name"
          icon={Images.personName}
          placeholderTextColor="#9F9F9F"
        />
        <CustomInputText
          placeholder="Please enter your Email"
          icon={Images.email}
          placeholderTextColor="#9F9F9F"
          keyboardType="email-address"
        />
        <CustomInputText
          placeholder="Please enter your phone number"
          icon={Images.phone}
          placeholderTextColor="#9F9F9F"
          keyboardType="numeric"
        />
        <Btn
          title="Update"
          btnContainer={{ backgroundColor: Colors.primary }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  ImageStyle: {
    marginTop: hp('4%'),
    alignSelf: 'center',
    width: wp('28%'),
    height: hp('12%'),
  },
  container: {
    marginTop: hp('4.9'),
  },
});
