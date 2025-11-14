import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';

const CheckBox = props => {
  return (
    <View style={styles.rememberContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <MaterialIcons
          name={props.checked ? 'check-box' : 'check-box-outline-blank'}
          size={props?.checkSize || wp(5)}
          color={props?.checkColor || Colors.primary}
          style={styles.checkboxstyle}
        />
      </TouchableOpacity>

      <View style={styles.PrivacyMain}>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={[styles.remember, props?.customTextStyle]}>
            {props?.agreetext}
          </Text>
        </TouchableOpacity>

        <Text style={styles.linkText}>{props?.condition}</Text>

        <Text style={[styles.remember, props?.customTextStyle]}>
          {props?.andthe}
        </Text>

        <Text style={styles.linkText}>{props?.policytext}</Text>
      </View>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  rememberContainer: {
    flexDirection: 'row',
    marginTop: hp(2.3),
  },
  remember: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.s,
    marginLeft: wp(0.5),
    color: Colors.gray
  },
  linkText: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
  },
  checkboxstyle: {
    marginTop: hp(0.1),
  },
  PrivacyMain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
