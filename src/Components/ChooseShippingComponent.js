import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';

const ChooseShippingComponent = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.tagStyle}>
        <Image
          source={item.icon || Images.addressLocation}
          style={[
            styles.locationStyle,
            { tintColor: isSelected ? Colors.primary : '#656363' },
          ]}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.title,
            { color: isSelected ? Colors.primary : Colors.black },
          ]}
        >
          {item?.address}
        </Text>
      </View>

      {/* Address Text + Delete */}
      <View style={styles.innerDefine}>
        <Text
          style={[
            styles.addressStyle,
            { color: isSelected ? Colors.primary : '#656363' },
          ]}
        >
          {item?.status}
        </Text>
        <Image source={Images.delete} style={styles.deleteStyle} />
      </View>

      <View
        style={[
          styles.divider,
          {
            borderBottomColor: isSelected
              ? Colors.primary
              : Colors.dividerColor,
          },
        ]}
      />
    </TouchableOpacity>
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
  },
  innerDefine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(0.2),
  },
  addressStyle: {
    fontFamily: Fonts.regular,
    fontSize: wp(3.1),
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
    marginTop: hp(1.8),
    marginLeft: wp(1),
  },
});
