import { StyleSheet, Text, View } from 'react-native';
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
import * as Progress from 'react-native-progress';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        placeholder="Enter Password"
        style={[styles.emailstyle]}
        icon={Images.password}
        keyboardType="email-address"
        placeholderTextColor={Colors.mediumGrey}
      />
      <View style={styles.progressBox}>
        <Progress.Bar
          progress={0.25}
          width={wp(90)}
          color={Colors.red}
          unfilledColor="#E0E0E0"
          borderWidth={0}
          height={hp(.8)}
          borderRadius={50}
        />
        <Text style={styles.strengthText}>Weak Password</Text>
      </View>

      <CustomInputText
        placeholder="Confirm Password"
        style={[styles.emailstyle,]}
        icon={Images.password}
        placeholderTextColor={Colors.mediumGrey}
        inputContainer={{ marginTop: hp(1) }}
      />
      {/* <View style={styles.btnbox}>
        <Progress.Bar
          progress={0.3}
          width={wp(85)}
          color={Colors.secondary}
          unfilledColor="#E0E0E0"
          borderWidth={0}
          height={hp(1.2)}
          borderRadius={50}
          style={{ alignSelf: 'center', marginBottom: hp(2) }}
        />
        <Btn
          title="Continue"
          bgColor={Colors.black}
          btnContainer={{ backgroundColor: Colors.secondary }}
          onPress={() => navigation.navigate('Login')}
        />
      </View> */}
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
    marginTop: wp(2),
  },
  progressBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: hp(2),
    marginTop: hp(.7)
  },
  strengthText: {
    fontSize: Fontsize.xm,
    fontFamily: Fonts.medium,
    color: Colors.red,
    alignSelf: 'flex-end'
  },

});
