import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../Constants/Colors';
import ShippingComponent from '../../Components/ShippingComponent';
import MainHeader from '../../Components/MainHeader';
import Btn from '../../Components/Btn';
import { MyStyling } from '../../Constants/Styling';
import { hp } from '../../Constants/Responsive';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShipingAddress = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainHeader title="Shipping Address" />
        <View style={styles.innerContainer}>
          <ShippingComponent
            name="Name"
            placeholder="Enter your name"
          />

          <ShippingComponent
            name="Email address"
            placeholder="Enter email adress"
            keyboardType="email-address"
          />

          <ShippingComponent
            name="City"
            placeholder="Enter your city"
          />

          <ShippingComponent
            name="Street Address"
            placeholder="Enter your street address"
          />
          <ShippingComponent
            name="Postal Code"
            placeholder="Enter your postal code"
            keyboardType="numeric"
          />
          <ShippingComponent
            name="Phone Number"
            placeholder="Enter your phone number"
            keyboardType="numeric"
          />

          <View style={styles.btnContainer}>
            <Btn
              title="Save & Continue"
              onPress={() => navigation.navigate('PlaceOrder')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShipingAddress;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  innerContainer: {
    marginTop: hp(2.5),
  },
  btnContainer: {
    marginBottom: hp(13),
    marginTop: hp(2.3),
  },
});
