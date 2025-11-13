import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import SignUpBody from '../../Components/SignUpBody';
import { Colors } from '../../Constants/Colors';
import { hp } from '../../Constants/Responsive';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = () => {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={hp(5)}
        contentContainerStyle={{ paddingBottom: hp(5), flexGrow: 1 }}
      >
        <SignUpBody />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
});
