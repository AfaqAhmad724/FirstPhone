import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import Cart from '../../Components/Cart';
import { Fonts } from '../../Constants/Fonts';
import Btn from '../../Components/Btn';
import { Images } from '../../Assets';
import { Fontsize } from '../../Constants/Fontsize';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../../Components/MainHeader';
import { MyStyling } from '../../Constants/Styling';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyCartScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={MyStyling.container}>
      <MainHeader title={'My Cart'} />
      <View style={styles.innerContainer}>

        <Cart
          image={Images.phone2}
          phone="iPhone 16 Pro"
          mobile="Mobile Hub Lahore"
          priceprop="Rs 502,999"
        />
        <Cart
          image={Images.phone4}
          phone="iPhone 16 Pro"
          mobile="Mobile Hub Lahore"
          priceprop="Rs 302,999"
        />
        <Cart
          image={Images.phone3}
          phone="iPhone 16 Pro"
          mobile="Mobile Hub Lahore"
          priceprop="Rs 350,999"
        />

        <View style={styles.total}>
          <Text style={styles.subtotalstyle}>Subtotal:</Text>
          <Text style={styles.rupees}>Rs 4,979,988</Text>
        </View>
        <Btn title={'Checkout'} image={Images.checkout} onPress={() => navigation.navigate('DeliveryMethod')} />
      </View>
    </SafeAreaView>
  );
};

export default MyCartScreen;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: hp(1.5)
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3.8%'),
  },
  subtotalstyle: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.m,
    color: Colors.black,
  },
  rupees: {
    fontFamily: Fonts.semibold,
    color: Colors.primary,
    fontSize: Fontsize.m,
  },
});
