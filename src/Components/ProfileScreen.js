import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../Constants/Responsive';
import CustomInputText from './CustomInputText';
import { Images } from '../Assets';
import Btn from './Btn';
import { Colors } from '../Constants/Colors';
import { launchImageLibrary } from 'react-native-image-picker';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Strings } from '../Constants/Strings';
import RepairingService from './RepairingService';
import ShopPics from './ShopPics';
import { Fontsize } from '../Constants/Fontsize';
import { Fonts } from '../Constants/Fonts';
import CNICPics from './CNICPics';
import Toast from 'react-native-simple-toast'; // ✅ Toast import
import Api from '../Screens/Services/Api_Services';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const userRole = useSelector(state => state?.ROLE?.userData);
  const userData = useSelector(state => state?.AUTH?.userData);

  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState(userData?.name || '');
  const [email, setEmail] = useState(userData?.email || '');
  const [phone, setPhone] = useState(userData?.phone || '');
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Fetch profile on focus
  useFocusEffect(
    React.useCallback(() => {
      getProfileData();
    }, []),
  );

  const getProfileData = () => {
    setIsLoading(true);
    Api.getProfile()
      .then(res => {
        if (res?.status === 200) {
          console.log('✅ Profile Data:', res?.data?.data);
          const data = res?.data?.data;
          setName(data?.name || '');
          setEmail(data?.email || '');
          setPhone(data?.phone || '');
          setProfileImage(data?.image || null);
        }
      })
      .catch(error => {
        console.log('❌ getProfile Error:', error?.response?.data?.message);
      })
      .finally(() => setIsLoading(false));
  };

  // ✅ Open Image Picker
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
          setProfileImage(response.assets[0]);
        }
      },
    );
  };

  // ✅ Update Profile API Call
  const handleUpdateProfile = async () => {
    if (!name || !email || !phone) {
      Toast.show('Please fill all fields', Toast.SHORT);
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('type', userRole || 'customer');

      if (profileImage) {
        formData.append('image', {
          uri: profileImage,
          type: profileImage.type || 'image/jpeg',
          name: profileImage.fileName || 'profile.jpg',
        });
      }

      console.log('📤 Sending FormData:', formData);

      const res = await Api.updateProfile(formData);
      console.log('✅ Profile Updated:', res?.data);

      Toast.show('Profile updated successfully!', Toast.SHORT);
      navigation.goBack();
    } catch (error) {
      console.log('❌ Update Error:', error?.response?.data);
      Toast.show('Failed to update profile', Toast.SHORT);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      {/* Profile Image */}
      <TouchableOpacity onPress={openImagePicker} style={styles.imgMain}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : profileImage
              ? { uri: profileImage }
              : userRole === 'customer'
              ? Images.profile
              : Images.shopProfile
          }
          style={styles.ImageStyle}
          resizeMode="cover"
        />
        <Image
          source={Images.editProfile}
          style={styles.editProfile}
          resizeMode="cover"
        />
      </TouchableOpacity>

      {/* Input Fields */}
      <View style={styles.container}>
        <CustomInputText
          placeholder="Enter Your Name"
          icon={Images.personName}
          onChangeText={setName}
          value={name}
          placeholderTextColor="#9F9F9F"
        />
        <CustomInputText
          placeholder="Enter Your Email"
          icon={Images.email}
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="#9F9F9F"
          keyboardType="email-address"
        />
        <CustomInputText
          placeholder="Enter Your Phone Number"
          icon={Images.phone}
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor="#9F9F9F"
          keyboardType="numeric"
        />

        {/* Seller Section */}
        {userRole === 'Seller' && (
          <View>
            <CustomInputText
              placeholder="Enter Location"
              icon={Images.colorLocation}
            />

            <RepairingService
              radioContainer={{ marginTop: hp(2) }}
              radioButtonInner={styles.radioButtonInner}
              radioButtonOuter={styles.radioButtonOuter}
              titleStyle={styles.titleStyle}
              radioChecked={true}
              title={Strings.servicesText}
            />

            <Text style={styles.titleText}>{Strings.shopPics}</Text>
            <View style={styles.shopPics}>
              <ShopPics src={Images.shopImg} />
              <ShopPics src={Images.shopImg1} />
              <ShopPics src={Images.shopImg1} />
            </View>

            <Text style={[styles.titleText, { marginTop: hp(2) }]}>
              {Strings.CNICText}
            </Text>
            <View style={styles.shopPics}>
              <CNICPics src={Images.FrontCNIC} />
              <CNICPics src={Images.BackCNIC} />
            </View>
          </View>
        )}

        {/* Update Button */}
        <Btn
          title={loading ? 'Updating...' : 'Update'}
          btnContainer={{
            backgroundColor: loading ? Colors.lightgray : Colors.primary,
            marginTop: hp(3),
          }}
          disabled={loading}
          onPress={handleUpdateProfile}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imgMain: { alignItems: 'center', justifyContent: 'flex-end' },
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
    marginBottom: hp(1),
  },
  container: { marginTop: hp('4.9') },
  shopPics: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    opacity: 0.8,
    marginTop: hp(1.5),
    fontSize: Fontsize.sm,
    fontFamily: Fonts.regular,
    color: Colors.gray,
  },
});
