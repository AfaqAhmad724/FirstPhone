import { StatusBar, StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import CustomInputText from '../../Components/CustomInputText';
import Btn from '../../Components/Btn';
import { Fontsize } from '../../Constants/Fontsize';
import { MyStyling } from '../../Constants/Styling';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import Api from '../Services/Api_Services';
import Toast from 'react-native-simple-toast';

const Verificationbody = ({ navigation }) => {
  const route = useRoute();
  const register = route?.params?.register;
  const userData = route?.params?.userData;

  const [form, setForm] = useState({
    otp: '',
  });

  const [errors, setErrors] = useState({
    otpError: '',
  });

  const handleContinue = () => {
    const otp = form.otp.trim();

    if (!otp) {
      setErrors({ ...errors, otpError: 'Please enter OTP' });
      return;
    } else if (otp.length !== 4) {
      setErrors({ ...errors, otpError: 'OTP must be 4 digits' });
      return;
    }

    setErrors({ ...errors, otpError: '' });

    // const payload = {
    //   email: userData?.email,
    //   otp: otp,
    //   name: userData?.name,
    //   type: 'customer',
    //   password: userData?.password,s
    //   phone: userData?.phone,
    // };

    // console.log('Verifying OTP with payload:', payload);
    // Api.verifyOtp(payload)
    const payload = {
      email: userData?.email,
      otp: otp,
      name: userData?.name,
      type: 'customer',
      password: userData?.password,
      phone: userData?.phone,
    };
    console.log(payload);
    Api.verifyOtp(payload)

      .then(res => {
        console.log('OTP verification response:', res?.data);
        if (res?.status === 200) {
          Toast.show(
            res?.data?.message || 'OTP verified successfully',
            Toast.SHORT,
          );
          navigation.navigate('Login');
        } else {
          Toast.show(
            res?.data?.message || 'OTP verification failed',
            Toast.SHORT,
          );
        }
      })
      .catch(error => {
        console.log('OTP verification error:', error?.response?.data);
        Toast.show(
          error?.response?.data?.message || 'OTP validation failed',
          Toast.SHORT,
        );
      });
  };

  return (
    <SafeAreaView style={MyStyling.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
      <PasswordHeader header="Verification" islogged="Enter OTP" />

      <Text style={styles.isLogged}>Enter OTP</Text>
      <Text style={styles.define}>Send OTP to {userData?.email}</Text>

      <CustomInputText
        placeholder="Enter OTP"
        style={styles.verificationStyle}
        placeholderTextColor={Colors.verificationColor}
        keyboardType="numeric"
        value={form.otp}
        maxLength={4}
        onChangeText={text => setForm({ ...form, otp: text })}
        error={errors.otpError}
      />

      <View style={{ marginTop: hp(1.9) }}>
        <Btn
          title="Continue"
          bgColor={Colors.secondary}
          btnContainer={{ backgroundColor: Colors.secondary }}
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
};

export default Verificationbody;

const styles = StyleSheet.create({
  isLogged: {
    color: Colors.logblack,
    fontSize: wp(5.4),
    fontFamily: Fonts.medium,
    marginTop: hp(2.7),
  },
  define: {
    color: Colors.black,
    fontSize: Fontsize.sm,
    width: wp(82),
    fontFamily: Fonts.regular,
  },
  verificationStyle: {
    color: Colors.verificationColor,
    marginLeft: wp(2),
  },
  resendWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: hp(2),
  },
  resendContainer: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
  number: {
    color: '#848A94',
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
  bracket: {
    color: 'green',
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
});
