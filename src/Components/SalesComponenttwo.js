import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { wp, hp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';

const SalesComponenttwo = props => {
  const boxSize = wp(12);

  return (
    <TouchableOpacity style={[styles.box, props.style]} onPress={props?.onPress}>
      <View style={styles.row}>
        <View
          style={[
            styles.colorBox,
            { backgroundColor: props?.color || Colors.primary },
          ]}
        >
          {props?.icon && (
            <Image
              source={props.icon}
              style={{
                width: props.isGreenBox ? boxSize * 0.7 : wp(5),
                height: props.isGreenBox ? boxSize * 0.6 : wp(5),
                resizeMode: 'contain',
                tintColor: props?.iconColor || Colors.white,
              }}
            />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.saleStyle, props?.textStyle]}>
            {props?.sales}
          </Text>
          <Text style={styles.priceStyle}>{props?.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SalesComponenttwo;

const styles = StyleSheet.create({
  box: {
    width: wp(44),
    height: hp(13),
    elevation: 2,
    backgroundColor: Colors.bg,
    justifyContent: 'center',
    paddingHorizontal: wp(2),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorBox: {
    width: wp(12.5),
    height: wp(12.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp(0.5),
  },
  textContainer: {
    marginLeft: wp(3),
    justifyContent: 'center',
  },
  saleStyle: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xu,
    color: Colors.black,
    marginLeft: wp(0.1),
    marginBottom: wp(1.4),
  },
  priceStyle: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.fu,
    color: Colors.b5,
    marginBottom: hp(1.4),
  },
});
