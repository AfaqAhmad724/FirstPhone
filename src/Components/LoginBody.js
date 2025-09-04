import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import AuthHeader from './AuthHeader';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import CustomInputText from './CustomInputText';
import { Images } from '../Assets';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Fontsize } from '../Constants/Fontsize';
import LoginDivider from './LoginDivider';

const LoginBody = props => {
  const [yes, setYes] = useState(false);

  return (
    <View style={styles.backgroundstyle}>
      {/* Green Header */}
      <AuthHeader label="Login" />

      {/* White rounded container */}
      <View style={styles.innerContainer}>
        <Text style={styles.setheading}>{props?.status}</Text>
        <Text style={styles.smalltext}>{props?.small}</Text>
        <Image
          source={require('../Assets/Images/Logo.png')}
          style={styles.firstphonestyle}
        />

        <CustomInputText
          placeholder="Email"
          icon={Images.email}
          placeholderTextColor="#9F9F9F"
          keyboardType="email-address"
        />
        <CustomInputText
          placeholder="Password"
          icon={Images.password}
          placeholderTextColor="#9F9F9F"
          isPassword={true}
        />

        <View style={styles.rememberContainer}>
          <View style={styles.rememberRow}>
            <TouchableOpacity onPress={() => setYes(!yes)}>
              <MaterialIcons
                name={yes ? 'check-box' : 'check-box-outline-blank'}
                size={wp(4.5)}
                color="green"
              />
            </TouchableOpacity>
            <Text style={styles.remember}>{props?.remember}</Text>
          </View>

          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgottext}>{props?.forgot}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signin}>
          <Text style={styles.buttontext}>{props?.buttontext}</Text>
        </TouchableOpacity>

        <LoginDivider loginwith="Or login with" />

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={[styles.googleButton, styles.socialButtonLeft]}
          >
            <Image
              source={require('../Assets/Images/google.png')}
              style={styles.googleimage}
            />
            <Text style={styles.googlestyle}>{props?.google}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.googleButton, styles.socialButtonRight]}
          >
            <Image
              source={require('../Assets/Images/Apple.png')}
              style={styles.googleimage}
            />
            <Text style={styles.googlestyle}>{props?.apple}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.accounttext}>
          {props?.account} <Text style={styles.logintext}>{props?.signup}</Text>
        </Text>
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
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
  },
  setheading: {
    fontFamily: Fonts.bold,
    marginLeft: wp(5.5),
    marginTop: hp(2.5),
    fontSize: wp(5.1),
  },
  smalltext: {
    marginLeft: wp(5.7),
    fontSize: wp(2.5),
    fontFamily: Fonts.medium,
    color: 'black',
  },
  firstphonestyle: {
    width: wp(72),
    height: hp(15),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp(0.7),
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(3.5),
    marginLeft: wp(6),
    marginHorizontal: wp(5.7),
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remember: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xs,
    marginLeft: wp(1.6),
    color: '#64748B',
  },
  forgotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgottext: {
    color: '#4AB95A',
    fontSize: Fontsize.xs,
    fontFamily: Fonts.medium,
  },
  signin: {
    backgroundColor: '#4AB95A',
    marginTop: hp(2.85),
    marginHorizontal: wp(6),
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
    marginBottom: hp(1.2),
  },
  buttontext: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: wp(3.5),
    fontFamily: Fonts.medium,
  },
  googleButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp('6.9%'),
    paddingVertical: hp('1.6%'),
    paddingHorizontal: wp('11.5%'),
    marginTop: hp('1.35%'),
    alignSelf: 'flex-start',
  },
  googleimage: {
    width: wp('5.5%'),
    marginRight: wp('2%'),
    resizeMode: 'contain',
  },
  googlestyle: {
    fontFamily: Fonts.medium,
    color: '#64748B',
    fontSize: wp(3.3),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(6),
    marginTop: hp('1.35%'),
  },
  socialButtonLeft: {
    marginRight: wp(2),
  },
  socialButtonRight: {
    marginLeft: wp(2),
  },
  accounttext: {
    textAlign: 'center',
    fontSize: wp(2.8),
    color: '#64748B',
    marginTop: hp(6),
    fontFamily: Fonts.regular,
  },
  logintext: {
    fontFamily: Fonts.regular,
    color: '#4AB95A',
    fontSize: wp(2.8),
  },
});
