import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';
import { Fonts } from '../Constants/Fonts';

const PremiumComponenttwo = props => {
  return (
    <View>
      <View style={styles.box}>
        <View style={{ flexDirection: 'row', marginLeft: wp(8) }}>
          <Text style={styles.price}>PKR 12999</Text>
          <Text style={styles.monthStyle}>/month</Text>
        </View>
        <Text
          style={{
            color: '#4AB95A',
            fontSize: 24,
            fontFamily: Fonts.semibold,
            marginLeft: wp(8),
          }}
        >
          Basic
        </Text>
        <Text
          style={{
            marginLeft: wp(8),
            width: 270,
            fontSize: 14,
            color: Colors.black,
            fontFamily: Fonts.medium,
            marginTop: wp(2),
          }}
        >
          {props?.status}
        </Text>

        <View style={{ marginLeft: wp(15) }}>
          <Text>Affordable monthly price. </Text>
          <Text>50 product listings.</Text>
          <Text>Validity: 30 days.</Text>
        </View>
      </View>
    </View>
  );
};

export default PremiumComponenttwo;

const styles = StyleSheet.create({
  box: {
    marginLeft: 22,
    width: wp(87.7),
    height: hp(58),
    backgroundColor: Colors.bg,
    elevation: 7,
    borderRadius: wp(5),
    marginTop: wp(6),
  },
  price: {
    fontSize: wp(10),
    fontFamily: Fonts.bold,
    marginTop: wp(16),
  },
  monthStyle: {
    fontSize: wp(4.2),
    color: Colors.month,
    marginTop: wp(21),
    fontFamily: Fonts.medium,
    marginLeft: wp(1.7),
  },
});
