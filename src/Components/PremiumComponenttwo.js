import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const LineItem = ({ text }) => (
  <View style={styles.lineRow}>
    <View style={styles.iconWrapper}>
      <Icon name="check" size={wp(3.5)} color={Colors.primary} />
    </View>
    <Text style={styles.lineText}>{text}</Text>
  </View>
);

const PremiumComponenttwo = props => {
  const navigation = useNavigation()
  return (
    <View style={styles.box}>
      <View style={styles.boxing}>
        <Text style={styles.price}>{props.price}</Text>
        <Text style={styles.monthStyle}>/month</Text>
      </View>
      <Text style={styles.basic}>{props.status}</Text>
      <Text style={styles.status}>{props?.description}</Text>

      <View style={styles.linesContainer}>
        <LineItem text={props?.lineone} />
        <LineItem text={props?.linetwo} />
        <LineItem text={props?.linethree} />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SellerDrawerNavigation')}>
        <Text style={styles.buttontext}>Select Plan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PremiumComponenttwo;

const styles = StyleSheet.create({
  box: {
    width: wp(88),
    height: hp(58),
    backgroundColor: Colors.bg,
    elevation: 7,
    borderRadius: wp(5),
    marginTop: wp(6),
    paddingHorizontal: wp(8),
    marginHorizontal: wp(1)
  },
  price: {
    fontSize: Fontsize.xxl,
    fontFamily: Fonts.bold,
    marginTop: wp(16),
  },
  monthStyle: {
    fontSize: Fontsize.sm1,
    color: Colors.month,
    marginTop: wp(19),
    fontFamily: Fonts.medium,
    marginLeft: wp(1.7),
  },
  boxing: {
    flexDirection: 'row',
  },
  basic: {
    color: Colors.primary,
    fontSize: Fontsize.fs,
    fontFamily: Fonts.semibold,
  },
  status: {
    fontSize: Fontsize.xsm1,
    color: Colors.black,
    fontFamily: Fonts.medium,
    marginTop: wp(2),
  },
  linesContainer: {
    marginTop: wp(3),
  },
  lineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(2),
  },
  iconWrapper: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    backgroundColor: Colors.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineText: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xsm1,
    marginLeft: wp(2),
    color: Colors.black,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    borderRadius: wp(6),
    marginHorizontal: wp(5),
    marginTop: hp(9)
  },
  buttontext: {
    textAlign: 'center',
    color: Colors.bg,
    marginVertical: hp(1.2),
    fontSize: Fontsize.sm,
    fontFamily: Fonts.medium,
  },
});
