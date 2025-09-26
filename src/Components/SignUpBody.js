import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomInputText from './CustomInputText';
import CheckBox from './CheckBox';
import AuthHeader from './AuthHeader';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';
import Btn from './Btn';
import { Fontsize } from '../Constants/Fontsize';
import { navigate } from '../Navigations/RootNavigation';
import { Strings } from '../Constants/Strings';
import RepairingService from './RepairingService';
import UploadingBox from './UploadingBox';
import PickImage from './PickImage';
import { useSelector } from 'react-redux';
import * as Progress from 'react-native-progress';
import {
  emailRegex,
  nameRegex,
  phoneRegex,
  uppercase,
  lowercase,
  digitRegex,
  specialCharRegex,
} from '../Constants/Regex';

const SignUpBody = props => {
  const userRole = useSelector(state => state?.ROLE?.userData);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
  });

  const [strength, setStrength] = useState({
    progress: 0,
    label: '',
    color: Colors.red,
  });

  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    phoneError: '',
    passwordError: '',
    confirmPasswordError: '',
    locationError: '',
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

    let score = hasLower + hasUpper + hasNumber + hasSymbol;

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

  const handleSignUp = () => {
    if (!form.name) {
      setErrors({ ...errors, nameError: 'Please enter name' });
    } else if (!nameRegex.test(form.name)) {
      setErrors({ ...errors, nameError: 'Name must contain only letters' });
    } else if (!form.email) {
      setErrors({ ...errors, emailError: 'Please enter email' });
    } else if (!emailRegex.test(form.email)) {
      setErrors({ ...errors, emailError: 'Please enter a valid email' });
    } else if (!form.phone) {
      setErrors({ ...errors, phoneError: 'Please enter a phone number' });
    } else if (!phoneRegex.test(form.phone)) {
      setErrors({ ...errors, phoneError: 'Phone number must be 11 digits' });
    } else if (!form.password) {
      setErrors({ ...errors, passwordError: 'Please enter password' });
    } else if (form.password.length < 8) {
      setErrors({
        ...errors,
        passwordError: 'Password must be at least 8 characters',
      });
    } else if (!uppercase.test(form.password)) {
      setErrors({
        ...errors,
        passwordError: 'Password must contain at least one uppercase letter',
      });
    } else if (!lowercase.test(form.password)) {
      setErrors({
        ...errors,
        passwordError: 'Password must contain at least one lowercase letter',
      });
    } else if (!digitRegex.test(form.password)) {
      setErrors({
        ...errors,
        passwordError: 'Password must contain at least one number',
      });
    } else if (!specialCharRegex.test(form.password)) {
      setErrors({
        ...errors,
        passwordError: 'Password must contain at least one special character',
      });
    } else if (!form.confirmPassword) {
      setErrors({ ...errors, confirmPasswordError: 'Please confirm password' });
    } else if (form.confirmPassword !== form.password) {
      setErrors({ ...errors, confirmPasswordError: 'Passwords do not match' });
    } else if (userRole === 'Seller' && !form.location) {
      setErrors({ ...errors, locationError: 'Please enter location' });
    } else {
      navigate('Verificationbody', { register: true });
    }
  };

  return (
    <View style={styles.backgroundstyle}>
      <AuthHeader label="Sign Up" />
      <View style={styles.innerContainer}>
        <Text style={styles.setheading}>{Strings.setUpAccount}</Text>
        <Text style={styles.smalltext}>{Strings.signUpText}</Text>
        <Image source={Images.Logo} style={styles.firstphonestyle} />

        <CustomInputText
          placeholder="Enter Name"
          icon={Images.personName}
          value={form.name}
          onChangeText={text => {
            setForm({ ...form, name: text });
            setErrors({ ...errors, nameError: '' });
          }}
          error={errors.nameError}
        />

        <CustomInputText
          placeholder="Enter Email"
          icon={Images.email}
          keyboardType="email-address"
          value={form.email}
          onChangeText={text => {
            setForm({ ...form, email: text });
            setErrors({ ...errors, emailError: '' });
          }}
          error={errors.emailError}
        />

        <CustomInputText
          placeholder="Enter Phone Number"
          icon={Images.phone}
          keyboardType="numeric"
          value={form.phone}
          onChangeText={text => {
            setForm({ ...form, phone: text });
            setErrors({ ...errors, phoneError: '' });
          }}
          error={errors.phoneError}
        />

        <CustomInputText
          placeholder="Enter Password"
          icon={Images.password}
          isPassword={true}
          value={form.password}
          onChangeText={text => {
            setForm({ ...form, password: text });
            setErrors({ ...errors, passwordError: '' });
            checkPasswordStrength(text);
          }}
          autoCorrect={false}
          style={{ color: Colors.mediumGrey }}
          error={errors.passwordError}
        />

        <View style={styles.progressBox}>
          <Progress.Bar
            progress={strength.progress}
            width={wp(90)}
            color={strength.color}
            unfilledColor="#E0E0E0"
            borderWidth={0}
            height={hp(0.8)}
            borderRadius={50}
          />
          <Text style={[styles.strengthText, { color: strength.color }]}>
            {strength.label}
          </Text>
        </View>

        <CustomInputText
          placeholder="Enter Confirm Password"
          icon={Images.password}
          isPassword={true}
          inputContainer={{ marginTop: hp(1) }}
          value={form.confirmPassword}
          onChangeText={text => {
            setForm({ ...form, confirmPassword: text });
            setErrors({ ...errors, confirmPasswordError: '' });
          }}
          error={errors.confirmPasswordError}
        />

        {userRole === 'Seller' && (
          <>
            <CustomInputText
              placeholder="Enter Location"
              icon={Images.colorLocation}
              value={form.location}
              onChangeText={text => {
                setForm({ ...form, location: text });
                setErrors({ ...errors, locationError: '' });
              }}
              error={errors.locationError}
            />
            <RepairingService
              radioContainer={{ marginTop: hp(2) }}
              radioButtonInner={styles.radioButtonInner}
              radioButtonOuter={styles.radioButtonOuter}
              titleStyle={styles.titleStyle}
              radioChecked={true}
              title={Strings.servicesText}
            />

            <UploadingBox title={Strings.fronSideCNIC} />
            <UploadingBox title={Strings.backSideCNIC} />
            <Text style={styles.titleText}>{Strings.shopPics}</Text>
            <PickImage register={true} />
          </>
        )}

        <CheckBox
          buttontext="Sign Up"
          logintext="Login Now"
          policytext="Privacy Policy"
          agreetext=" I agree to "
          condition="Terms & Conditions"
          andthe="and the"
        />

        <Btn title={'Sign Up'} onPress={handleSignUp} />

        <View style={styles.accountStyle}>
          <Text style={styles.lowertext}>If you have an account </Text>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Text style={styles.logintext}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpBody;

const styles = StyleSheet.create({
  signupcontainer: {
    backgroundColor: Colors.primary,
    height: hp(12.3),
    justifyContent: 'center',
  },
  label: {
    fontFamily: Fonts.bold,
    marginLeft: wp(5.6),
    color: Colors.bg,
    fontSize: wp(4.2),
    paddingTop: hp(4.9),
  },
  setheading: {
    fontFamily: Fonts.semibold,
    marginTop: hp(2.5),
    fontSize: wp(5.7),
    color: Colors.black,
    height: hp(4),
  },
  smalltext: {
    fontSize: wp(3.1),
  },
  firstphonestyle: {
    width: wp(72),
    height: wp(34),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp(0.7),
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.bg,
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    paddingHorizontal: wp(5),
  },
  progressBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(0.7),
  },
  strengthText: {
    fontSize: Fontsize.xm,
    fontFamily: Fonts.medium,
    color: Colors.red,
    alignSelf: 'flex-end',
  },
  lowertext: {
    fontSize: Fontsize.xs1,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  logintext: {
    marginLeft: wp(0.3),
    color: Colors.primary,
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.xs1,
  },
  accountStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  titleStyle: {
    fontSize: Fontsize.xs,
    fontFamily: Fonts.medium,
  },
  radioButtonOuter: {
    height: hp(2.0),
    width: hp(2.0),
  },
  radioButtonInner: {
    height: hp(0.9),
    width: hp(0.9),
  },
  titleText: {
    marginTop: hp(1.5),
    fontSize: Fontsize.m,
    fontFamily: Fonts.regular,
    color: Colors.gray,
  },
});
