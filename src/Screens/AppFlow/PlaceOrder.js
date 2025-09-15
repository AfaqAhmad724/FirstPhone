import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyStyling } from '../../Constants/Styling';
import OrderCardFlatList from '../../Components/OrderCardFlatList';
import MainHeader from '../../Components/MainHeader';
import OrderAddress from '../../Components/OrderAddress';
import { Images } from '../../Assets';
import OrderTotal from '../../Components/OrderTotal';
import { Strings } from '../../Constants/Strings';
import Btn from '../../Components/Btn';
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import { hp } from '../../Constants/Responsive';
import { useNavigation } from '@react-navigation/native';

const PlaceOrder = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: hp(5) }}
        showsVerticalScrollIndicator={false}
      >
        <MainHeader title={'Place Order'} />
        <Text style={styles.orderText}>Shipping Address</Text>
        <OrderAddress icon={Images.location} address={Strings.address} />
        <Text style={styles.orderListText}>Order List</Text>
        <OrderCardFlatList />
        <OrderTotal
          price={'1,508,997'}
          shippingCharges={'500'}
          total={'1,509,497'}
        />
        <Btn
          title={'Place Order'}
          onPress={() => navigation.navigate('Order', { type: 'order' })}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({
  orderText: {
    marginTop: hp(3),
    color: Colors.black,
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.m,
  },
  orderListText: {
    marginTop: hp(0.5),
    color: Colors.black,
    fontFamily: Fonts.bold,
    fontSize: Fontsize.m,
  },
});
