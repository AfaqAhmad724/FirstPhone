import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import SignUpBody from '../../Components/SignUpBody';
import { Colors } from '../../Constants/Colors';
import { hp } from '../../Constants/Responsive';

const Register = () => {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(5) }}>
        <SignUpBody />
      </ScrollView>
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
