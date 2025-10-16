import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';

const CNICPics = ({ src }) => {
  return (
    <View style={styles.noImageBox}>
      <Image source={src} style={styles.imgStyle} />
    </View>
  );
};

export default CNICPics;

const styles = StyleSheet.create({
  noImageBox: {
    opacity: 0.6,
    margin: wp(1),
    width: wp(43),
  },
  imgStyle: {
    width: wp(46),
    height: wp(28),
  },
});
