import {
  Image,
  ScrollView,
  StatusBar,
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
import { Strings } from '../../Constants/Strings';
import { useDrawerStatus } from '@react-navigation/drawer';

const Dashboard = ({ }) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const navigation = useNavigation();

  return (
    <SafeAreaView style={MyStyling.container2}>
      <StatusBar
        backgroundColor={isDrawerOpen ? Colors.primary : Colors.bg}
        barStyle={isDrawerOpen ? 'light-content' : 'dark-content'} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5), paddingTop: hp(.8) }}>
        <View style={styles.locationStyle}>

          <TouchableOpacity
            style={styles.menuContainer}
            onPress={() => navigation.openDrawer()}>
            <Image source={Images.menu} style={styles.menuIcon} resizeMode="contain" tintColor={Colors.bg} />
          </TouchableOpacity>

          <View style={styles.locationContainer}>
            <View style={styles.locationRow}>
              <Image source={Images.location} style={styles.locationIcon} resizeMode="contain" tintColor={Colors.primary} />
              <Text style={styles.locationText}>
                {Strings.locationName}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.notificationContainer} onPress={() => navigation.navigate('Notifications')}>
            <Image source={Images.notificationSimple} style={styles.bellIcon} resizeMode="contain" tintColor={Colors.primary} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>5</Text>
            </View>
          </TouchableOpacity>
        </View>

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
              justifyContent: 'space-between',
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
          <Text style={styles.orderText}>Active Orders</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.xsm1,
    color: Colors.dimgraay,
    marginTop: hp(3),
    marginLeft: wp(1.2),
  },
  orderText: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.xsm1,
    color: Colors.black
    // marginLeft: wp(1),
  },
  todayText: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.s,
    marginTop: wp(0.2),
    color: Colors.dimgraay,
  },
  locationStyle: {
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuContainer: {
    backgroundColor: Colors.primary,
    padding: wp(2),
    borderRadius: hp(5),
  },
  menuIcon: {
    width: wp(5),
    height: wp(5),
  },
  locationContainer: {
    flex: 1,
    marginLeft: wp(2),
    marginRight: wp(3),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: wp(3.5),
    height: wp(3.5),
    marginRight: wp(1),
    marginBottom: hp(1.5)
  },
  locationText: {
    color: Colors.dimgraay,
    fontSize: Fontsize.xs2,
    fontFamily: Fonts.medium,
    lineHeight: hp(2),
  },
  notificationContainer: {
    position: 'relative',
  },
  bellIcon: {
    width: wp(6),
    height: wp(6),
  },
  badge: {
    position: 'absolute',
    top: -hp(0.6),
    right: wp(.2),
    backgroundColor: Colors.red,
    width: wp(3.5),
    height: wp(3.5),
    borderRadius: wp(2.25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: Colors.bg,
    fontSize: Fontsize.xm1,
    fontFamily: Fonts.semibold,
  },
});
