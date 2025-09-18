import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../Constants/Responsive';
import CustomInputText from './CustomInputText';
import { Images } from '../Assets';
import Btn from './Btn';
import { Colors } from '../Constants/Colors';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Strings } from '../Constants/Strings';
import RepairingService from './RepairingService';
import UploadingBox from './UploadingBox';
import PickImage from './PickImage';
import { Text } from 'react-native';
import ShopPics from './ShopPics';
import { Fontsize } from '../Constants/Fontsize';
import { Fonts } from '../Constants/Fonts';
import CNICPics from './CNICPics';

const ProfileScreen = () => {
  const navigation = useNavigation()
  const userRole = useSelector((state) => state?.ROLE?.userData)
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
          source={profileImage ? { uri: profileImage } : userRole == 'Customer' ? Images.profile : Images.shopProfile}
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

        {userRole == 'Seller' &&

          <View>

            <CustomInputText
              placeholder="Enter Location"
              icon={Images.colorLocation} />

            <RepairingService radioContainer={{ marginTop: hp(2) }} radioButtonInner={styles.radioButtonInner} radioButtonOuter={styles.radioButtonOuter} titleStyle={styles.titleStyle} radioChecked={true} title={Strings.servicesText} />

            <Text style={styles.titleText}>{Strings.shopPics}</Text>

            <View style={styles.shopPics}>
              <ShopPics src={Images.shopImg} />
              <ShopPics src={Images.shopImg1} />
              <ShopPics src={Images.shopImg1} />
            </View>

            <Text style={[styles.titleText, { marginTop: hp(2) }]}>{Strings.CNICText}</Text>
            <View style={styles.shopPics}>
              <CNICPics src={Images.FrontCNIC} />
              <CNICPics src={Images.BackCNIC} />
            </View>




          </View>
        }

        {/* Update Button */}
        <Btn
          title="Update"
          btnContainer={{ backgroundColor: Colors.primary, marginTop: hp(3) }}
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
  shopPics: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    opacity: .8,
    marginTop: hp(1.5),
    fontSize: Fontsize.sm,
    fontFamily: Fonts.regular,
    color: Colors.gray,
  },
});
