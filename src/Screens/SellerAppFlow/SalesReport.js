import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../../Constants/Fonts';
import { hp, wp } from '../../Constants/Responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Fontsize } from '../../Constants/Fontsize';
import SalesComponent from '../../Components/SalesComponent';
import { MyStyling } from '../../Constants/Styling';

const SalesReport = () => {
  return (
    <SafeAreaView style={MyStyling.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.salesStyle}>Sales Report</Text>
        <View style={styles.lineContainer}>
          <Text style={styles.todayStyle}>Today</Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={20}
            color="grey"
            style={styles.iconStyle}
          />
        </View>
      </View>

      <SalesComponent width={wp(45)} />
      <SalesComponent width={wp(45)} />
      <SalesComponent width={wp(45)} />
      <SalesComponent width={wp(45)} />
    </SafeAreaView>
  );
};

export default SalesReport;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salesStyle: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.xsm1,
  },
  lineContainer: {
    flexDirection: 'row',
  },
  todayStyle: {
    fontFamily: Fonts.medium,
    // color: '#9B9B9B',
    fontSize: wp(3.5),
    marginRight: 3,
  },
});
