import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import { Colors } from '../../Constants/Colors';
import ShippingComponent from '../../Components/ShippingComponent';

const ShopingAddress = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.innerContainer}>
        <PasswordHeader header="Shipping Address" />
        <ShippingComponent
          name="Name"
          placeholder="Enter your name"
          placeholdertextColor={Colors.mediumGrey}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShopingAddress;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
});
