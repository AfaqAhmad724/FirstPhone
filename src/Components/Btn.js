import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Colors } from '../Constants/Colors';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';

export default function Btn({
  title,
  loader,
  btnContainer,
  onPress,
  btnTitle,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, btnContainer]}
      disabled={loader}
      onPress={onPress}
    >
      {loader ? (
        <ActivityIndicator size={'large'} color={Colors.bg} />
      ) : (
        <Text style={[styles.title, btnTitle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: wp(90),
    paddingVertical: wp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    alignSelf: 'center',
    marginTop: hp(2),
  },
  title: {
    textAlign: 'center',
    color: Colors.bg,
    fontFamily: Fonts.medium,
    fontSize: Fontsize.sm1,
  },
});
