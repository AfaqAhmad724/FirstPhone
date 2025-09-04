import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AuthHeader from './AuthHeader';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Image } from 'react-native';

const LoginBody = props => {
  return (
    <View style={styles.backgroundstyle}>
      <AuthHeader label="Login" />

      <View style={styles.innerContainer}>
        <Text style={styles.setheading}>{props?.status}</Text>
        <Text style={styles.smalltext}>{props?.small}</Text>
        {/* <Image
          source={require('../Assets/Images/Logo.png')}
          style={styles.firstphonestyle}
        /> */}
      </View>
    </View>
  );
};

export default LoginBody;

const styles = StyleSheet.create({
  backgroundstyle: {
    flex: 1,
    backgroundColor: '#4AB95A',
  },
  innerContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    paddingBottom: hp(2),
  },
  setheading: {
    fontFamily: Fonts.bold,
    marginLeft: wp(5.5),
    marginTop: hp(2.5),
    fontSize: wp(5.1),
  },
  smalltext: {
    marginLeft: wp(5.7),
    fontSize: wp(2.6),
    fontFamily: Fonts.medium,
    color: 'black',
    backgroundColor: 'red',
  },
  firstphonestyle: {
    width: wp(72),
    height: hp(15),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: wp(1.1),
    marginTop: hp(0.7),
  },
});
