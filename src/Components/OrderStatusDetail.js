import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fontsize } from '../Constants/Fontsize'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { hp, wp } from '../Constants/Responsive'

const OrderStatusDetail = (props) => {
    return (
        <View style={styles.priceContainer}>
            <View style={styles.priceRow}>
                <Text style={styles.label}>Order Status</Text>
                <Text style={styles.value} numberOfLines={2}>{props?.orderStatus}</Text>
            </View>
            <View style={styles.priceRow}>
                <Text style={styles.label}>Payment</Text>
                <Text style={styles.value} numberOfLines={2}>{props?.payment}</Text>
            </View>
            <View style={styles.priceRow}>
                <Text style={styles.label}>{'Total Amount (PKR)'}</Text>
                <Text style={styles.totalValue} numberOfLines={2}>Rs {props?.price}</Text>
            </View>
        </View>
    )
}

export default OrderStatusDetail

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
    totalValue: {
        width: wp(40),
        fontSize: Fontsize.sm,
        fontFamily: Fonts.medium,
        // color: Colors.primary,
        textAlign: 'right',
    },
})