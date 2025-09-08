import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import CustomInputText from '../../Components/CustomInputText';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import Btn from '../../Components/Btn';
import { Images } from '../../Assets';

const ForgotPassword = ({ navigation }) => {
  return (
    <SafeAreaView>
      <PasswordHeader header="Forgot Password" islogged="Cannot log in? " />

      <Text style={styles.isLogged}>Cannot log In?</Text>

      <Text style={styles.define}>
        Enter your email and we will send a verification code
      </Text>

      <CustomInputText
        placeholder="Email"
        style={styles.emailstyle}
        icon={Images.email}
        placeholderTextColor={'#9F9F9F'}
        keyboardType="email-address"
      />

      <Btn
        title="Send Verification Code"
        bgColor={Colors.secondary}
        btnContainer={{ backgroundColor: Colors.secondary }}
        onPress={() => navigation.navigate('Verificationbody')}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  isLogged: {
    color: Colors.logblack,
    marginLeft: wp(5.5),
    fontSize: wp(5.6),
    fontFamily: Fonts.medium,
    marginTop: hp(2.7),
  },
  define: {
    marginLeft: wp(5.9),
    color: Colors.emailcolor,
    fontSize: wp(3.4),
    width: wp(82),
    fontFamily: Fonts.regular,
  },
  emailstyle: {
    color: Colors.emailcolor,
  },
  signIn: {
    marginHorizontal: wp(6),
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
    backgroundColor: Colors.secondary,
  },

  buttonText: {
    textAlign: 'center',
    color: Colors.bg,
    fontSize: wp(3.5),
    fontFamily: Fonts.medium,
  },
});
