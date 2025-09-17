import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import React, { useState } from 'react';
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
import { shippingData } from '../../Constants/DummyData';

const ChooseShipping = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState('1');

  const renderItem = ({ item }) => (
    <ChooseShippingComponent
      item={item}
      isSelected={selectedId === item.id}
      onPress={() => setSelectedId(item.id)}
    />
  );

  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(5) }}
      >
        <MainHeader title={'Choose Shipping'} />
        <Text style={styles.headingStyle}>Shipping Address</Text>

        <FlatList
          data={shippingData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('ShipingAddress')}
            >
              <Text style={styles.plusIcon}>＋</Text>
              <Text style={styles.addBtnText}>Add New Shipping Address</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: hp(0.4) }}
        />

        <Btn
          title={'Continue'}
          onPress={() => navigation.navigate('PlaceOrder')}
        />
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
    fontSize: Fontsize.sm,
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
    marginTop: hp(4.3),
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
