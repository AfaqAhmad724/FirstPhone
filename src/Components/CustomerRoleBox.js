import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Constants/Colors'
import { hp, wp } from '../Constants/Responsive'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Strings } from '../Constants/Strings'
import { Images } from '../Assets'

const CustomerRoleBox = ({ id, selectedId, onSelect }) => {
    const isSelected = id == selectedId

    return (
        <View style={[styles.cardWrapper, {
            borderWidth: isSelected ? 1.5 : 0,
            borderRadius: isSelected ? wp(3) : wp(0),
            borderColor: isSelected ? Colors.primary : null,
        }]}>
            <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={() => onSelect(id)}>
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
