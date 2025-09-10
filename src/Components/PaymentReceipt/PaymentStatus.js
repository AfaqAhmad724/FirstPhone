import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../Constants/Responsive'
import { Colors } from '../../Constants/Colors'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Images } from '../../Assets'

const PaymentStatus = ({ paymentStatus, dateTime }) => {
    return (
        <View style={styles.successContainer}>
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                    <Image source={Images.done} style={styles.successIcon} />
                </View>
            </View>

            <Text style={styles.paymentStatus}>{paymentStatus}</Text>
            <Text style={styles.dateTime}>{dateTime}</Text>
        </View>
    )
}

export default PaymentStatus

const styles = StyleSheet.create({
    successContainer: {
        alignItems: 'center',
        paddingVertical: hp(2),
    },
    outerCircle: {
        width: wp(19),
        height: wp(19),
        borderRadius: 40,
        backgroundColor: '#23A26D1F',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp(1.5),
    },
    innerCircle: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#34C759',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentStatus: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xsm1,
        color: Colors.darkGrey1,
    },
    dateTime: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs,
        color: Colors.black,
        marginTop: hp(0.5),
    },
    successIcon: {
        width: wp(4),
        height: wp(4),
    },
})
