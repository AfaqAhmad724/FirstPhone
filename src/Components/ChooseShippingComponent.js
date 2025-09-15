import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';

const ChooseShippingComponent = props => {
  return (
    <View>
      <View style={[styles.tagStyle, props.id === '2' && { marginTop: hp(4) }]}>
        <Image
          source={props.icon || Images.addressLocation}
          style={[
            styles.locationStyle,
            props.iconColor && { tintColor: props.iconColor },
          ]}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.title,
            props.addressColor && { color: props.addressColor },
          ]}
        >
          {props?.address}
        </Text>
      </View>

      <View style={styles.innerDefine}>
        <Text
          style={[
            styles.addressStyle,
            props.statusColor && { color: props.statusColor },
          ]}
        >
          {props?.status}
        </Text>
        <Image source={Images.delete} style={styles.deleteStyle} />
      </View>

      <View
        style={[
          styles.divider,
          props.dividerColor && { borderBottomColor: props.dividerColor },
        ]}
      />
    </View>
  );
};

export default ChooseShippingComponent;

const styles = StyleSheet.create({
  tagStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(5),
  },
  locationStyle: {
    width: wp(5),
    height: wp(5),
    marginRight: wp(2),
    marginLeft: 7,
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: wp(3.5),
    color: Colors.primary,
  },
  innerDefine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(0.2),
  },
  addressStyle: {
    fontFamily: Fonts.regular,
    fontSize: wp(3.1),
    color: Colors.primary,
    width: wp(55),
    marginLeft: 32.6,
  },
  deleteStyle: {
    width: wp(6),
    height: hp(3),
    resizeMode: 'contain',
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primary,
    marginTop: hp(1.8),
    marginLeft: wp(1),
  },
});
