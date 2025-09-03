// // import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// // import React from 'react';
// // import { Strings } from '../../Constants/Strings';
// // import { Images } from '../../Assets';
// // import { hp, wp } from '../../Constants/Responsive';
// // import { Fonts } from '../../Constants/Fonts';
// // import { Fontsize } from '../../Constants/Fontsize';
// // import { Colors } from '../../Constants/Colors';

// // const UserRole = ({ navigation }) => {
// //     return (
// //         <View style={styles.container}>
// //             {/* Header */}
// //             <Text style={styles.title}>{Strings.userRoleTitle}</Text>
// //             <Text style={styles.subtitle}>{Strings.userRoleSubtitle}</Text>

// //             {/* Customer Card */}
// //             <TouchableOpacity activeOpacity={0.8} style={styles.card}>
// //                 <View style={styles.cardContent}>
// //                     <Image
// //                         source={Images.customer}
// //                         style={styles.image}
// //                         resizeMode="contain"
// //                     />
// //                     <View style={styles.textContainer}>
// //                         <Text style={styles.cardTitle}>{Strings.customerTitle}</Text>
// //                         <Text style={styles.cardDesc}>{Strings.customerDesc}</Text>
// //                     </View>
// //                 </View>
// //             </TouchableOpacity>

// //             {/* OR */}
// //             <Text style={styles.orText}>{Strings.orText}</Text>

// //             {/* Vendor Card */}
// //             <TouchableOpacity activeOpacity={0.8} style={styles.card}>
// //                 <View style={styles.cardContent}>
// //                     <Image
// //                         source={Images.vendor}
// //                         style={styles.image}
// //                         resizeMode="contain"
// //                     />
// //                     <View style={styles.textContainer}>
// //                         <Text style={styles.cardTitle}>{Strings.vendorTitle}</Text>
// //                         <Text style={styles.cardDesc}>{Strings.vendorDesc}</Text>
// //                     </View>
// //                 </View>
// //             </TouchableOpacity>

// //             {/* Get Started Button */}
// //             <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
// //                 <Text style={styles.btnText}>{Strings.getStarted}</Text>
// //             </TouchableOpacity>
// //         </View>
// //     );
// // };

// // export default UserRole;

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: Colors.bg,
// //         paddingHorizontal: wp(5),
// //         paddingTop: hp(6),
// //         alignItems: 'center',
// //     },
// //     title: {
// //         fontFamily: Fonts.bold,
// //         fontSize: Fontsize.l,
// //         color: Colors.darkBlue,
// //         textAlign: 'center',
// //         marginBottom: hp(1),
// //     },
// //     subtitle: {
// //         fontFamily: Fonts.regular,
// //         fontSize: Fontsize.s,
// //         color: Colors.darkGrey,
// //         textAlign: 'center',
// //         marginBottom: hp(5),
// //         paddingHorizontal: wp(6),
// //     },
// //     card: {
// //         width: '100%',
// //         backgroundColor: Colors.primary,
// //         borderRadius: wp(3),
// //         padding: wp(4),
// //         shadowColor: Colors.shadowColor,
// //         shadowOffset: { width: 0, height: 4 },
// //         shadowOpacity: 0.15,
// //         shadowRadius: 6,
// //         elevation: 5,
// //         marginBottom: hp(2),
// //     },
// //     cardContent: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //     },
// //     image: {
// //         width: wp(20),
// //         height: wp(20),
// //         marginRight: wp(4),
// //     },
// //     textContainer: {
// //         flex: 1,
// //     },
// //     cardTitle: {
// //         fontFamily: Fonts.semibold,
// //         fontSize: Fontsize.sm,
// //         color: Colors.bg,
// //         marginBottom: hp(0.5),
// //     },
// //     cardDesc: {
// //         fontFamily: Fonts.regular,
// //         fontSize: Fontsize.xs,
// //         color: Colors.bg,
// //         lineHeight: hp(2.5),
// //     },
// //     orText: {
// //         fontFamily: Fonts.medium,
// //         fontSize: Fontsize.s,
// //         color: Colors.darkGrey,
// //         marginVertical: hp(1),
// //     },
// //     btn: {
// //         width: '100%',
// //         backgroundColor: Colors.primary,
// //         paddingVertical: hp(1.8),
// //         borderRadius: wp(2),
// //         marginTop: hp(3),
// //         alignItems: 'center',
// //     },
// //     btnText: {
// //         fontFamily: Fonts.semibold,
// //         fontSize: Fontsize.sm,
// //         color: Colors.bg,
// //     },
// // });

// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import React from 'react';
// import { Strings } from '../../Constants/Strings';
// import { Images } from '../../Assets';
// import { hp, wp } from '../../Constants/Responsive';
// import { Fonts } from '../../Constants/Fonts';
// import { Fontsize } from '../../Constants/Fontsize';
// import { Colors } from '../../Constants/Colors';
// import Btn from '../../Components/Btn';

