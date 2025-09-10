import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { hp } from '../../Constants/Responsive'
import { Colors } from '../../Constants/Colors'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'

const DeviceDetailPayment = ({ items }) => {
    const renderProduct = ({ item }) => (
        <View style={styles.itemCard}>
            {/* Header row */}
            <View style={styles.divider} />

            <View style={styles.itemHeader}>
                <View>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemVariant}>{item.variant}</Text>
                    <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                </View>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>

            {/* IMEIs list */}
            {item.imeis.map((imei) => (
                <View key={imei.id} style={{ marginTop: hp(0.5) }}>
                    <Text style={styles.productTitle}>Product {imei.id}</Text>
                    <Text style={styles.imei}>IMEI1 Number: {imei.imei1}</Text>
                    <Text style={styles.imei}>IMEI2 Number: {imei.imei2}</Text>
                </View>
            ))}
        </View>
    )

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderProduct}
            scrollEnabled={false}
            contentContainerStyle={{ paddingBottom: hp(1) }}
        />
    )
}

export default DeviceDetailPayment

const styles = StyleSheet.create({
    itemCard: {
        // paddingVertical: hp(1),
        // borderBottomWidth: 1,
        // borderBottomColor: Colors.lightGrey,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp(1),
    },
    itemName: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.s,
        color: Colors.black,
    },
    itemVariant: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xs1,
        color: Colors.mediumGrey,
    },
    itemQuantity: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xs1,
        color: Colors.mediumGrey,
    },
    itemPrice: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xsm,
        color: Colors.black,
    },
    productTitle: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xs1,
        color: Colors.darkNeutralGray,
    },
    imei: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xs1,
        color: Colors.mediumGrey,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.veryLightGray,
        marginVertical: hp(2),
    },
})
