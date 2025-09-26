import { StatusBar, StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import Btn from '../../Components/Btn';
import { Images } from '../../Assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInputText from '../../Components/CustomInputText';
import { MyStyling } from '../../Constants/Styling';
import { emailRegex } from '../../Constants/Regex';

const ForgotPassword = ({ navigation }) => {
  const [form, setForm] = useState({
    email: '',
  });

  const [errors, setErrors] = useState({
    emailError: '',
  });

  const handleSendCode = () => {
    if (!form.email) {
      setErrors({ ...errors, emailError: 'Please enter email' });
    } else if (!emailRegex.test(form.email)) {
      setErrors({ ...errors, emailError: 'Please enter a valid email' });
    } else {
      setErrors({ ...errors, emailError: '' });
      navigation.navigate('Verificationbody');
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
        icon={Images.email}
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
          title="Send Verification Code"
          bgColor={Colors.secondary}
          btnContainer={{ backgroundColor: Colors.secondary }}
          onPress={handleSendCode}
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
