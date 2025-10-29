import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
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
import Btn from './Btn';
import { useNavigation } from '@react-navigation/native';
import { navigate } from '../Navigations/RootNavigation';
import { emailRegex } from '../Constants/Regex';
import Toast from 'react-native-simple-toast';
import Api, { configAxiosHeaders } from '../Screens/Services/Api_Services';
import { useDispatch, useSelector } from 'react-redux';
import { USER_DATA } from '../Redux/Slices/AuthSlice';

const LoginBody = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [checkBox, setCheckBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const userData = useSelector(state => state);
  console.log('@ssssdata', userData);
  const [form, setForm] = useState({
    email: 'afaq.ranglerz@gmail.com',
    password: '12345678@Aa',
  });

  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
  });

  const handleLogin = () => {
    if (!form.email) {
      setError({ emailError: 'Please enter email', passwordError: '' });
      Toast.show('Please enter email', Toast.SHORT);
      return;
    } else if (!emailRegex.test(form.email)) {
      setError({ emailError: 'Please enter a valid email', passwordError: '' });
      Toast.show('Please enter a valid email', Toast.SHORT);
      return;
    } else if (!form.password) {
      setError({ emailError: '', passwordError: 'Please enter password' });
      Toast.show('Please enter password', Toast.SHORT);
      return;
    } else {
      setError({ emailError: '', passwordError: '' });
      loginApi();
    }
  };

  const loginApi = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('email', form?.email);
    formData.append('password', form?.password);
    formData.append('type', 'customer');

    Api.login(formData)
      .then(async res => {
        if (res?.status === 200) {
          const token = res?.data?.token;
          const userData = res?.data?.data?.user;
          await configAxiosHeaders(token);
          console.log('@RESS ', userData);
          dispatch(USER_DATA(userData));
          Toast.show(res?.data?.message || 'Login successful', Toast.SHORT);
          navigation.navigate('FlowNavigation');
        } else {
          Toast.show('Login failed, please try again', Toast.SHORT);
        }
      })
      .catch(error => {
        console.log('Login Error:', error?.response);
        Toast.show(
          error?.response?.data?.message || 'Something went wrong',
          Toast.SHORT,
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <AuthHeader label="Login" />
      <View style={styles.innerContainer}>
        <Text style={styles.setHeading}>Welcome Back</Text>
        <Text style={styles.smallText}>Hello there, sign in to continue</Text>
        <Image
          source={require('../Assets/Images/Logo.png')}
          style={styles.firstPhoneStyle}
        />

        <CustomInputText
          placeholder="Email"
          icon={Images.email}
          keyboardType="email-address"
          inputContainer={{ marginHorizontal: wp(5) }}
          placeholderTextColor={Colors.emailcolor}
          style={styles.emailstyle}
          value={form.email}
          onChangeText={text =>
            setForm({ ...form, email: text, emailError: '' })
          }
          error={error.emailError}
          errorStyle={{ marginLeft: wp(5.7), color: 'red' }}
        />

        <CustomInputText
          placeholder="Password"
          icon={Images.password}
          isPassword={true}
          inputContainer={{ marginHorizontal: wp(5) }}
          style={styles.emailstyle}
          value={form.password}
          onChangeText={text =>
            setForm({ ...form, password: text, passwordError: '' })
          }
          error={error.passwordError}
          errorStyle={{ marginLeft: wp(5.7), color: 'red' }}
        />

        <View style={styles.rememberContainer}>
          <View style={styles.rememberRow}>
            <TouchableOpacity onPress={() => setCheckBox(!checkBox)}>
              <MaterialIcons
                name={checkBox ? 'check-box' : 'check-box-outline-blank'}
                size={wp(4.2)}
                color={Colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.remember}>Remember me</Text>
          </View>

          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <Btn title={'Sign in'} onPress={handleLogin} loader={loading} />

        <LoginDivider loginwith="Or login with" />
        <ButtonGoogleApple google="Google" apple="Apple" />

        <View style={styles.signUpView}>
          <Text style={styles.accountText}>If you Don't have an account</Text>
          <TouchableOpacity onPress={() => navigate('Register')}>
            <Text style={styles.signUpText}>Sign Up Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    height: hp(4),
    fontFamily: Fonts.semibold,
    marginLeft: wp(5.5),
    marginTop: hp(2.5),
    fontSize: Fontsize.l,
    color: Colors.darkBlue,
  },
  smallText: {
    marginLeft: wp(5.7),
    fontSize: Fontsize.xs,
    fontFamily: Fonts.medium,
    color: Colors.darkGrey,
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
    marginTop: hp(1),
    marginHorizontal: wp(5),
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  remember: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xs2,
    marginLeft: wp(0.8),
    color: '#64748B',
    marginTop: wp(0.8),
  },
  forgotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotText: {
    color: Colors.primary,
    fontSize: Fontsize.xs2,
    fontFamily: Fonts.medium,
    marginTop: 7,
  },
  accountText: {
    textAlign: 'center',
    fontSize: Fontsize.xs2,
    color: 'black',
    fontFamily: Fonts.regular,
  },
  signUpText: {
    marginLeft: wp(1),
    fontFamily: Fonts.semibold,
    color: Colors.primary,
    fontSize: Fontsize.xs,
  },
  signUpView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(5),
    justifyContent: 'center',
  },
  emailstyle: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.s,
  },
});
