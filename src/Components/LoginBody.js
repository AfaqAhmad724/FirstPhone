import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import AuthHeader from './AuthHeader';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { colors } from 'react-native-elements';
import CustomInputText from './CustomInputText';
import { Images } from '../Assets';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Fontsize } from '../Constants/Fontsize';

const LoginBody = props => {
  const [yes, setYes] = useState(false);

  return (
    <View style={styles.backgroundstyle}>
      <AuthHeader label="Login" />

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

        {/* Remember + Forget Password Row */}
        <View style={styles.rememberContainer}>
          {/* Left side */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setYes(!yes)}>
              <MaterialIcons
                name={yes ? 'check-box' : 'check-box-outline-blank'}
                size={wp(4.5)}
                color="green"
                borderColor="lightgrey"
              />
            </TouchableOpacity>
            <Text style={styles.remember}>Remember Me</Text>
          </View>

          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.forgottext}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signin}>
          <Text style={styles.buttontext}>{props?.buttontext}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginBody;

const styles = StyleSheet.create({
  backgroundstyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {},
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
    marginRight: wp(1.1),
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
  remember: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xs,
    marginLeft: wp(1.6),
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
});
