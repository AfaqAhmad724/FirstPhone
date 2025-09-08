import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import { Colors } from '../../Constants/Colors';
import MobileRequest from '../../Components/MobileRequest';
import { wp } from '../../Constants/Responsive';
import { MyStyling } from '../../Constants/Styling';

const RequestMobile = () => {
  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView>
        <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
        <View style={styles.innerContainer}>
          <PasswordHeader />
          <MobileRequest
            mobileheading="THIS MOBILE IS CURRENTLY UNAVAILABLE."
            define="Don't worry! Submit your request below and we'll notify you immediately when it becomes available."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RequestMobile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  innerContainer: {
    // marginLeft: wp('3.5%'),
  },
});
