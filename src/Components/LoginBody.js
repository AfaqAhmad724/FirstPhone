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
import ButtonGoogleApple from './ButtonGoogleApple';
import { Colors } from '../Constants/Colors';

const LoginBody = props => {
  const [yes, setYes] = useState(false);

  return (
    <View style={styles.backgroundStyle}>
      <AuthHeader label="Login" />
      <View style={styles.innerContainer}>
        <Text style={styles.setHeading}>{props?.status}</Text>
        <Text style={styles.smallText}>{props?.small}</Text>
        <Image
          source={require('../Assets/Images/Logo.png')}
          style={styles.firstPhoneStyle}
        />

        <CustomInputText
          placeholder="Email"
          icon={Images.email}
          placeholderTextColor={Colors.secondary}
          keyboardType="email-address"
        />
        <CustomInputText
          placeholder="Password"
          icon={Images.password}
          placeholderTextColor={Colors.secondary}
          isPassword={true}
        />

        <View style={styles.rememberContainer}>
          <View style={styles.rememberRow}>
            <TouchableOpacity onPress={() => setYes(!yes)}>
              <MaterialIcons
                name={yes ? 'check-box' : 'check-box-outline-blank'}
                size={wp(4.5)}
                color={Colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.remember}>{props?.remember}</Text>
          </View>

          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>{props?.forgot}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signIn}>
          <Text style={styles.buttonText}>{props?.buttontext}</Text>
        </TouchableOpacity>

        <LoginDivider loginwith="Or login with" />

        <ButtonGoogleApple google="Google" apple="Apple" />

        <Text style={styles.accountText}>
          {props?.account} <Text style={styles.loginText}>{props?.signup}</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginBody;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    overflow: 'hidden',
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor: Colors?.primary,
  },
  setHeading: {
    fontFamily: Fonts.bold,
    marginLeft: wp(5.5),
    marginTop: hp(2.5),
    fontSize: wp(5.1),
  },
  smallText: {
    marginLeft: wp(5.7),
    fontSize: wp(2.5),
    fontFamily: Fonts.medium,
  },
  firstPhoneStyle: {
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
  forgotText: {
    color: Colors.primary,
    fontSize: Fontsize.xs,
    fontFamily: Fonts.medium,
  },
  signIn: {
    backgroundColor: Colors.primary,
    marginTop: hp(2.85),
    marginHorizontal: wp(6),
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
    marginBottom: hp(1.2),
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.bg,
    fontSize: wp(3.5),
    fontFamily: Fonts.medium,
  },
  accountText: {
    textAlign: 'center',
    fontSize: wp(3.2),
    color: 'black',
    marginTop: hp(6),
    fontFamily: Fonts.regular,
  },
  loginText: {
    fontFamily: Fonts.regular,
    color: Colors.primary,
    fontSize: wp(3.2),
  },
});
