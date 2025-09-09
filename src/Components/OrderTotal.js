import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderTotal = (props) => {
    return (
        <View style={styles.priceContainer}>
            <View style={styles.priceRow}>
                <Text style={styles.label}>Subtotal:</Text>
                <Text style={styles.value}>Rs {props?.price}</Text>
            </View>
            <View style={styles.priceRow}>
                <Text style={styles.label}>Shipping Charges:</Text>
                <Text style={styles.value}>Rs {props?.shippingCharges}</Text>
            </View>
            <View style={styles.priceRow}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalValue}>Rs {props?.total}</Text>
            </View>
        </View>
    )
}

export default OrderTotal

const styles = StyleSheet.create({
    priceContainer: {
        padding: 16,
        marginTop: 16,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    label: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
    },
    value: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
    },
    totalLabel: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
    },
    totalValue: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'green',
    },
})