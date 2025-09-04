import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../Constants/Fonts';
import { hp, wp } from '../Constants/Responsive';

const LoginDivider = props => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}> {props?.loginwith}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1.5),
    marginHorizontal: wp(10.4),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: wp(2),
  },
  text: {
    color: '#6e6e6e',
    fontSize: wp(3.0),
    fontFamily: Fonts.semibold,
  },
});

export default LoginDivider;