// const UserRole = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             {/* Header */}
//             <Text style={styles.title}>{Strings.userRoleTitle}</Text>
//             <Text style={styles.subtitle}>{Strings.userRoleSubtitle}</Text>

//             {/* Customer Card */}
//             <TouchableOpacity activeOpacity={0.8} style={styles.card}>
//                 <Image source={Images.customer} style={styles.image} resizeMode="contain" />
//                 <Text style={styles.cardTitle}>{Strings.customerTitle}</Text>
//                 <Text style={styles.cardDesc}>{Strings.customerDesc}</Text>
//             </TouchableOpacity>

//             {/* OR */}
//             <Text style={styles.orText}>{Strings.orText}</Text>

//             {/* Vendor Card */}
//             <TouchableOpacity activeOpacity={0.8} style={styles.card}>
//                 <Image source={Images.vendor} style={styles.image} resizeMode="contain" />
//                 <Text style={styles.cardTitle}>{Strings.vendorTitle}</Text>
//                 <Text style={styles.cardDesc}>{Strings.vendorDesc}</Text>
//             </TouchableOpacity>

//             {/* Get Started Button */}
//             <Btn title={Strings.getStarted} onPress={() => { }} />
//         </View>
//     );
// };

// export default UserRole;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: Colors.bg,
//         paddingHorizontal: wp(5),
//         paddingTop: hp(6),
//         alignItems: 'center',
//     },
//     title: {
//         fontFamily: Fonts.semibold,
//         fontSize: Fontsize.m,
//         color: Colors.darkBlue,
//         marginBottom: hp(1),
//     },
//     subtitle: {
//         fontFamily: Fonts.regular,
//         fontSize: Fontsize.s,
//         color: Colors.darkGrey,
//         textAlign: 'center',
//         marginBottom: hp(5),
//         paddingHorizontal: wp(6),
//     },
//     card: {
//         width: '100%',
//         backgroundColor: Colors.primary,
//         borderRadius: wp(3),
//         padding: wp(5),
//         shadowColor: Colors.shadowColor,
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.15,
//         shadowRadius: 6,
//         elevation: 5,
//         marginBottom: hp(2),
//         alignItems: 'center',
//     },
//     image: {
//         width: wp(30),
//         height: wp(30),
//         marginBottom: hp(1.5),
//     },
//     cardTitle: {
//         fontFamily: Fonts.semibold,
//         fontSize: Fontsize.m,
//         color: Colors.bg,
//         marginBottom: hp(0.5),
//     },
//     cardDesc: {
//         fontFamily: Fonts.regular,
//         fontSize: Fontsize.s,
//         color: Colors.bg,
//         textAlign: 'center',
//         lineHeight: hp(2.4),
//     },
//     orText: {
//         fontFamily: Fonts.medium,
//         fontSize: Fontsize.s,
//         color: Colors.darkGrey,
//         marginVertical: hp(1),
//     },
// });


import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Strings } from '../../Constants/Strings';
import { Images } from '../../Assets';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import { Colors } from '../../Constants/Colors';
import Btn from '../../Components/Btn';

const UserRole = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.title}>{Strings.userRoleTitle}</Text>
            <Text style={styles.subtitle}>{Strings.userRoleSubtitle}</Text>

            {/* Customer Card */}
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
                <View style={styles.cardContent}>
                    <Image source={Images.customer} style={styles.image} resizeMode="contain" />
                    <View style={styles.textBox}>
                        <Text style={styles.cardTitle}>{Strings.customerTitle}</Text>
                        <Text style={styles.cardDesc}>{Strings.customerDesc}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* OR */}
            <Text style={styles.orText}>{Strings.orText}</Text>

            {/* Vendor Card */}
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
                <View style={styles.cardContent}>
                    <Image source={Images.vendor} style={styles.image} resizeMode="contain" />
                    <View style={styles.textBox}>
                        <Text style={styles.cardTitle}>{Strings.vendorTitle}</Text>
                        <Text style={styles.cardDesc}>{Strings.vendorDesc}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Get Started Button */}
            <Btn title={Strings.getStarted} onPress={() => { }} />
        </View>
    );
};

export default UserRole;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        paddingHorizontal: wp(5),
        paddingTop: hp(6),
        alignItems: 'center',
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: Fontsize.m,
        color: Colors.darkBlue,
        textAlign: 'center',
        marginBottom: hp(1),
    },
    subtitle: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s,
        color: Colors.darkGrey,
        textAlign: 'center',
        marginBottom: hp(5),
        paddingHorizontal: wp(6),
    },
    card: {
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: wp(3),
        paddingVertical: hp(2.5),
        paddingHorizontal: wp(4),
        shadowColor: Colors.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
        marginBottom: hp(2),
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
        fontSize: Fontsize.m,
        color: Colors.bg,
        marginBottom: hp(0.8),
    },
    cardDesc: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s,
        color: Colors.bg,
        lineHeight: hp(2.4),
    },
    orText: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.s,
        color: Colors.darkGrey,
        marginVertical: hp(1),
    },
});
