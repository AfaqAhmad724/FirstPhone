import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';
import { Images } from '../Assets';

const Cart = props => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <View style={styles.box}>
      {/* LEFT */}
      <View style={styles.leftSection}>
        <Image
          source={props?.image}
          style={styles.imagestyle}
          resizeMode="contain"
        />
      </View>

      {/* CENTER */}
      <View style={styles.centerSection}>
        <Text style={styles.phonetext} numberOfLines={2}>
          {props?.phone}
        </Text>

        <View style={styles.boxone}>
          <Image source={Images.mobile} style={styles.imgmobile} />
          <Text
            style={[styles.shopName, { flexShrink: 1, maxWidth: wp('50%') }]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {props?.mobile}
          </Text>
        </View>

        {/* Quantity Box */}
        <View style={styles.quantityBox}>
          {/* Minus */}
          <TouchableOpacity style={styles.qtyBtn} onPress={decreaseQty}>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>

          {/* Separator Line */}
          <View style={styles.verticalLine} />

          {/* Quantity Number */}
          <Text style={styles.qtyNumber}>{quantity}</Text>

          {/* Separator Line */}
          <View style={styles.verticalLine} />

          {/* Plus */}
          <TouchableOpacity style={styles.qtyBtn} onPress={increaseQty}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* RIGHT */}
      <View style={styles.rightSection}>
        <TouchableOpacity>
          <Image
            source={Images.delete}
            style={styles.deleteIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.price} numberOfLines={2}>
          RS {props?.priceprop}
        </Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: Colors.offWhite,
    marginTop: hp(1.5),
    borderRadius: wp(3),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
  },

  leftSection: {
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagestyle: {
    width: wp('20%'),
    height: wp('25%'),
  },

  centerSection: {
    flex: 1,
    marginLeft: wp(2),
    justifyContent: 'space-evenly',
  },
  phonetext: {
    fontFamily: Fonts.semibold,
    color: Colors.black,
    fontSize: Fontsize.xsm,
  },
  boxone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgmobile: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
    marginRight: wp(1),
  },
  shopName: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.xs,
    color: Colors.eyecolor,
  },

  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderRadius: wp(1.3),
    backgroundColor: Colors.offWhite,
    borderColor: Colors.lf,
    alignSelf: 'flex-start',
  },
  qtyBtn: {
    width: wp(3.5),
    height: wp(3.5),
    borderRadius: wp(3),
    backgroundColor: Colors.mediumGrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(2)
  },
  qtyText: {
    fontSize: Fontsize.xxxs,
    fontFamily: Fonts.semibold,
    color: Colors.bg,
    textAlign: 'center',
  },
  qtyNumber: {
    marginTop: hp(.4),
    fontSize: Fontsize.s,
    fontFamily: Fonts.semibold,
    color: Colors.black,
    marginHorizontal: wp(3),
  },
  verticalLine: {
    width: .5,
    height: '100%',
    backgroundColor: Colors.silverGrey,
  },
  rightSection: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    width: wp(6),
    height: wp(6),
  },
  price: {
    fontFamily: Fonts.semibold,
    color: Colors.black,
    fontSize: Fontsize.sm,
    width: wp(26),
    textAlign: 'right'

  },
});
