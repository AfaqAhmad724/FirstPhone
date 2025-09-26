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

const Verificationbody = ({ navigation }) => {
  const route = useRoute();
  const register = route?.params?.register;

  const [form, setForm] = useState({
    otp: '',
  });

  const [errors, setErrors] = useState({
    otpError: '',
  });

  const handleContinue = () => {
    if (!form.otp) {
      setErrors({ ...errors, otpError: 'Please enter OTP' });
    } else if (form.otp.length < 4) {
      setErrors({ ...errors, otpError: 'OTP must be at least 4 digits' });
    } else {
      setErrors({ ...errors, otpError: '' });
      navigation.navigate(register ? 'Login' : 'ResetPassword');
    }
  };

  return (
    <SafeAreaView style={MyStyling.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
      <PasswordHeader header="Verification" islogged="Enter OTP" />

      <Text style={styles.isLogged}>Enter OTP</Text>
      <Text style={styles.define}>Send OTP to mail@gmail.com</Text>

      <CustomInputText
        placeholder="Enter OTP"
        style={styles.verificationStyle}
        placeholderTextColor={Colors.verificationColor}
        keyboardType="numeric"
        value={form.otp}
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

      <View style={styles.resendWrapper}>
        <Text style={styles.resendContainer}>
          Resend
          <Text style={styles.bracket}> (</Text>
          <Text style={styles.number}>50</Text>
          <Text style={styles.bracket}>)</Text>
        </Text>
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
