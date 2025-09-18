import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { wp, hp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';

const SalesComponent = props => {
  const iconSize = props.iconSize || wp(6);
  const boxHeight = props.height || hp(13.5); // default height agar prop na mile

  return (
    <Pressable style={[styles.box, { height: boxHeight }, props.style]} onPress={props?.onPress}>
      <View style={styles.row}>
        {/* Icon Box */}
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
                width: iconSize,
                height: iconSize,
                resizeMode: 'contain',
                tintColor: props?.iconColor || Colors.white,
              }}
            />
          )}
        </View>

        {/* Text Container */}
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.saleStyle,
              props.textStyle,
              {
                color: props.salesColor || Colors.black,
                marginLeft:
                  props.textStyle?.marginLeft !== undefined
                    ? props.textStyle.marginLeft
                    : wp(1.5), // default shift
              },
            ]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {props?.sales}
          </Text>

          <Text
            style={[
              styles.priceStyle,
              props.priceStyle,
              {
                color: props.priceColor || Colors.b5,
                marginLeft:
                  props.priceStyle?.marginLeft !== undefined
                    ? props.priceStyle.marginLeft
                    : wp(1), // default shift
              },
            ]}
          >
            {props?.price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SalesComponent;

const styles = StyleSheet.create({
  box: {
    width: wp(44.2),
    height: hp(13.5),
    elevation: 2,
    backgroundColor: Colors.bg,
    justifyContent: 'center',
    paddingHorizontal: wp(2),
    borderRadius: wp(0.4),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorBox: {
    width: wp(12),
    height: wp(11.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp(2),
  },
  textContainer: {
    marginLeft: wp(1),
    justifyContent: 'center',
    marginBottom: wp(2),
  },
  saleStyle: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.fz,
  },
  priceStyle: {
    fontFamily: Fonts.semibold,
    fontSize: wp(4),
    marginTop: hp(0.1),
  },
});
