import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Images } from '../Assets';
import { Colors } from '../Constants/Colors';

const SalesComponent = () => {
  const data = [
    {
      id: 1,
      title: 'Total Sales',
      value: 'PKR 1,543,788',
      color: Colors.primary,
      icon: Images.growth,
    },
    {
      id: 2,
      title: 'Pay Online',
      value: 'PKR 343,788',
      color: '#EA2930',
      icon: Images.payOnline,
    },
    {
      id: 3,
      title: 'Cash On Delivery',
      value: 'PKR 543,788',
      color: '#E5C530',
      icon: Images.COD,
    },
    {
      id: 4,
      title: 'GoShop',
      value: 'PKR 243,788',
      color: '#555555',
      icon: Images.goShop,
    },
  ];

  return (
    <View style={styles.grid}>
      {data.map(item => (
        <View key={item.id} style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: item.color }]}>
            {typeof item.icon === 'string' ? (
              <MaterialIcons name={item.icon} size={wp(7)} color="#fff" />
            ) : (
              <Image
                source={item.icon}
                style={{ width: wp(7), height: wp(7), tintColor: '#fff' }}
                resizeMode="contain"
              />
            )}
          </View>
          <View style={styles.textBox}>
            <Text
              style={[
                styles.title,
                (item.title === 'GoShop' || item.title === 'Pay Online') &&
                  styles.shiftTitle,
                item.title === 'Cash On Delivery' && styles.cashTitle,
              ]}
            >
              {item.title}
            </Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default SalesComponent;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 16,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: wp(1.7),
    marginBottom: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 0.3,
    height: hp(14),
    marginHorizontal: 3.11,
  },
  iconBox: {
    width: wp(13),
    height: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    marginLeft: wp(3),
  },
  title: {
    fontFamily: Fonts.robotoBold,
    fontSize: wp(3.2),
    color: '#000',
    marginLeft: 13,
  },
  value: {
    fontFamily: Fonts.medium,
    fontSize: wp(3.5),
    color: '#B5B5B5',
    marginTop: hp(0.9),
  },
  shiftTitle: {
    marginLeft: wp(3.6),
  },
  cashTitle: {
    fontSize: wp(2.8),
    marginLeft: wp(0.1),
  },
});
