import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyStyling } from '../../Constants/Styling'
import MainHeader from '../../Components/MainHeader'
import OrdersTopTabNavigation from '../../Navigations/OrdersTopTabNavigation'

const MyOrders = () => {

    return (
        <SafeAreaView style={MyStyling.container}>
            <MainHeader title={'My Orders'} />
            <OrdersTopTabNavigation />
        </SafeAreaView>
    )
}

export default MyOrders

const styles = StyleSheet.create({})