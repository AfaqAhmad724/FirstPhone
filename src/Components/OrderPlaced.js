import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';
import Btn from './Btn';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Strings } from '../Constants/Strings';
import { useSelector } from 'react-redux';

const OrderPlaced = props => {
  const navigation = useNavigation()
  const userRole = useSelector((state) => state?.ROLE?.userData)
  const [data, setData] = useState({ title: '', description: '' })

  useEffect(() => {
    handleContent()
  }, [])

  const handleContent = () => {
    if (props?.type == 'order') {
      setData({
        title: Strings.orderPlacedText,
        description: Strings.orderPlacedDescription
      })
    }
    else if (props?.type == 'listing') {
      setData({
        title: Strings.listingText,
        description: Strings.listingDescription
      })
    }
    else {
      return null
    }
  }

  const handleNavigation = () => {
    {
      userRole == 'Customer' ?
        navigation.reset({
          index: 0,
          routes: [{ name: 'FlowNavigation' }],
        })
        :
        navigation.reset({
          index: 0,
          routes: [{ name: 'SellerFlowNavigation' }],
        })
    }
  }
  return (
    <View style={styles.container}>
      <View>

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

        <Text style={styles.heading}>{data?.title}</Text>

        <Text style={styles.subText}>{data?.description}</Text>
      </View>

      <Btn
        title="Back To Home"
        bgColor={Colors.secondary}
        btnContainer={{ backgroundColor: Colors.primary, bottom: hp(10) }}
        onPress={() => handleNavigation()}
      />
    </View>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp(32),
    justifyContent: 'space-between'
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
    marginBottom: hp(.4),
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.ml,
    textAlign: 'center',
    color: Colors.black,
  },

  subText: {
    textAlign: 'center',
    fontSize: Fontsize.xs1,
    fontFamily: Fonts.regular,
    color: Colors.eyecolor,
  },

  btnText: {
    color: Colors.bg,
    fontSize: Fontsize.fm,
    fontFamily: Fonts.medium,
  },
});
