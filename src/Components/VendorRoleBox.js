import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { hp, wp } from '../Constants/Responsive'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Strings } from '../Constants/Strings'
import { Images } from '../Assets'

const VendorRoleBox = ({ id, selectedId, onSelect }) => {
    const isSelected = id == selectedId

    return (
        <View style={[styles.cardWrapper, {
            borderWidth: isSelected ? 1.5 : 0,
            borderRadius: isSelected ? wp(3) : wp(0),
            borderColor: isSelected ? Colors.primary : null,
        }]}>
            <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={() => onSelect(id)}>
                <View style={styles.cardContent}>
                    <View style={styles.textBox}>
                        <Text style={styles.cardTitle}>{Strings.vendorTitle}</Text>
                        <Text style={styles.cardDesc}>{Strings.vendorDesc}</Text>
                    </View>
                    <Image source={Images.vendor} style={styles.image} resizeMode='contain' />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default VendorRoleBox

const styles = StyleSheet.create({
    cardWrapper: {
        width: wp(90),
        borderRadius: wp(3),
        borderWidth: 1.5,
        borderColor: Colors.primary,
        marginHorizontal: wp(4)
    },
    card: {
        width: wp(90),
        backgroundColor: Colors.primary,
        borderRadius: wp(3),
        paddingVertical: hp(3),
        paddingHorizontal: wp(4),
        marginTop: hp(1),
        marginLeft: wp(2),
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