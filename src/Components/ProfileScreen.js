import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../Constants/Responsive';
import CustomInputText from './CustomInputText';
import { Images } from '../Assets';
import Btn from './Btn';
import { Colors } from '../Constants/Colors';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation()
  const [profileImage, setProfileImage] = useState(null);

  // 📌 Simple Image Picker
  const openImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setProfileImage(response.assets[0].uri);
        }
      },
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={openImagePicker} style={styles.imgMain}>
        <Image
          source={profileImage ? { uri: profileImage } : Images.profile}
          style={styles.ImageStyle}
          resizeMode="cover" />
        <Image
          source={Images.editProfile}
          style={styles.editProfile}
          resizeMode="cover" />
      </TouchableOpacity>

      {/* Input Fields */}
      <View style={styles.container}>
        <CustomInputText
          placeholder="Enter Your Name"
          icon={Images.personName}
          placeholderTextColor="#9F9F9F"
        />
        <CustomInputText
          placeholder="Enter Your Email"
          icon={Images.email}
          placeholderTextColor="#9F9F9F"
          keyboardType="email-address"
        />
        <CustomInputText
          placeholder="Enter Your Phone Number"
          icon={Images.phone}
          placeholderTextColor="#9F9F9F"
          keyboardType="numeric"
        />

        {/* Update Button */}
        <Btn
          title="Update"
          btnContainer={{ backgroundColor: Colors.primary }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imgMain: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  ImageStyle: {
    marginTop: hp('4%'),
    width: wp('28%'),
    height: wp('28%'),
    borderRadius: wp(15),
  },
  editProfile: {
    position: 'absolute',
    width: wp(8),
    height: wp(8),
    marginLeft: wp(20),
    marginBottom: hp(1)
  },
  container: {
    marginTop: hp('4.9'),
  },
});
