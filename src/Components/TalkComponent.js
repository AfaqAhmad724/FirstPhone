import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';
import { Images } from '../Assets';

const TalkComponent = props => {
  return (
    <View
      style={{
        paddingVertical: wp(2),
      }}
    >
      <View style={styles.container}>
        <Image source={props?.profileImage} style={styles.imageStyle} />

        <View style={styles.textContainer}>
          <Text style={styles.name}>{props?.name}</Text>
          <View style={styles.activeRow}>
            <View style={styles.greenDot} />
            <Text style={styles.active}>{props?.activeText}</Text>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity>
            <Image source={Images.phone} style={styles.phoneStyle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.block}>Block</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TalkComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: wp(13),
    height: wp(13),
    borderRadius: wp(7),
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: wp(2),
  },
  name: {
    fontSize: Fontsize.xsm,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  activeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenDot: {
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(1.3),
    backgroundColor: Colors.primary,
    marginRight: wp(1),
    marginBottom: hp(0.3),
  },
  active: {
    fontSize: Fontsize.xs,
    color: Colors.lightgraay,
    fontFamily: Fonts.semibold,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4.1),
  },
  block: {
    fontSize: Fontsize.m,
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  phoneStyle: {
    width: wp(5),
    height: hp(2.5),
  },
});
