import { ScrollView, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainHeader from '../../Components/MainHeader';
import OrderCardFlatList from '../../Components/OrderCardFlatList';
import OrderTotal from '../../Components/OrderTotal';
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import { hp } from '../../Constants/Responsive';
import { MyStyling } from '../../Constants/Styling';
import Btn from '../../Components/Btn';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import OrderStatusDetail from '../../Components/OrderStatusDetail';
import CustomerDetail from '../../Components/CustomerDetail';

const OrderLists = () => {
  const route = useRoute();
  const flag = route?.params?.check;
  const navigation = useNavigation();
  const [btnText, setBtnText] = useState('');
  const userRole = useSelector(state => state?.ROLE?.userData);

  useEffect(() => {
    handleButtonText();
  }, []);
  const handleButtonText = () => {
    if (userRole == 'Customer') {
      setBtnText('View Receipt');
    } else {
      setBtnText('Generate Receipt');
    }
  };

  const handleNavigation = () => {
    if (userRole == 'Customer') {
      navigation.navigate('Receipt');
    } else {
      navigation.navigate('SellerFlowNavigation', { screen: 'DeviceReceipt' });
    }
  };

  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(5) }}
      >
        <MainHeader title={'Order List'} />
        <Text style={styles.orderListText}>Order List</Text>
        <OrderCardFlatList />
        {userRole == 'Seller' && (
          <>
            <CustomerDetail label={'Name'} value={'Alex'} />
            <CustomerDetail
              label={'Email Address'}
              value={'Alex99@gmail.com'}
            />
            <CustomerDetail label={'Phone Number'} value={'11122233344'} />
            <CustomerDetail label={'City '} value={'Lahore'} />
            <CustomerDetail label={'Postal Code'} value={'54782'} />
            <CustomerDetail
              label={'Street Address'}
              value={'Civic Centre, Block D2, Phase 1, Johar Town, Lahore'}
            />
            <CustomerDetail label={'Order Status'} value={'Active'} />
            <CustomerDetail label={'Payment Method'} value={'Online'} />
            <CustomerDetail label={'Payment'} value={'Paid'} />
          </>
        )}
        {userRole != 'Seller' && (
          <OrderStatusDetail
            price={'1,508,997'}
            orderStatus={
              flag == 'delivered'
                ? 'Delivered'
                : flag == 'cancelled'
                ? 'Cancelled'
                : 'Active'
            }
            payment={'Paid'}
          />
        )}

        {userRole == 'Seller' && (
          <OrderTotal
            price={'1,508,997'}
            shippingCharges={'500'}
            total={'1,509,497'}
          />
        )}

        {!flag && (
          <Btn
            title={'Track order'}
            btnContainer={{ backgroundColor: Colors.secondary }}
            onPress={() => navigation.navigate('TrackOrder')}
          />
        )}
        <Btn title={btnText} onPress={() => handleNavigation()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderLists;

const styles = StyleSheet.create({
  orderText: {
    marginTop: hp(3),
    color: Colors.black,
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.m,
  },
  orderListText: {
    marginTop: hp(3),
    color: Colors.black,
    fontFamily: Fonts.bold,
    fontSize: Fontsize.m,
  },
});
