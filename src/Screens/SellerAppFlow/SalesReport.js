import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../../Constants/Fonts';
import { hp, wp } from '../../Constants/Responsive'; // <-- import hp, wp
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // <-- import icon library
import { Fontsize } from '../../Constants/Fontsize';
import SalesComponent from '../../Components/SalesComponent';

const SalesReport = () => {
  return (
    <SafeAreaView style={styles.container}>
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
      <SalesComponent />
    </SafeAreaView>
  );
};

export default SalesReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },

  innerContainer: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salesStyle: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.xsm1,
    marginLeft: 17,
  },
  lineContainer: {
    flexDirection: 'row',
  },
  todayStyle: {
    fontFamily: Fonts.medium,
    color: '#9B9B9B',
    fontSize: wp(3.5),
    marginRight: 3,
  },
  iconStyle: {
    marginRight: 10,
  },
});
