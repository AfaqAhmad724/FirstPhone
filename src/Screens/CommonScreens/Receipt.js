import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { hp, wp } from '../../Constants/Responsive'
import { Colors } from '../../Constants/Colors'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'
import PaymentDetail from '../../Components/PaymentReceipt/PaymentDetail'
import PaymentStatus from '../../Components/PaymentReceipt/PaymentStatus'
import DeviceDetailPayment from '../../Components/PaymentReceipt/DeviceDetail'
import { recepitData } from '../../Constants/DummyData'
import { MyStyling } from '../../Constants/Styling'
import OnlyBackArrow from '../../Components/OnlyBackArrow'
import { SafeAreaView } from 'react-native-safe-area-context'
import Btn from '../../Components/Btn'

const Receipt = () => {
    return (
        <SafeAreaView style={[MyStyling.container, { backgroundColor: Colors.veryLightGray, }]}>
            <ScrollView style={{ paddingVertical: hp(2) }} showsVerticalScrollIndicator={false}>
                <OnlyBackArrow />
                <View style={[MyStyling.container, { marginVertical: hp(3), borderRadius: wp(3) }]}>
                    <PaymentStatus paymentStatus={recepitData.paymentStatus} dateTime={recepitData.dateTime} />
                    <View style={styles.divider} />
                    <PaymentDetail data={recepitData} />
                    <DeviceDetailPayment items={recepitData.items} />
                    <View style={styles.divider1} />

                    <View style={styles.totalBlock}>
                        <Text style={styles.totalLabel}>Total Amount</Text>
                        <Text style={styles.totalValue}>{recepitData.totalAmount}</Text>
                    </View>
                </View>
                <Btn title={'Download Receipt'} btnContainer={{ marginVertical: hp(10) }} />


            </ScrollView>
        </SafeAreaView>

    )
}

export default Receipt

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        padding: wp(4),
    },
    divider: {
        height: 1,
        backgroundColor: Colors.veryLightGray,
        marginVertical: hp(2),
    },
    divider1: {
        height: 1,
        backgroundColor: Colors.veryLightGray,
        marginVertical: hp(1),
        textDecorationLine: 'underline line-through'
    },
    totalBlock: {
        marginTop: hp(.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: hp(4)
    },
    totalLabel: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xs2,
        color: Colors.gray,
    },
    totalValue: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs2,
        color: Colors.dimBlack,
    },
})
