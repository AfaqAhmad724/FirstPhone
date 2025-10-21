import { StatusBar, StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import Btn from '../../Components/Btn';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInputText from '../../Components/CustomInputText';
import { MyStyling } from '../../Constants/Styling';
import Toast from 'react-native-simple-toast';
import Api from '../Services/Api_Services';

const ForgotPassword = ({ navigation }) => {
  const [form, setForm] = useState({ email: '' });
  const [errors, setErrors] = useState({ emailError: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async () => {
    if (!form.email) {
      setErrors({ ...errors, emailError: 'Please enter email' });
      return;
    }

    setErrors({ ...errors, emailError: '' });
    setIsLoading(true);

    const formData = new FormData();
    formData.append('email', form.email);
    formData.append('type', 'customer');

    try {
      const res = await Api.forgotPassword(formData);
      console.log('@forgotPasswordData', res?.data);

      if (res?.data?.status === 'success') {
        Toast.show(res?.data?.message || 'Verification code sent', Toast.SHORT);
        navigation.navigate('Verificationbody', { email: form.email });
      } else {
        Toast.show(res?.data?.message || 'Something went wrong', Toast.SHORT);
      }
    } catch (error) {
      console.log('ForgotPassword API Error:', error?.response?.data || error);
      Toast.show('Error occurred while sending code', Toast.SHORT);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={MyStyling.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />

      <PasswordHeader header="Forgot Password" islogged="Cannot log in? " />

      <Text style={styles.isLogged}>Cannot log In?</Text>

      <Text style={styles.define}>
        Enter your email and we will send a verification code
      </Text>

      <CustomInputText
        placeholder="Email"
        placeholderTextColor={Colors.mediumGrey}
        keyboardType="email-address"
        value={form.email}
        onChangeText={text => {
          setForm({ ...form, email: text });
          setErrors({ ...errors, emailError: '' });
        }}
        error={errors.emailError}
      />

      <View style={{ marginTop: 11 }}>
        <Btn
          title={isLoading ? 'Sending...' : 'Send Verification Code'}
          bgColor={Colors.secondary}
          btnContainer={{ backgroundColor: Colors.secondary }}
          onPress={handleSendCode}
          loading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  isLogged: {
    color: Colors.logblack,
    fontSize: wp(5.6),
    fontFamily: Fonts.medium,
    marginTop: hp(2.7),
  },
  define: {
    color: Colors.emailcolor,
    fontSize: wp(3.4),
    width: wp(82),
    fontFamily: Fonts.regular,
  },
});
