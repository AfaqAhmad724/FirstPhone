import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { wp, hp } from '../Constants/Responsive'
import { Images } from '../Assets'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { Colors } from '../Constants/Colors'

const OrderAddress = ({ address, onChange }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Image source={Images.address} style={styles.icon} />
                <View style={{ marginLeft: wp(1) }}>
                    <Text style={styles.label}>Address</Text>
                </View>
            </View>
            <View style={styles.addressView}>
                <Text style={styles.address} numberOfLines={3}>{address}</Text>
                <TouchableOpacity style={styles.changeBtn} onPress={onChange}>
                    <Text style={styles.changeText}>CHANGE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderAddress

const styles = StyleSheet.create({
    container: {
        paddingVertical: hp(1.5),
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: wp(5),
        height: wp(5),
        resizeMode: 'contain',
    },
    label: {
        fontSize: Fontsize.s,
        fontFamily: Fonts.medium,
        color: Colors.black,
    },
    address: {
        fontSize: Fontsize.xs1,
        color: Colors.mediumGrey,
        marginTop: hp(0.5),
        maxWidth: wp(60),
        fontFamily: Fonts.regular
    },
    addressView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    changeBtn: {
        width: wp(15),
        height: wp(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.mediumGrey,
        borderRadius: wp(5),
    },
    changeText: {
        fontSize: Fontsize.xxxs,
        fontFamily: Fonts.regular,
        color: Colors.mediumGrey,
    },
})