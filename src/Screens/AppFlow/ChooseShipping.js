import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import ChooseShippingComponent from '../../Components/ChooseShippingComponent';
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import { hp, wp } from '../../Constants/Responsive';
import { Images } from '../../Assets';
import Btn from '../../Components/Btn';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyStyling } from '../../Constants/Styling';
import { Fontsize } from '../../Constants/Fontsize';
import MainHeader from '../../Components/MainHeader';

const shippingData = [
  {
    id: '1',
    icon: Images.addressLocation,
    status: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    address: 'Address',
    dividerColor: Colors.primary,
    iconColor: Colors.primary,
  },
  {
    id: '2',
    icon: Images.addressLocation,
    status: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    address: 'Address',
    dividerColor: Colors.dividerColor,
    statusColor: Colors.statusColor,
    color: Colors.statusColor,
    iconColor: '#656363',
    addressColor: Colors.black,
  },
];

const ChooseShipping = () => {
  const navigation = useNavigation()
  const renderItem = ({ item }) => (
    <ChooseShippingComponent
      icon={item.icon}
      status={item.status}
      address={item.address}
      dividerColor={item.dividerColor}
      statusColor={item.statusColor}
      color={item.color}
      iconColor={item.iconColor}
      addressColor={item.addressColor}
    />
  );

  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5) }}>

        <MainHeader title={'Choose Shipping'} />
        <Text style={styles.headingStyle}>Shipping Address</Text>
        <FlatList
          data={shippingData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: hp(5) }}
        />

        <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('ShipingAddress')}>
          <Text style={styles.plusIcon}>＋</Text>
          <Text style={styles.addBtnText}>Add New Shipping Address</Text>
        </TouchableOpacity>

        <Btn title={'Continue'} onPress={() => navigation.navigate('PlaceOrder')} />
      </ScrollView>

    </SafeAreaView>
  );
};

export default ChooseShipping;

const styles = StyleSheet.create({
  headingStyle: {
    marginTop: hp(4),
    fontFamily: Fonts.semibold,
    color: Colors.black,
    fontSize: Fontsize.sm
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: Colors.black,
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
    backgroundColor: Colors.offWhite,
  },
  plusIcon: {
    fontSize: wp(4),
    fontFamily: Fonts.bold,
    marginRight: wp(2),
    color: Colors.black,
  },
  addBtnText: {
    fontFamily: Fonts.medium,
    fontSize: wp(4),
    color: Colors.black,
  },
});
