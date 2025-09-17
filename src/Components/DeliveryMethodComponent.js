import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { hp, wp } from '../Constants/Responsive';

const DeliveryMethodComponent = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.row}>
        <View
          style={[
            styles.iconWrapper,
            isSelected && styles.iconWrapperSelected,
          ]}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={[
              styles.icon,
              item.subtitle === 'Secure online payment' && styles.onlinePaymentIcon,
            ]}
            tintColor={isSelected ? Colors.primary : Colors.shadowgray}
          />

        </View>

        <View style={styles.textWrapper}>
          <Text
            style={[
              styles.title,
              isSelected && styles.titleSelected,
            ]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              styles.subtitle,
              isSelected && styles.subtitleSelected,
            ]}
          >
            {item.subtitle}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.divider,
          isSelected ? styles.dividerSelected : styles.dividerDefault,
        ]}
      />
    </TouchableOpacity>
  );
};

export default DeliveryMethodComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(0.6),
  },
  row: {
    marginTop: hp(.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: '#0000000D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapperSelected: {
    backgroundColor: Colors.primary + '20',
  },
  icon: {
    width: wp(7),
    height: wp(7),
  },
  onlinePaymentIcon: {
    width: wp(6),
    height: wp(6),
  },
  textWrapper: {
    flex: 1,
    marginLeft: wp(3),
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: wp(3.5),
    color: Colors.black,
  },
  titleSelected: {
    color: Colors.primary,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: wp(2.8),
    color: Colors.shadowgray,
  },
  subtitleSelected: {
    color: Colors.primary,
  },
  divider: {
    borderBottomWidth: 1,
    marginTop: hp(1),
  },
  dividerDefault: {
    borderBottomColor: Colors.shadowgray,
    opacity: 0.2,
  },
  dividerSelected: {
    borderBottomColor: Colors.primary,
    opacity: 0.6,
  },
});
