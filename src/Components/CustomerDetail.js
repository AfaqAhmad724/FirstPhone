import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../Constants/Responsive'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { Colors } from '../Constants/Colors'

const CustomerDetail = (props) => {
    return (
        <View style={styles.priceContainer}>
            <View style={styles.priceRow}>
                <Text style={styles.label}>{props?.label}</Text>
                <Text style={styles.value} numberOfLines={2}>{props?.value}</Text>
            </View>
        </View>
    )
}

export default CustomerDetail

const styles = StyleSheet.create({
    priceContainer: {
        marginTop: hp(2),
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    label: {
        fontSize: Fontsize.sm,
        fontFamily: Fonts.medium,
        color: Colors.mediumGrey,

    },
    value: {
        width: wp(40),
        fontSize: Fontsize.xsm,
        color: Colors.black,
        fontFamily: Fonts.medium,
        textAlign: 'right',
    },
})