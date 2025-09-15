import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React from 'react';
import { Colors } from '../../Constants/Colors';
import DeviceComponent from '../../Components/DeviceComponent';
import Btn from '../../Components/Btn';
import { MyStyling } from '../../Constants/Styling';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';

const DeviceReceipt = () => {
  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <DeviceComponent
            name="Brand"
            placeholder="Enter Device Brand"
            placeholdertextColor={Colors.emailcolor}
          />

          <DeviceComponent
            name="Model"
            placeholder="Enter Device Model"
            placeholdertextColor={Colors.emailcolor}
          />

          <DeviceComponent
            name="IMEI1"
            placeholder="Enter IMEI1"
            placeholdertextColor={Colors.emailcolor}
          />

          <DeviceComponent
            name="IMEI2"
            placeholder="Enter IMEI2"
            placeholdertextColor={Colors.emailcolor}
          />

          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.plusIcon}>＋</Text>
            <Text style={styles.addBtnText}>Add More device</Text>
          </TouchableOpacity>

          <View style={styles.btnContainer}>
            <Btn title="Create Receipt" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeviceReceipt;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Colors.bg,
    backgroundColor: 'red',
  },
  innerContainer: {
    marginTop: hp(2.5),
  },
  btnContainer: {
    marginBottom: hp(13),
    marginTop: hp(0.2),
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.black,
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
    marginTop: hp(2.7),
    backgroundColor: Colors.offWhite,
  },
  plusIcon: {
    fontSize: wp(4),
    fontFamily: Fonts.bold,
    marginRight: wp(2),
    color: Colors.black,
  },
  addBtnText: {
    fontFamily: Fonts.medium,
    fontSize: wp(4),
    color: Colors.black,
  },
});
