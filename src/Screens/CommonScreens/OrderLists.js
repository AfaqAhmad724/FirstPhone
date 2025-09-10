import { StyleSheet, Text, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainHeader from '../../Components/MainHeader'
import OrderCardFlatList from '../../Components/OrderCardFlatList'
import OrderTotal from '../../Components/OrderTotal'
import { Colors } from '../../Constants/Colors'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'
import { hp } from '../../Constants/Responsive'
import { MyStyling } from '../../Constants/Styling'
import Btn from '../../Components/Btn'

const OrderLists = () => {
    return (
        <SafeAreaView style={MyStyling.container}>
            <MainHeader title={'Order List'} />
            <Text style={styles.orderListText}>Order List</Text>
            <OrderCardFlatList />
            <OrderTotal price={'1,508,997'} shippingCharges={'500'} total={'1,509,497'} />
            <Btn title={'Track order'} btnContainer={{ backgroundColor: Colors.secondary }} />
            <Btn title={'View Receipt'} />

        </SafeAreaView>
    )
}

export default OrderLists

const styles = StyleSheet.create({
    orderText: {
        marginTop: hp(3),
        color: Colors.black,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.m
    },
    orderListText: {
        marginTop: hp(3),
        color: Colors.black,
        fontFamily: Fonts.bold,
        fontSize: Fontsize.m
    }
})