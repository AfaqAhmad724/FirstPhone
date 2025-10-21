// import {
//   ActivityIndicator,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// import { Colors } from '../Constants/Colors';
// import { hp, wp } from '../Constants/Responsive';
// import { Fonts } from '../Constants/Fonts';
// import { Fontsize } from '../Constants/Fontsize';

// export default function Btn({
//   title,
//   loader,
//   btnContainer,
//   onPress,
//   btnTitle,
//   image,
// }) {
//   return (
//     <TouchableOpacity
//       style={[styles.container, btnContainer]}
//       disabled={loader}
//       onPress={onPress}
//     >
//       {image && <Image source={image} style={styles.imgStyle} />}
//       {loader ? (
//         <ActivityIndicator size={'large'} color={Colors.bg} />
//       ) : (
//         <Text
//           style={[
//             styles.title,
//             btnTitle,
//             { marginLeft: image ? wp(2) : wp(0) },
//           ]}
//         >
//           {title}
//         </Text>
//       )}
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.primary,
//     width: wp(90),
//     paddingVertical: wp(2.5),
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: wp(2),
//     alignSelf: 'center',
//     marginTop: hp(2),
//     flexDirection: 'row',
//   },
//   title: {
//     textAlign: 'center',
//     color: Colors.bg,
//     fontFamily: Fonts.medium,
//     fontSize: Fontsize.sm1,
//   },
//   imgStyle: {
//     marginBottom: hp(0.6),
//     width: wp(4.3),
//     height: wp(4.3),
//   },
// });

import {
  ActivityIndicator,
  Image,
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
  image,
  disabled, // ✅ add disabled prop support (optional)
}) {
  const isDisabled = loader || disabled; // ✅ unified control

  return (
    <TouchableOpacity
      style={[
        styles.container,
        btnContainer,
        isDisabled && { opacity: 0.6 }, // ✅ dim if not pressable
      ]}
      disabled={isDisabled} // ✅ button not touchable
      onPress={isDisabled ? null : onPress} // ✅ prevent accidental touch
      activeOpacity={0.8}
    >
      {image && <Image source={image} style={styles.imgStyle} />}
      {loader ? (
        <ActivityIndicator size={'large'} color={Colors.bg} />
      ) : (
        <Text
          style={[
            styles.title,
            btnTitle,
            { marginLeft: image ? wp(2) : wp(0) },
          ]}
        >
          {title}
        </Text>
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
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    color: Colors.bg,
    fontFamily: Fonts.medium,
    fontSize: Fontsize.sm1,
  },
  imgStyle: {
    marginBottom: hp(0.6),
    width: wp(4.3),
    height: wp(4.3),
  },
});
