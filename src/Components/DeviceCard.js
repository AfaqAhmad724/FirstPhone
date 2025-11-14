import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Images } from '../Assets';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { hp, wp } from '../Constants/Responsive';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const DeviceCard = ({ data }) => {
  const navigation = useNavigation();
  const userRole = useSelector(state => state?.ROLE?.userData);

  const handleNavigation = () => {
    if (userRole == 'Customer') {
      navigation.navigate('DeviceDetail');
    } else {
      navigation.navigate('Preview');
    }
  };
  return (
    <TouchableOpacity
      style={styles.cardMain}
      onPress={() => handleNavigation()}
    >
      {userRole == 'Customer' && (
        <View style={styles.repairingView}>
          <Image source={Images.repairing} style={styles.reparingImg} />
          <Text style={styles.repairing}>Repairing Services </Text>
        </View>
      )}

      <Image
        // source={{ uri: data?.image }}
        source={data?.image}

        style={styles.img}
        resizeMode="contain"
      />

      <Text style={styles.titleText} numberOfLines={1}>
        {data?.title}
      </Text>

      <View style={styles.shopView}>
        {userRole == 'Customer' ? (
          <View style={styles.ShopAndPerson}>
            <Image
              source={Images.shopName}
              style={styles.shopImg}
              resizeMode="contain"
            />
            <Text style={styles.shopText} numberOfLines={1}>
              {data?.shopName}
            </Text>
          </View>
        ) : (
          <View style={styles.ShopAndPerson}>
            <Image
              source={Images.personName}
              style={styles.personImg}
              resizeMode="contain"
            />
            <Text style={styles.shopText} numberOfLines={1}>
              {data?.personName}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.priceView}>
        <View style={styles.priceBox}>
          <Text style={styles.rsText}>Rs</Text>
          <View style={{ flexShrink: 1 }}>
            <Text style={styles.priceText} numberOfLines={1}>
              {data?.price}
            </Text>
          </View>
        </View>

        <View style={styles.locationBox}>
          <Image
            source={Images.colorLocation}
            tintColor={Colors.primary}
            style={styles.menuIcon}
            resizeMode="contain"
          />
          <View style={{ flexDirection: 'row', flexShrink: 1 }}>
            <Text
              style={[styles.distanceText, { flexShrink: 1 }]}
              numberOfLines={1}
            >
              {data?.distance}
            </Text>
            <Text style={styles.distanceText}> km</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DeviceCard;

const styles = StyleSheet.create({
  cardMain: {
    marginVertical: hp(1),
    paddingVertical: hp(1),
    width: wp(42),
    paddingHorizontal: wp(2),
    marginHorizontal: wp(0.5),
    backgroundColor: Colors.bg,
    shadowColor: Colors.shadowColor,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: wp(2),
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },

  repairingView: {
    flex: 1,
    right: wp(0.1),
    padding: wp(0.3),
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: wp(0.5),
    borderTopRightRadius: wp(1),
    backgroundColor: Colors.primary,
  },

  repairing: {
    color: Colors.bg,
    fontSize: Fontsize.xxxxs,
    fontFamily: Fonts.semibold,
    marginLeft: wp(0.5),
  },
  reparingImg: { width: wp(1.5), height: wp(1.5) },

  img: {
    width: wp(25),
    height: wp(25),
    alignSelf: 'center',
    marginTop: wp(2),
  },

  titleText: {
    marginTop: hp(0.5),
    color: Colors.black,
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.xs2,
  },

  shopText: {
    flex: 1,
    color: Colors.gray,
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xxs1,
    marginHorizontal: wp(1),
  },

  shopView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red'
  },

  priceBox: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  priceText: {
    color: Colors.primary,
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.s,
    marginLeft: wp(1),
  },

  rsText: {
    color: Colors.primary,
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.s,
  },

  locationBox: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  distanceText: {
    color: Colors.gray,
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xxs,
  },

  menuIcon: {
    width: wp(3.7),
    height: wp(3.7),
    marginRight: wp(0.5),
  },
  shopImg: {
    width: wp(3.5),
    height: wp(3.5),
  },
  personImg: {
    width: wp(3.3),
    height: wp(3.3),
  },
  ShopAndPerson: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
