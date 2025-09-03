import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { hp, wp } from '../Constants/Responsive'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Strings } from '../Constants/Strings'
import { Images } from '../Assets'

const VendorRoleBox = () => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
                <View style={styles.cardContent}>
                    <Image source={Images.vendor} style={styles.image} resizeMode="contain" />
                    <View style={styles.textBox}>
                        <Text style={styles.cardTitle}>{Strings.vendorTitle}</Text>
                        <Text style={styles.cardDesc}>{Strings.vendorDesc}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default VendorRoleBox

const styles = StyleSheet.create({
    card: {
        width: wp(90),
        backgroundColor: Colors.primary,
        borderRadius: wp(3),
        paddingVertical: hp(2.5),
        paddingHorizontal: wp(4),
        shadowColor: Colors.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
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
    cardTitle: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.ml,
        color: Colors.bg,
    },
    cardDesc: {
        width: wp(50),
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xs,
        color: Colors.bg,
    },
})