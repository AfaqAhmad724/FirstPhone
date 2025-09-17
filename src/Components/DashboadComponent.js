import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';

const DashboadComponent = props => {
  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.textStyle}>
          {props?.order}
          <Text style={styles.subText}>{props?.num}</Text>
        </Text>
        <View style={styles.row}>
          {props?.icon && (
            <Image
              source={props.icon}
              style={styles.icon}
              resizeMode="contain"
            />
          )}
          <Text style={styles.shopText}>{props?.shopName}</Text>
        </View>

        {props?.price && (
          <Text style={styles.greenText}>
            Total Price: <Text style={styles.subText}>{props.price}</Text>
          </Text>
        )}

        {props?.products && (
          <Text style={styles.greenText}>
            Total Products: <Text style={styles.subText}>{props.products}</Text>
          </Text>
        )}

        {/* Date */}
        {props?.date && (
          <Text style={styles.greenText}>
            Date: <Text style={styles.subText}>{props.date}</Text>
          </Text>
        )}
      </View>
    </View>
  );
};

export default DashboadComponent;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F3F4F5',
    width: wp(90.8),
    // height: 70,
    marginLeft: wp(0.4),
    borderRadius: wp(1),
    padding: wp(3),
  },
  textStyle: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
    fontSize: Fontsize.fz,
  },
  subText: {
    color: '#929293',
    // fontFamily: Fonts.regular,
    fontFamily: Fonts.medium,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: wp(4.5),
    width: wp(4.5),
    marginRight: wp(1),
  },
  shopText: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.fz,
    fontFamily: Fonts.medium,
    color: '#00000066',
  },
  greenText: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
    fontSize: Fontsize.s,
    fontSize: Fontsize.fz,
  },
});
