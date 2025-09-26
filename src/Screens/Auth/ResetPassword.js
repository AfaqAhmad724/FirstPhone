import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import { MyStyling } from '../../Constants/Styling';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import CustomInputText from '../../Components/CustomInputText';
import { Images } from '../../Assets';
import Btn from '../../Components/Btn';
import * as Progress from 'react-native-progress';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  digitRegex,
  lowercase,
  specialCharRegex,
  uppercase,
} from '../../Constants/Regex';

const ResetPassword = ({ navigation }) => {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    passwordError: '',
    confirmPasswordError: '',
  });

  const [strength, setStrength] = useState({
    progress: 0,
    label: '',
    color: Colors.red,
  });

  const checkPasswordStrength = password => {
    if (!password) {
      setStrength({ progress: 0, label: '', color: Colors.red });
      return;
    }
    const hasLower = lowercase.test(password);
    const hasUpper = uppercase.test(password);
    const hasNumber = digitRegex.test(password);
    const hasSymbol = specialCharRegex.test(password);

    let score = 0;
    if (hasLower) score++;
    if (hasUpper) score++;
    if (hasNumber) score++;
    if (hasSymbol) score++;

    if (password.length < 8) {
      setStrength({
        progress: 0.25,
        label: 'Weak Password',
        color: Colors.red,
      });
    } else if (score >= 2 && score < 4) {
      setStrength({
        progress: 0.5,
        label: 'Medium Password',
        color: Colors.brightYellow,
      });
    } else if (score === 4) {
      setStrength({
        progress: 1,
        label: 'Strong Password',
        color: Colors.primary,
      });
    } else {
      setStrength({
        progress: 0.25,
        label: 'Weak Password',
        color: Colors.red,
      });
    }
  };

  const handleContinue = () => {
    if (!form.password) {
      setError({ ...error, passwordError: 'Please enter password' });
    } else if (form.password.length < 8) {
      setError({
        ...error,
        passwordError: 'Password must be at least 8 characters',
      });
    } else if (!lowercase.test(form.password)) {
      setError({
        ...error,
        passwordError: 'Password must contain at least one lowercase letter',
      });
    } else if (!uppercase.test(form.password)) {
      setError({
        ...error,
        passwordError: 'Password must contain at least one uppercase letter',
      });
    } else if (!digitRegex.test(form.password)) {
      setError({
        ...error,
        passwordError: 'Password must contain at least one number',
      });
    } else if (!specialCharRegex.test(form.password)) {
      setError({
        ...error,
        passwordError: 'Password must contain at least one special character',
      });
    } else if (!form.confirmPassword) {
      setError({
        ...error,
        confirmPasswordError: 'Please enter confirm password',
      });
    } else if (form.confirmPassword !== form.password) {
      setError({ ...error, confirmPasswordError: 'Passwords do not match' });
    } else {
      setError({ passwordError: '', confirmPasswordError: '' });
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={MyStyling.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
      <PasswordHeader header="Create Password" islogged="Set New Password" />

      <Text style={styles.isSetPassword}>Set New Password</Text>
      <Text style={styles.define}>
        8-16 characters, lowercase/uppercase letters, digits and symbols with at
        least three kinds of them contained.
      </Text>

      <CustomInputText
        placeholder="Enter password"
        style={styles.emailstyle}
        icon={Images.password}
        placeholderTextColor={Colors.mediumGrey}
        isPassword={true}
        value={form.password}
        onChangeText={text => {
          setForm({ ...form, password: text });
          setError({ ...error, passwordError: '' });
          checkPasswordStrength(text);
        }}
        error={error.passwordError}
      />

      <View style={styles.progressBox}>
        <Progress.Bar
          progress={strength.progress}
          width={wp(90)}
          height={wp(2)}
          color={strength.color}
          unfilledColor="#E0E0E0"
          borderRadius={50}
          borderWidth={0}
        />
        <Text style={[styles.strengthText, { color: strength.color }]}>
          {strength.label}
        </Text>
      </View>

      <CustomInputText
        placeholder="Enter confirm password"
        style={styles.emailstyle}
        icon={Images.password}
        placeholderTextColor={Colors.mediumGrey}
        isPassword={true}
        value={form.confirmPassword}
        onChangeText={text => {
          setForm({ ...form, confirmPassword: text });
          setError({ ...error, confirmPasswordError: '' });
        }}
        error={error.confirmPasswordError}
      />

      <View style={styles.btnbox}>
        <Btn
          title="Continue"
          bgColor={Colors.black}
          btnContainer={{ backgroundColor: Colors.secondary }}
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  isSetPassword: {
    color: Colors.logblack,
    fontSize: wp(5.3),
    fontFamily: Fonts.medium,
    marginTop: hp(2.7),
  },
  define: {
    fontSize: Fontsize.s,
    width: wp(88),
    fontFamily: Fonts.regular,
    color: Colors.mediumGrey,
  },
  progressBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(0.7),
  },
  strengthText: {
    fontSize: Fontsize.xm,
    fontFamily: Fonts.medium,
    alignSelf: 'flex-end',
  },
  erroringStyles: {
    color: Colors.red,
    fontSize: Fontsize.xs2,
    marginTop: hp(0.5),
    fontFamily: Fonts.medium,
  },
});
