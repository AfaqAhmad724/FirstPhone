// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { TouchableOpacity } from 'react-native'
// import { Image } from 'react-native'
// import { Images } from '../Assets'
// import { Colors } from '../Constants/Colors'
// import { hp, wp } from '../Constants/Responsive'
// import { Fonts } from '../Constants/Fonts'
// import { Fontsize } from '../Constants/Fontsize'
// import { Strings } from '../Constants/Strings'

// const CustomerRoleBox = () => {
//     return (
//         <View>
//             <TouchableOpacity activeOpacity={0.8} style={styles.card}>
//                 <View style={styles.cardContent}>
//                     <Image source={Images.customer} style={styles.image} resizeMode="contain" />
//                     <View style={styles.textBox}>
//                         <Text style={styles.cardTitle}>{Strings.customerTitle}</Text>
//                         <Text style={styles.cardDesc}>{Strings.customerDesc}</Text>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default CustomerRoleBox

// const styles = StyleSheet.create({
//     card: {
//         width: wp(90),
//         backgroundColor: Colors.primary,
//         borderRadius: wp(3),
//         paddingVertical: hp(2.5),
//         paddingHorizontal: wp(4),
//         shadowColor: Colors.shadowColor,
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.15,
//         shadowRadius: 6,
//         elevation: 5,
//         // marginBottom: hp(2),
//     },
//     cardContent: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     image: {
//         width: wp(30),
//         height: wp(30),
//         marginRight: wp(4),
//     },
//     cardTitle: {
//         fontFamily: Fonts.semibold,
//         fontSize: Fontsize.ml,
//         color: Colors.bg,
//     },
//     cardDesc: {
//         width: wp(50),
//         fontFamily: Fonts.regular,
//         fontSize: Fontsize.xs,
//         color: Colors.bg,
//     },
// })

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { hp, wp } from '../Constants/Responsive'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Strings } from '../Constants/Strings'
import { Images } from '../Assets'

const CustomerRoleBox = () => {
    return (
        <View style={styles.cardWrapper}>
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
                <View style={styles.cardContent}>
                    <Image source={Images.customer} style={styles.image} resizeMode='contain' />
                    <View style={styles.textBox}>
                        <Text style={styles.cardTitle}>{Strings.customerTitle}</Text>
                        <Text style={styles.cardDesc}>{Strings.customerDesc}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomerRoleBox

const styles = StyleSheet.create({
    cardWrapper: {
        width: wp(90),
        borderRadius: wp(3),
        borderWidth: 1.5,
        borderColor: Colors.primary,
        marginHorizontal: wp(4),
    },
    card: {
        width: wp(90),
        marginLeft: wp(2),
        borderRadius: wp(3),
        marginBottom: hp(1),
        paddingHorizontal: wp(4),
        paddingVertical: hp(3),
        backgroundColor: Colors.primary,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: wp(30),
        height: wp(30),
        marginRight: wp(4),
    },
    textBox: {
        flex: 1,
    },
    cardTitle: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.ml,
        color: Colors.bg,
    },
    cardDesc: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xs,
        color: Colors.bg,
    },
})
