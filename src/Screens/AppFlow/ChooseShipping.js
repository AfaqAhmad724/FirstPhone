import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import ChooseShippingComponent from '../../Components/ChooseShippingComponent';

const ChooseShipping = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}></Text>
      <ChooseShippingComponent
        heading="Shipping Address"
        addressText="Address"
        status=" 1901 Thornridge Cir. Shiloh, Hawaii 81063 "
      />
    </SafeAreaView>
  );
};

export default ChooseShipping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  heading: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.m,
    color: Colors.black,
  },
});
