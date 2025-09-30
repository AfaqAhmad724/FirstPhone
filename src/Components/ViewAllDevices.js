import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { hp, wp } from '../Constants/Responsive';
import { useNavigation } from '@react-navigation/native';

const ViewAllDevices = ({ title, showViewAll = true }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.nearbyView}>
      <Text style={styles.nearbyText}>{title}</Text>
      {showViewAll && (
        <TouchableOpacity
          onPress={() => navigation.navigate('AllDevices', { title })}
        >
          <Text style={[styles.nearbyText, { color: Colors.primary }]}>
            View all
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ViewAllDevices;

const styles = StyleSheet.create({
  nearbyText: {
    color: Colors.black,
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.xsm,
  },
  nearbyView: {
    marginTop: hp(1),
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
