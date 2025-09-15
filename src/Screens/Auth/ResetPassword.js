import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import { MyStyling } from '../../Constants/Styling';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import CustomInputText from '../../Components/CustomInputText';
import { Images } from '../../Assets';
import Btn from '../../Components/Btn';
import { StatusBar } from 'react-native';
const ResetPassword = ({ navigation }) => {
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
        placeholder="abc"
        style={[styles.emailstyle, { color: 'black' }]}
        icon={Images.password}
        keyboardType="email-address"
        placeholderTextColor={Colors.mediumGrey}
      />

      <CustomInputText
        placeholder="Confirm Password"
        style={[styles.emailstyle, { color: 'black' }]}
        icon={Images.password}
        placeholderTextColor={Colors.mediumGrey}
      />
      <View style={styles.btnbox}>
        <Btn
          title="Continue"
          bgColor={Colors.black}
          btnContainer={{ backgroundColor: Colors.secondary }}
          onPress={() => navigation.navigate('Login')}
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
  btnbox: {
    marginTop: wp(3.3),
  },
});
