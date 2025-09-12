import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../Constants/Fonts';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';

const RequestMobileComponent = ({ icon }) => {
  return (
    <View>
      <View style={styles.innerContainer}>
        {icon && (
          <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
        )}
        <Text style={styles.textstyle}>302,999 to 500,000</Text>
      </View>
    </View>
  );
};

export default RequestMobileComponent;

const styles = StyleSheet.create({
  iconStyle: {
    width: wp(3.7),
    height: wp(3.8),
    marginLeft: wp(2.67),
    marginTop: hp(0.6),
    tintColor: '#797979',
    fontSize: 4,
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  textstyle: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.graylight,
    marginLeft: wp(1.7),
  },
  inlineContainer: {
    flexDirection: 'row',
    marginLeft: wp(3),
  },

  inlineText: {
    color: Colors.graylight,
  },
});
