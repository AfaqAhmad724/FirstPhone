import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';
import Btn from './Btn';

const OrderPlaced = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            source={require('../Assets/Images/greencircle.png')}
            style={styles.OrderPlaced}
          />
          <Image
            source={require('../Assets/Images/tick.png')}
            style={styles.innerImage}
          />
        </View>

        <Text style={styles.heading}>{props?.order}</Text>

        <Text style={styles.subText}>{props?.define}</Text>
        <Btn
          title="Back To Home"
          bgColor={Colors.secondary}
          btnContainer={{ backgroundColor: Colors.primary }}
        />
      </View>
    </ScrollView>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp(32),
  },

  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  OrderPlaced: {
    marginBottom: hp(1),
  },

  innerImage: {
    position: 'absolute',
    width: wp(15),
    height: wp(15),
    resizeMode: 'contain',
  },

  heading: {
    marginTop: hp(2),
    marginBottom: hp(1),
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.fs,
    textAlign: 'center',
    color: Colors.black,
  },

  subText: {
    textAlign: 'center',
    fontSize: 12.33,
    fontFamily: Fonts.medium,
    color: Colors.eyecolor,
    marginBottom: hp(17),
    width: wp(88),
  },

  btnText: {
    color: Colors.bg,
    fontSize: Fontsize.fm,
    fontFamily: Fonts.medium,
  },
});
