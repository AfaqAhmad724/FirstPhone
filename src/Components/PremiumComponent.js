// import { Pressable, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { hp, wp } from '../Constants/Responsive';
// import { Colors } from '../Constants/Colors';
// import { Image } from 'react-native-elements';
// import { Fonts } from '../Constants/Fonts';

// const PremiumComponent = ({ img, title, subtitle, days, onPress }) => {
//   return (
//     <Pressable style={styles.box} onPress={onPress}>
//       <Image source={img} style={styles.crown} />

//       <View style={styles.textContainer}>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.subtitle}>{subtitle}</Text>
//       </View>

//       <Text style={styles.days}>{days} Days Left</Text>
//     </Pressable>
//   );
// };

// export default PremiumComponent;

// const styles = StyleSheet.create({
//   box: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: hp(10),
//     backgroundColor: Colors.premiumgrey,
//     borderRadius: wp(3.4),
//     marginTop: hp(6),
//     marginLeft: wp(0.6),
//   },

//   crown: {
//     width: wp(14),
//     height: hp(8),
//     resizeMode: 'contain',
//     marginLeft: wp(3),
//     marginBottom: hp(1),
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: wp(5.2),
//     color: Colors.bg,
//     fontFamily: Fonts.medium,
//     lineHeight: hp(2.4),
//   },
//   subtitle: {
//     fontSize: wp(3),
//     color: Colors.bg,
//     fontFamily: Fonts.regular,
//     marginTop: hp(0.1),
//   },
//   days: {
//     fontSize: wp(3),
//     color: Colors.bg,
//     fontFamily: Fonts.regular,
//     marginBottom: wp(12),
//     marginRight: wp(3),
//   },
// });


import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Images } from '../Assets';
import { Image } from 'react-native';
import { Fontsize } from '../Constants/Fontsize';

const PremiumComponent = ({ img, title, subtitle, days, onPress, marginTop }) => {
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        source={Images.Background}
        style={[styles.box, { marginTop: marginTop }]}
        imageStyle={styles.bgImage}
      >
        <Image source={img} style={styles.crown} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.daysStyle}>
          <Image source={Images.clock} style={styles.imgStyle} />
          <Text style={styles.days}>{days} Days Left</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default PremiumComponent;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(10),
    borderRadius: wp(3.4),
    marginTop: hp(6),
    marginLeft: wp(0.6),
    overflow: 'hidden', // 🔹 important for rounded corners with ImageBackground
  },
  bgImage: {
    borderRadius: wp(3.4), // match container radius
  },
  crown: {
    width: wp(17),
    height: wp(17),
    resizeMode: 'contain',
    marginLeft: wp(3),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: hp(1)
  },
  title: {
    fontSize: Fontsize.lm,
    color: Colors.bg,
    fontFamily: Fonts.medium,
    lineHeight: hp(2.4),
  },
  subtitle: {
    fontSize: Fontsize.sm,
    color: Colors.bg,
    fontFamily: Fonts.regular,
    marginTop: hp(0.3),
  },
  days: {
    fontSize: wp(3),
    color: Colors.bg,
    fontFamily: Fonts.regular,
    marginRight: wp(1),
    paddingHorizontal: wp(1),
  },
  imgStyle: {
    marginTop: hp(.2),
    width: wp(3),
    height: wp(3),
  },
  daysStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: hp(1)
  }
});
