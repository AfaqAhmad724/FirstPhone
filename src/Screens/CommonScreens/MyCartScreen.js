import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../../Constants/Colors';
import PasswordHeader from '../../Components/PasswordHeader';
import { hp, wp } from '../../Constants/Responsive';
import Cart from '../../Components/Cart';
import { Fonts } from '../../Constants/Fonts';
import Btn from '../../Components/Btn';
import { Images } from '../../Assets';
import { Fontsize } from '../../Constants/Fontsize';
import { useNavigation } from '@react-navigation/native';

const MyCartScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
      <View style={styles.innerContainer}>
        <PasswordHeader header="My Cart" />

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
        <Btn title={'Checkout'} onPress={() => navigation.navigate('DeliveryMethod')} />
      </View>
    </SafeAreaView>
  );
};

export default MyCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    marginLeft: wp('3.8%'),
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3.8%'),
  },
  subtotalstyle: {
    fontFamily: Fonts.semibold,
    marginLeft: wp('2.1%'),
    fontSize: Fontsize.m,
    color: Colors.black,
  },
  rupees: {
    fontFamily: Fonts.semibold,
    color: Colors.primary,
    marginRight: wp('4.8%'),
    fontSize: Fontsize.m,
  },
});
