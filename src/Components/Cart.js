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
      <Image
        source={props?.image}
        style={styles.imagestyle}
        resizeMode="contain"
      />
      <View style={styles.rightContent}>
        <View style={styles.topRow}>
          <Text style={styles.phonetext}>{props?.phone}</Text>
          <Image
            source={Images.delete}
            style={styles.deleteIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.boxone}>
          <Image source={Images.mobile} style={styles.imgmobile} />
          <Text style={styles.shopName}> {props?.mobile}</Text>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.quantityBox}>
            <TouchableOpacity style={styles.qtyBtn} onPress={decreaseQty}>
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyNumber}>{quantity}</Text>

            <TouchableOpacity style={styles.qtyBtn} onPress={increaseQty}>
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.price}>{props?.priceprop}</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: Colors.lg,
    width: wp('90.6%'),
    height: hp('15.2%'),
    marginTop: hp('2.9%'),
    borderRadius: wp('2.1%'),
    padding: wp('3%'),
  },
  imagestyle: {
    width: wp('20%'),
    height: wp('25%'),
  },
  rightContent: {
    flex: 1,
    marginLeft: wp('1.2%'),
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phonetext: {
    fontFamily: Fonts.semibold,
    color: Colors.black,
    marginTop: 3,
    fontSize: Fontsize.xsm,
  },
  deleteIcon: {
    width: wp('6%'),
    height: wp('6%'),
  },
  shopName: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.xs,
    color: Colors.eyecolor,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp('1'),
    backgroundColor: Colors.lg,
    marginBottom: hp('1.2%'),
    padding: wp('0.5%'),
    borderColor: Colors.lf,
    marginLeft: wp(0.2),
  },
  qtyBtn: {
    width: wp('3.2%'),
    height: wp('3.4%'),
    borderRadius: wp('1.6%'),
    backgroundColor: Colors.mediumGrey,
  },
  qtyText: {
    fontSize: Fontsize.xxxs,
    fontFamily: Fonts.semibold,
    color: 'white',
    textAlign: 'center',
  },
  qtyNumber: {
    fontSize: Fontsize.xs,
    fontFamily: Fonts.semibold,
    marginHorizontal: wp('4%'),
    color: '#000',
  },

  price: {
    fontFamily: Fonts.semibold,
    color: '#000',
  },
  imgmobile: {
    marginTop: hp('0.3%'),
  },
  boxone: {
    flexDirection: 'row',
  },
});
