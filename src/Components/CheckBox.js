import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';

const CheckBox = props => {
  const [yes, setYes] = useState(false);

  return (
    <View>
      <View style={styles.rememberContainer}>
        <TouchableOpacity onPress={() => setYes(!yes)}>
          <MaterialIcons
            name={yes ? 'check-box' : 'check-box-outline-blank'}
            size={props?.checkSize || wp(5)}
            color={props?.checkColor || Colors.primary}
            style={styles.checkboxstyle}
          />
        </TouchableOpacity>

        <Text style={[styles.remember, props?.customTextStyle]}>
          {props?.agreetext}
          <Text style={styles.linkText}>{props?.condition}</Text>{' '}
          {props?.andthe}{' '}
          <Text style={styles.linkText}>{props?.policytext}</Text>
        </Text>
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
  },
  linkText: {
    color: 'green',
    fontFamily: Fonts.medium,
  },
  checkboxstyle: {
    marginTop: hp(0.12),
    marginLeft: wp(1),
  },
  signin: {
    backgroundColor: '#4AB95A',
    marginTop: hp(2.85),
    marginHorizontal: wp(6),
    paddingVertical: hp(1.7),
    borderRadius: wp(2),
    marginBottom: hp(1.2),
  },
  buttontext: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: wp(3.5),
    fontFamily: Fonts.medium,
  },
});
