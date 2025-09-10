import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OrderStatuses from '../../Components/OrderStatuses'
import MainHeader from '../../Components/MainHeader'
import OrdersList from '../../Components/OrdersList'
import { ScrollView } from 'react-native-gesture-handler'
import { MyStyling } from '../../Constants/Styling'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'
import { Colors } from '../../Constants/Colors'
import OrderDetails from '../../Components/OrderDetails'
import { hp } from '../../Constants/Responsive'
import { Divider } from 'react-native-elements'

const TrackOrder = () => {
    return (
        <SafeAreaView style={MyStyling.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MainHeader title={'Track Order'} />
                <OrdersList />
                <Text style={styles.orderDetail}>{'Order Details'}</Text>
                <OrderDetails />
                <Divider style={styles.divider} />
                <Text style={styles.orderStatus}>{'Order Status'}</Text>
                <OrderStatuses />
            </ScrollView>
        </SafeAreaView>
    )
}

export default TrackOrder

const styles = StyleSheet.create({
    orderDetail: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xsm,
        color: Colors.black,
    },
    orderStatus: {
        marginTop: hp(.5),
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xsm,
        color: Colors.black,
    },
    divider: {
        backgroundColor: Colors.silverGrey,
        marginVertical: hp(2)
    }
})