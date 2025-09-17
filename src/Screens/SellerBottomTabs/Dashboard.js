import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyStyling } from '../../Constants/Styling';
import { Images } from '../../Assets';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import SalesComponent from '../../Components/SalesComponent';
import DashboadComponent from '../../Components/DashboadComponent';

const Dashboard = ({}) => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={[MyStyling.container, { flex: 1 }]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Images.menu} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>
            Hi, Welcome to{' '}
            <Text style={{ color: Colors.primary, fontFamily: Fonts.semibold }}>
              Mobile Hub
            </Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: wp(3.9),
            }}
          >
            <Text style={styles.orderText}>Orders Statistics</Text>
            <Text style={styles.todayText}>Today</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <SalesComponent
              color="#555555"
              sales="Total"
              price="4"
              salesColor={Colors.shadowgray}
              priceColor={Colors.dimgraay}
              icon={Images.cort}
              iconColor={Colors.bg}
              height={hp(11)}
              style={{ borderRadius: wp(0.8) }}
            />
            <View style={{ marginLeft: 9.4 }}>
              <SalesComponent
                color={Colors.yellowlight}
                price="3"
                sales="Completed"
                salesColor={Colors.shadowgray}
                priceColor={Colors.dimgraay}
                icon={Images.cort}
                iconColor={Colors.bg}
                height={hp(11)}
                priceStyle={{ marginLeft: 5 }}
                style={{ borderRadius: wp(0.8) }}
              />
            </View>
          </View>

          <View style={{ marginTop: 9, marginLeft: 1, flexDirection: 'row' }}>
            <SalesComponent
              color={Colors.primary}
              sales="Active"
              price="4"
              salesColor={Colors.shadowgray}
              priceColor={Colors.dimgraay}
              icon={Images.cort}
              iconColor={Colors.bg}
              height={hp(11)}
              priceStyle={{ marginLeft: 5 }}
              style={{ borderRadius: wp(0.8) }}
            />
            <View style={{ marginLeft: 9 }}>
              <SalesComponent
                color={Colors.fcred}
                sales="Canceled"
                price="0"
                salesColor={Colors.shadowgray}
                priceColor={Colors.dimgraay}
                icon={Images.cort}
                iconColor={Colors.bg}
                height={hp(11)}
                priceBold={true}
                priceStyle={{ marginLeft: 5 }}
                style={{ borderRadius: wp(0.8) }}
              />
            </View>
          </View>
        </View>

        <View style={{ marginTop: wp(4) }}>
          <View
            style={{
              flexDirection: 'row',

              marginBottom: wp(1),
            }}
          >
            <Text style={styles.orderText}>Orders Statistics</Text>
            <Text style={styles.todayText}>Overall</Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 1 }}>
            <SalesComponent
              color={Colors.graydark}
              sales="Total"
              price="18"
              salesColor={Colors.shadowgray}
              priceColor={Colors.dimgraay}
              icon={Images.cort}
              iconColor={Colors.bg}
              height={hp(11)}
              priceBold={true}
              priceStyle={{ marginLeft: 5 }}
              style={{ borderRadius: wp(0.8) }}
            />
            <View style={{ marginLeft: 9 }}>
              <SalesComponent
                color={Colors.yellowlight}
                price="12"
                sales="Completed Orders"
                salesColor={Colors.shadowgray}
                priceColor={Colors.dimgraay}
                icon={Images.cort}
                iconColor={Colors.bg}
                height={hp(11)}
                style={{
                  justifyContent: 'center',
                  borderRadius: wp(1),
                }}
                textStyle={{
                  marginLeft: wp(0),
                }}
                priceBold={true}
                priceStyle={{ marginLeft: 1 }}
              />
            </View>
          </View>

          <View
            style={{ marginTop: 10, marginLeft: wp(0.4), flexDirection: 'row' }}
          >
            <SalesComponent
              color={Colors.primary}
              sales="Active"
              price="7"
              salesColor={Colors.shadowgray}
              priceColor={Colors.dimgraay}
              icon={Images.cort}
              iconColor={Colors.bg}
              height={hp(11)}
              priceStyle={{ marginLeft: 5 }}
              style={{ borderRadius: wp(0.8) }}
            />
            <View style={{ marginLeft: 8.7 }}>
              <SalesComponent
                color={Colors.fcred}
                sales="Canceled"
                price="2"
                textStyle={{ marginLeft: wp(1) }}
                salesColor={Colors.shadowgray}
                priceColor={Colors.dimgraay}
                icon={Images.cort}
                iconColor={Colors.bg}
                height={hp(11)}
                priceStyle={{ marginLeft: 5 }}
                style={{ borderRadius: wp(0.8) }}
              />
            </View>
          </View>
        </View>

        <View style={{ marginTop: wp(5) }}>
          <Text style={{ fontFamily: Fonts.semibold }}>Active Orders</Text>
        </View>

        <View style={{ marginTop: hp(1) }}>
          <DashboadComponent
            order="Order Id"
            num={Colors.numdim}
            icon={Images.shopName}
            shopName="Mobile Hub Lahore"
            price="1,502,999"
            products="7"
            date="July 25, 2020"
          />
        </View>

        <View style={{ marginTop: hp(1.3) }}>
          <DashboadComponent
            order="Order Id"
            num={Colors.numdim}
            icon={Images.shopName}
            shopName="Mobile Hub Lahore"
            price="1,502,999"
            products="7"
            date="July 26, 2020"
          />
        </View>

        <View style={{ marginTop: hp(1.3) }}>
          <DashboadComponent
            order="Order Id"
            icon={Images.shopName}
            shopName="Mobile Hub Lahore"
            price="1,502,999"
            products="7"
            date="July 27, 2020"
          />
        </View>

        <View style={{ marginTop: hp(1.3) }}>
          <DashboadComponent
            order="Order Id"
            num={Colors.numdim}
            icon={Images.shopName}
            shopName="Mobile Hub Lahore"
            price="1,502,999"
            products="7"
            date="July 28, 2020"
          />
        </View>

        <View style={{ marginBottom: hp(10) }}></View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.xsm1,
    color: Colors.dimgraay,
    marginTop: hp(7),
    marginLeft: wp(1.2),
  },
  orderText: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.s,
    // marginLeft: wp(1),
  },
  todayText: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.s,
    marginTop: wp(0.2),
    color: Colors.dimgraay,
    marginLeft: wp(49.2),
  },
});
