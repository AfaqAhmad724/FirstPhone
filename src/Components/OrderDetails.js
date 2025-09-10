import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Strings } from '../Constants/Strings'

const OrderDetails = () => {
    return (
        <View>
            <View style={styles.rowStyle}>
                <Text style={styles.name}>{Strings.expecteddRates}</Text>
                <Text style={styles.value}>{Strings.expectedDate}</Text>
            </View>
            <View style={styles.rowStyle}>
                <Text style={styles.name}>{Strings.idText}</Text>
                <Text style={styles.value}>{Strings.orderId}</Text>
            </View>
        </View>
    )
}

export default OrderDetails

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        color: Colors.eyecolor,
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s
    },
    value: {
        color: Colors.black,
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s
    },
})