import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import RequestMobileComponent from '../../Components/RequestMobileComponent';
import { hp, wp } from '../../Constants/Responsive';
import { Images } from '../../Assets';
import { Fonts } from '../../Constants/Fonts';
import { Colors } from '../../Constants/Colors';
import { MyStyling } from '../../Constants/Styling';
import MainHeader from '../../Components/MainHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fontsize } from '../../Constants/Fontsize';

const RequestMobile = () => {
  return (
    <SafeAreaView style={MyStyling.container}>
      <MainHeader title={'Requested Mobile'} />
      <View style={styles.innercontainer}>
        <Text style={styles.heading}>Apple - iPhone 16 Pro</Text>
        <RequestMobileComponent icon={Images.price} />

        <View style={styles.inlineContainer}>
          <View style={styles.inlineItem}>
            <Image
              source={Images.storage}
              style={styles.inlineIcon}
              resizeMode="contain"
            />
            <Text style={styles.inlineText}>256GB</Text>
          </View>

          <View style={styles.inlineItem}>
            <Image
              source={Images.ram}
              style={styles.inlineIcon}
              resizeMode="contain"
            />
            <Text style={styles.inlineText}>256GB</Text>
          </View>

          <View style={styles.inlineItem}>
            <Image
              source={Images.color}
              style={styles.inlineIcon}
              resizeMode="contain"
            />
            <Text style={styles.inlineText}>Black</Text>
          </View>

          <View style={styles.inlineItem}>
            <Text>
              <Text style={styles.inlineCondition}>Condition:</Text>
              <Text style={styles.inlineText}> New</Text>
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.description}>
            The iPhone 17 Pro Max features a 6.9-inch Super Retina XDR{'\n'}
            display, A19 Bionic chip, triple-camera system, and all-day battery
            life with 5G.. <Text style={styles.readStyle}>Read More</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RequestMobile;

const styles = StyleSheet.create({
  // innercontainer: {
  //   marginTop: hp(5),
  //   borderWidth: 1,
  //   borderColor: '#EFEFEF',
  //   borderRadius: 5,
  //   elevation: 1
  // },
  innercontainer: {
    marginTop: hp(4),
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.5,
  },

  heading: {
    fontFamily: Fonts.semibold,
    color: '#4AB95A',
    fontSize: wp(3.64),
    marginLeft: wp(2.67),
    marginTop: hp(0.62),
  },
  inlineContainer: {
    flexDirection: 'row',
    marginLeft: wp(3),
  },
  inlineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(2),
  },
  inlineIcon: {
    width: wp(3.7),
    height: wp(3.2),
    marginRight: wp(0.5),
    tintColor: Colors.graylight,
    resizeMode: 'contain',
  },
  inlineText: {
    color: Colors.graylight,
    fontSize: wp(2.85),
    fontFamily: Fonts.regular,
    marginRight: 1.7,
  },
  inlineCondition: {
    color: '#797979',
    fontSize: wp(2.85),
    fontFamily: Fonts.medium,
  },
  descriptionText: {
    color: '#797979',
    fontFamily: Fonts.medium,
    fontSize: wp(3.35),
    marginLeft: wp(3.5),
    marginTop: hp(1.1),
  },
  description: {
    width: wp(83),
    marginLeft: wp(3.5),
    fontFamily: Fonts.regular,
    fontSize: wp(2.5),
    color: Colors.graylight,
    lineHeight: hp(2.5),
  },
  readStyle: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xu,
    color: Colors.graylight
  },
});
