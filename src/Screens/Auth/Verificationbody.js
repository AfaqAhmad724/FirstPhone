import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import CustomInputText from '../../Components/CustomInputText';
import Btn from '../../Components/Btn';
import { MyStyling } from '../../Constants/Styling';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import Api from '../Services/Api_Services';
import Toast from 'react-native-simple-toast';
import { Fontsize } from '../../Constants/Fontsize';

const Verificationbody = ({ navigation }) => {
  const route = useRoute();
  const email = route?.params?.email;

  const [form, setForm] = useState({ otp: '' });
  const [errors, setErrors] = useState({ otpError: '' });
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(50);
  const [resendEnabled, setResendEnabled] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleContinue = async () => {
    const otp = form.otp;

    if (!otp) {
      setErrors({ otpError: 'Please enter the OTP' });
      return;
    } else if (otp.length !== 4) {
      setErrors({ otpError: 'OTP must be 4 digits' });
      return;
    }

    setErrors({ otpError: '' });
    setLoading(true);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('otp', otp);
    formData.append('type', 'customer');

    try {
      const res = await Api.verifyOtp(formData);
      console.log('Verify OTP Response:', res?.data);

      const data = res?.data || res;
      if (res?.status === 200 && data?.status === 'success') {
        Toast.show(data?.message || 'OTP verified successfully!', Toast.SHORT);
        navigation.navigate('ResetPassword', { email });
      } else {
        Toast.show(data?.message || 'Invalid or expired OTP', Toast.LONG);
      }
    } catch (error) {
      console.log('OTP verification error:', error?.response?.data || error);
      Toast.show(
        error?.response?.data?.message || 'OTP verification failed',
        Toast.LONG,
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!resendEnabled) return;

    setResendEnabled(false);
    setTimer(50);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('type', 'customer');
    formData.append('otp', form.otp);

    try {
      const res = await Api.resendOtp(formData);
      console.log('Resend OTP Response:', res?.data);

      const data = res?.data || res;
      if (res?.status === 200 && data?.status === 'success') {
        Toast.show(data?.message || 'New OTP sent successfully!', Toast.SHORT);
      } else {
        Toast.show(data?.message || 'Failed to resend OTP', Toast.LONG);
      }
    } catch (error) {
      console.log('Resend OTP error:', error?.response?.data || error);
      Toast.show('Error while resending OTP', Toast.LONG);
    }
  };

  return (
    <SafeAreaView style={MyStyling.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
      <PasswordHeader header="Verification" islogged="Enter OTP" />

      <Text style={styles.isLogged}>Enter OTP</Text>
      <Text style={styles.define}>Sent OTP to {email}</Text>

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
          title={loading ? 'Verifying...' : 'Continue'}
          bgColor={form.otp.length > 0 ? Colors.primary : Colors.secondary}
          btnContainer={{
            backgroundColor:
              form.otp.length > 0 ? Colors.primary : Colors.secondary,
            opacity: form.otp.length > 0 ? 3 : 0.3,
          }}
          onPress={form.otp.length > 0 && !loading ? handleContinue : null}
          disabled={loading || form.otp.length === 0}
        />
      </View>

      <TouchableOpacity onPress={handleResend} disabled={!resendEnabled}>
        <Text style={[styles.resendColor, !resendEnabled && { opacity: 0.5 }]}>
          Resend (
          <Text style={{ color: Colors.verificationSend }}>{timer}</Text>)
        </Text>
      </TouchableOpacity>
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
    fontSize: wp(3.4),
    width: wp(82),
    fontFamily: Fonts.regular,
  },
  verificationStyle: {
    color: Colors.verificationColor,
    marginLeft: wp(2),
  },
  resendColor: {
    fontFamily: Fonts.regular,
    color: Colors.primary,
    fontSize: Fontsize.xs2,
    alignSelf: 'flex-end',
    marginTop: wp(3),
  },
});
