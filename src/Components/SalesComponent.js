// // import { StyleSheet, Text, View } from 'react-native';
// // import React from 'react';
// // import { hp, wp } from '../Constants/Responsive';

// // const SalesComponent = () => {
// //   return (
// //     <View>
// //       <View style={styles.innerContainer}></View>
// //     </View>
// //   );
// // };

// // export default SalesComponent;

// // const styles = StyleSheet.create({
// //   innerContainer: {
// //     backgroundColor: 'red',
// //     width: wp(47),
// //     height: hp(15),
// //     flexDirection: 'row',
// //   },
// // });

// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { hp, wp } from '../Constants/Responsive';

// const SalesComponent = () => {
//   return (
//     <View style={styles.innerContainer}>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}>
//         <Text style={styles.textStyle}>Total Sales</Text>
//         <Text style={styles.textStyle}>123</Text>
//       </View>
//     </View>
//   );
// };

// export default SalesComponent;

// const styles = StyleSheet.create({
//   innerContainer: {
//     backgroundColor: 'white',
//     width: wp(47),
//     height: hp(15),
//     flexDirection: 'row',
//     alignItems: 'center', // vertically center children
//     paddingHorizontal: wp(3),
//     marginVertical: hp(1),
//     borderWidth: 1,
//   },
//   box1: {
//     width: wp(16),
//     height: wp(17),
//     backgroundColor: 'blue',
//   },
//   box2: {
//     marginLeft: wp(4),
//   },
//   textStyle: {
//     color: 'white',
//     fontSize: wp(3.5),
//   },
// });

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { wp } from '../Constants/Responsive';

const FourBoxes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
    </View>
  );
};

export default FourBoxes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    marginTop: wp(6),
  },
  box: {
    width: '49%',
    height: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 10,
    elevation: 1,
    backgroundColor: 'red',
  },
});
