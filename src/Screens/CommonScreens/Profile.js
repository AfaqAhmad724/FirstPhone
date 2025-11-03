import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Fonts } from '../../Constants/Fonts';
import { hp, wp } from '../../Constants/Responsive';
import { Colors } from '../../Constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileComponent from '../../Components/ProfileComponent';
import { Images } from '../../Assets';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import MainHeader from '../../Components/MainHeader';
import { MyStyling } from '../../Constants/Styling';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigate } from '../../Navigations/RootNavigation';
import { useSelector } from 'react-redux';
import Api from '../Services/Api_Services';
import Config from '../Services/Config';

const Profile = () => {
  const userRole = useSelector(state => state?.ROLE?.userData);
  const navigation = useNavigation();

  const [profileData, setProfileData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      getPrfileData();
    }, []),
  );
  const getPrfileData = () => {
    setIsLoading(true);
    Api.getProfile()
      .then(res => {
        if (res?.status == 200) {
          console.log('@@@res in profile', res?.data?.data);
          setProfileData(res?.data?.data);
        }
      })
      .catch(error => {
        console.log(
          'getProfile Error',
          JSON.stringify(error.response?.data?.message),
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(5) }}
      >
        <MainHeader title={'Profile'} />
        <View style={styles.topstyle}>
          <Text style={styles.accountStyle}>Account</Text>

          <TouchableOpacity
            style={styles.box1}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Image
              source={
                profileData?.image
                  ? { uri: Config.domain + profileData?.image } // ✅ when image exists from server
                  : Images.profile // ✅ fallback image
              }
              style={styles.imageStyle}
            />

            <Text style={styles.nameStyle} numberOfLines={1}>
              {profileData?.name || 'User'}
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={wp(7)}
              color="black"
              style={styles.iconstyles}
            />
          </TouchableOpacity>

          <View style={styles.divider}></View>
          <Text style={styles.optionStyle}>More Options</Text>
        </View>

        <ProfileComponent
          icon={Images.notification}
          title="Notifications"
          iconColor={Colors.primary}
          onPress={() => navigation.navigate('Notifications')}
        />
        <ProfileComponent
          title="Change Password"
          icon={Images.changePswd}
          onPress={() =>
            navigation.navigate('AuthNavigation', { screen: 'ResetPassword' })
          }
        />
        <ProfileComponent
          icon={Images.orders}
          title="My Orders"
          iconColor={Colors.primary}
          onPress={() => navigation.navigate('MyOrders')}
        />
        <ProfileComponent
          icon={Images.contactUs}
          title="Contact US"
          iconColor={Colors.primary}
        />
        <ProfileComponent
          icon={Images.FAQ}
          title="FAQ's"
          iconColor={Colors.primary}
        />

        <ProfileComponent
          icon={Images.privacyPolicy}
          title="Privacy Policy"
          iconColor={Colors.primary}
        />
        <ProfileComponent
          icon={Images.termsAndCondition}
          title="Terms and Conditions"
          iconColor={Colors.primary}
        />
        <ProfileComponent
          icon={Images.prson}
          title="Delete Account"
          iconColor={Colors.primary}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  topstyle: {
    marginTop: hp(4),
  },
  accountStyle: {
    fontFamily: Fonts.semibold,
    fontSize: wp(4.3),
    color: Colors.black,
    marginBottom: hp(0.5),
  },
  box1: {
    width: wp(90),
    backgroundColor: '#F8F7F7',
    paddingVertical: hp(0.4),
    borderRadius: wp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(1),
    marginBottom: hp(1),
  },
  imageStyle: {
    width: wp(13),
    height: wp(13),
    borderRadius: wp(7),
    resizeMode: 'contain',
  },
  nameStyle: {
    flex: 1,
    fontFamily: Fonts.semibold,
    fontSize: wp(3.79),
    marginLeft: wp(3),
    color: Colors.black,
  },

  divider: {
    borderBottomWidth: 0.7,
    borderBottomColor: Colors.mediumGrey,
    marginVertical: hp(1),
  },
  optionStyle: {
    fontFamily: Fonts.semibold,
    marginTop: wp(1.5),
    color: Colors.black,
  },
  iconstyles: {
    marginRight: 10,
  },
});
