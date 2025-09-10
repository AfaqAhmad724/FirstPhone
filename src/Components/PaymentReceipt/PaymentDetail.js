import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp } from '../../Constants/Responsive'
import { Colors } from '../../Constants/Colors'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'

const PaymentDetail = (data) => {
    const props = data?.data
    return (
        <View style={styles.detailsBlock}>
            <DetailRow label="Payment ID" value={props?.paymentId} />
            <DetailRow label="Order Number" value={props?.orderNumber} />
            <DetailRow label="Payment Method" value={props?.paymentMethod} />
            <DetailRow label="To" value={props?.to} />
            <DetailRow label="From" value={props?.from} />
            <DetailRow label="Products" value={props?.products} />
        </View>
    )
}

const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value}</Text>
    </View>
)

export default PaymentDetail

const styles = StyleSheet.create({
    detailsBlock: {
        // marginBottom: hp(1),
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp(1),
    },
    detailLabel: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xs2,
        color: Colors.darkGrey,
    },
    detailValue: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs2,
        color: Colors.dimBlack,
    },
})
