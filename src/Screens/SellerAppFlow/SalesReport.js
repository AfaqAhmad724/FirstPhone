import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../../Constants/Fonts';
import { hp, wp } from '../../Constants/Responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Fontsize } from '../../Constants/Fontsize';
import SalesComponent from '../../Components/SalesComponent';
import { MyStyling } from '../../Constants/Styling';
import { Colors } from '../../Constants/Colors';
import SalesComponenttwo from '../../Components/SalesComponenttwo';
import MainHeader from '../../Components/MainHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SalesReport = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={MyStyling.container}>
      <MainHeader title={'Sales Report'} />
      <View style={styles.innerContainer}>
        <Text style={styles.salesStyle}>Sales Report</Text>
        <View style={styles.lineContainer}>
          <Text style={styles.todayStyle}>Today</Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={20}
            color="grey"
            style={styles.iconStyle}
          />
        </View>
      </View>

      {/* Top Boxes */}
      <View style={styles.boxContainer}>
        <SalesComponent
          sales="Total Sales"
          price="PKR 1,543,788"
          style={{ marginRight: wp(2), borderRadius: 0 }}
          icon={require('../../Assets/Icons/growth.png')}
          iconSize={wp(7.9)}
          textStyle={{ marginLeft: wp(5) }}
          priceStyle={{ fontFamily: Fonts.regular, marginLeft: 3 }}
        />
        <SalesComponent
          sales="Pay Online"
          price="PKR 343,788"
          color={Colors.red}
          icon={require('../../Assets/Icons/payOnline.png')}
          iconColor={Colors.bg}
          iconSize={wp(6.8)}
          style={{ borderRadius: 0 }}
          textStyle={{ marginLeft: wp(5) }}
          priceStyle={{
            fontFamily: Fonts.regular,
            marginLeft: 0,
          }}
          onPress={() => navigation.navigate('OnlineOrders', { title: 'Pay Online Orders' })}
        />
      </View>

      <View style={styles.boxContainertwo}>
        <SalesComponenttwo
          color={Colors.yellowlight}
          sales="Cash On Delivery"
          price="PKR 543,788"
          icon={require('../../Assets/Icons/COD.png')}
          iconColor={Colors.bg}
          isGreenBox={true}
          onPress={() => navigation.navigate('OnlineOrders', { title: 'Cash On Delivery Orders' })}
        />
        <View style={{ marginLeft: wp(2.2) }}>
          <SalesComponenttwo
            color={Colors.graydark}
            icon={require('../../Assets/Icons/goShop.png')}
            sales="GoShop"
            price="PKR 243,788"
            iconColor={Colors.bg}
            textStyle={{
              fontSize: Fontsize.fz,
              marginLeft: wp(4),
            }}
            isGreenBox={true}
            onPress={() => navigation.navigate('OnlineOrders', { title: 'GoShop Orders' })}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SalesReport;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: hp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(92.2),
  },
  salesStyle: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.xsm1,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todayStyle: {
    fontFamily: Fonts.medium,
    color: Colors.mediumGrey,
  },
  iconStyle: {},
  boxContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    paddingRight: wp(2),
  },
  boxContainertwo: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
});
