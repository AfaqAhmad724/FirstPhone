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
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import Api from '../Screens/Services/Api_Services';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAmo0zd59UzkD-G53-J8h31miMVc1ioO9I';
const SignUpBody = props => {
  const navigation = useNavigation();
  const userRole = useSelector(state => state?.ROLE?.userData);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    repairing: '',
    cnic_front: '',
    cnic_back: '',
    shopPics: [],
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
    shopePics: '',
  });

  const [checkBox, setCheckBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    } else if (!checkBox) {
      Toast.show('Please agree to Terms & Conditions first', Toast.SHORT);
    } else {
      // registerUserApi();
      navigation.navigate('Verificationbody', {
        register: true,
        userData: form,
      });
    }
  };

  const registerUserApi = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      if (userRole == 'Customer') {
        formData.append('email', form?.email);
        formData.append('type', 'customer');
      } else {
        formData.append('email', form?.email);
        formData.append('type', 'vendor');
      }
      const res = await Api.register(formData);
      console.log('response', JSON.stringify(res, null, 2));

      if (res?.status === 200 || res?.status == 'success') {
        Toast.show(res?.data?.message || 'OTP sent successfully!', Toast.SHORT);
        navigation.navigate('Verificationbody', {
          register: true,
          userData: form,
        });
      } else {
        Toast.show('Something went wrong', Toast.SHORT);
      }
    } catch (error) {
      console.log('Error', JSON.stringify(error, null, 2));
      Toast.show(
        error?.response?.data?.message || 'Error occurred',
        Toast.SHORT,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const setRepairingService = value => {
    setForm(prev => ({ ...prev, repairing: value }));
  };

  const setFrontCnic = image => {
    console.log('front cnic image', JSON.stringify(image));

    setForm(img => ({ ...img, cnic_front: image }));
  };
  const setBackCnic = image => {
    console.log('back cnic image', JSON.stringify(image));

    setForm(img => ({ ...img, cnic_back: image }));
  };
  const setShopPics = value => {
    console.log('shopics repsoien', value);

    setForm(img => ({ ...img, shopPics: value }));
  };

  return (
    <View style={styles.backgroundStyle}>
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
              repairing={form?.repairing}
              setRepairing={setRepairingService}
            />
            <UploadingBox
              title={Strings.fronSideCNIC}
              setFrontCnic={setFrontCnic}
              frontCnic={form.cnic_front}
              front
            />
            <UploadingBox
              title={Strings.backSideCNIC}
              setBackCnic={setBackCnic}
              backCnic={form.cnic_back}
            />
            <Text style={styles.titleText}>{Strings.shopPics}</Text>
            <PickImage
              register={true}
              setShopIcs={setShopPics}
              shopPics={form.shopPics}
            />
          </>
        )}

        {/* {userRole === 'Seller' && (
          <>
            <View
              style={{
                marginTop: hp(2),
                borderWidth: 1,
                borderColor: Colors.verificationColor,
                borderRadius: wp(1.8),
                overflow: 'hidden', // 👈 prevents suggestion clipping
              }}
            >
              <GooglePlacesAutocomplete
                placeholder="Search for an address..."
                styles={{
                  textInput: {
                    // backgroundColor: colors.crmBackgroundColor,
                    // paddingRight: moderateScale(10),
                    // paddingLeft: moderateScale(10),
                    // margin: moderateScale(5),
                    // height: DeviceInfo.isTablet()
                    //   ? moderateScale(50)
                    //   : moderateScale(50),
                    // color: '#000',
                    // fontSize: moderateScale(14),
                    // borderRadius: moderateScale(8),
                  },
                  // textInputContainer: {
                  //   height: moderateScale(50),
                  //   alignItems: 'center',
                  // },
                  // container: {
                  //   marginTop: moderateScale(10),
                  //   marginHorizontal: moderateScale(5),
                  // },
                  // description: {
                  //   fontWeight: '400',
                  //   color: '#000',
                  //   fontSize: moderateScale(13),
                  // },
                  // row: {
                  //   backgroundColor: 'white',
                  //   borderBottomColor: '#E9E8E8',
                  // },
                }}
                debounce={200}
                keyboardShouldPersistTaps="always" // I added this
                minLength={1}
                timeout={1000} // I added this
                listViewDisplayed="auto"
                predefinedPlaces={[]} // I added this
                GooglePlacesDetailsQuery={{
                  fields: 'geometry',
                }}
                textInputProps={{
                  placeholderTextColor: 'gray',
                  // onFocus: () => {
                  //   googlePlaceAutoCompleteRef.current?.setAddressText('');
                  //   setShowMap(false);
                  // },
                }}
                // ref={googlePlaceAutoCompleteRef}
                // renderRightButton={() =>
                //   googlePlaceAutoCompleteRef.current?.getAddressText() ? (
                //     <TouchableOpacity
                //       style={{
                //         justifyContent: 'center',
                //         paddingHorizontal: moderateScale(5),
                //       }}
                //       onPress={() => {
                //         setShowMap(false);
                //         googlePlaceAutoCompleteRef.current?.setAddressText('');
                //       }}
                //     >
                //       <Text
                //         style={{ color: 'red', fontSize: moderateScale(14) }}
                //       >
                //         Remove
                //       </Text>
                //     </TouchableOpacity>
                //   ) : null
                // }
                enablePoweredByContainer={false}
                fetchDetails
                autoFocus={true}
                onFail={error => console.error(error)}
                onPress={(data, details = null) => {
                  // setMapData(details);
                  // setData(data);
                  // setShowMap(true);
                }}
                query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: 'en',
                }}
              />
            </View>

            <RepairingService
              repairing={form?.repairing}
              setRepairing={setRepairingService}
            />
            <UploadingBox
              title={Strings.fronSideCNIC}
              setFrontCnic={setFrontCnic}
              frontCnic={form.cnic_front}
              front
            />
            <UploadingBox
              title={Strings.backSideCNIC}
              setBackCnic={setBackCnic}
              backCnic={form.cnic_back}
            />
            <Text style={styles.titleText}>{Strings.shopPics}</Text>
            <PickImage
              register={true}
              setShopIcs={setShopPics}
              shopPics={form.shopPics}
            />
          </>
        )} */}

        <CheckBox
          agreetext=" I agree to "
          condition="Terms & Conditions"
          andthe="and the"
          policytext="Privacy Policy"
          checked={checkBox}
          onPress={() => setCheckBox(!checkBox)}
        />

        <Btn title={'Sign Up'} onPress={handleSignUp} loader={isLoading} />

        <View style={styles.accountStyle}>
          <Text style={styles.lowertext}>If you have an account </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logintext}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpBody;

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: Colors?.primary,
  },
  setheading: {
    fontFamily: Fonts.semibold,
    marginTop: hp(2.5),
    fontSize: wp(5.7),
    color: Colors.black,
    height: hp(4),
  },
  smalltext: {
    fontSize: wp(3),
    color: Colors.darkGrey,
    fontFamily: Fonts.medium,
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
  titleText: {
    marginTop: hp(1.5),
    fontSize: Fontsize.m,
    fontFamily: Fonts.regular,
  },
});
