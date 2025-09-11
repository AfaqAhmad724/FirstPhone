import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import React from 'react';
import ChooseShippingComponent from '../../Components/ChooseShippingComponent';
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import { hp, wp } from '../../Constants/Responsive';
import { Images } from '../../Assets';
import Btn from '../../Components/Btn';

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
    <SafeAreaView>
      <Text style={styles.headingStyle}>Shipping Address</Text>

      <FlatList
        data={shippingData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: hp(5) }}
      />

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.plusIcon}>＋</Text>
        <Text style={styles.addBtnText}>Add New Shipping Address</Text>
      </TouchableOpacity>

      <Btn title={'Continue'} />
    </SafeAreaView>
  );
};

export default ChooseShipping;

const styles = StyleSheet.create({
  headingStyle: {
    marginTop: hp(10),
    marginLeft: wp(4.7),
    fontFamily: Fonts.semibold,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.black,
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
    marginHorizontal: wp(6),
    marginTop: hp(4.5),
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
