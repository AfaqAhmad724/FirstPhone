import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import Icon from 'react-native-vector-icons/Feather';

const LineItem = ({ text }) => (
  <View style={styles.lineRow}>
    <View style={styles.iconWrapper}>
      <Icon name="check" size={wp(3.5)} color={Colors.primary} />
    </View>
    <Text style={styles.lineText}>{text}</Text>
  </View>
);

const PremiumComponenttwo = props => {
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.boxing}>
          <Text style={styles.price}>PKR 12999</Text>
          <Text style={styles.monthStyle}>/month</Text>
        </View>
        <Text style={styles.basic}>Basic</Text>
        <Text style={styles.status}>{props?.status}</Text>

        <View style={styles.linesContainer}>
          <LineItem text={props?.lineone} />
          <LineItem text={props?.linetwo} />
          <LineItem text={props?.linethree} />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttontext}>Select Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PremiumComponenttwo;

const styles = StyleSheet.create({
  box: {
    marginLeft: wp(1.3),
    width: wp(87.7),
    height: hp(58),
    backgroundColor: Colors.bg,
    elevation: 7,
    borderRadius: wp(5),
    marginTop: wp(6),
  },
  price: {
    fontSize: Fontsize.xl,
    fontFamily: Fonts.bold,
    marginTop: wp(16),
  },
  monthStyle: {
    fontSize: Fontsize.sm,
    color: Colors.month,
    marginTop: wp(19),
    fontFamily: Fonts.medium,
    marginLeft: wp(1.7),
  },
  boxing: {
    flexDirection: 'row',
    marginLeft: wp(8),
  },
  basic: {
    color: Colors.primary,
    fontSize: wp(6),
    fontFamily: Fonts.semibold,
    marginLeft: wp(8),
  },
  status: {
    marginLeft: wp(8),
    width: wp(72),
    fontSize: Fontsize.xsm1,
    color: Colors.black,
    fontFamily: Fonts.medium,
    marginTop: wp(2),
  },
  linesContainer: {
    marginLeft: wp(8),
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
    borderRadius: wp(5),
    marginHorizontal: wp(15),
    marginVertical: wp(19),
  },
  buttontext: {
    textAlign: 'center',
    color: Colors.bg,
    marginVertical: hp(1.2),
    fontSize: Fontsize.sm,
    fontFamily: Fonts.medium,
  },
});
