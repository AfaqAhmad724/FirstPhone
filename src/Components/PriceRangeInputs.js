// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Fontsize } from '../Constants/Fontsize'
// import { Colors } from '../Constants/Colors'
// import { Fonts } from '../Constants/Fonts'
// import { hp, wp } from '../Constants/Responsive'
// import CustomInputText from './CustomInputText'
// import { Images } from '../Assets'

// const PriceRangeInputs = () => {
//     return (
//         <View style={styles.pricingView}>
//             <CustomInputText
//                 placeholder="Starting"
//                 icon={Images.price}
//                 keyboardType="email-address"
//                 inputContainer={styles.inputContainer}
//             />
//             <Text style={styles.selection}>to</Text>
//             <CustomInputText
//                 placeholder="Ending"
//                 icon={Images.price}
//                 keyboardType="email-address"
//                 inputContainer={styles.inputContainer}
//             />
//         </View>
//     )
// }

// export default PriceRangeInputs

// const styles = StyleSheet.create({
//     selection: {
//         color: Colors.semiTransparentBlack,
//         fontSize: Fontsize.s,
//         fontFamily: Fonts.regular,
//         marginHorizontal: wp(1.5)
//     },
//     pricingView: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     inputContainer: {
//         marginTop: hp(0),
//         width: wp(41.7),
//         height: hp(5.3)
//     }
// })