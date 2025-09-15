import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyStyling } from '../../Constants/Styling'
import CancelledTabs from '../TopTabs/CancelledTabs'
import OrdersList from '../../Components/OrdersList'
import { myOrdersData, myOrdersVendorData } from '../../Constants/DummyData'
import AuthHeader from '../../Components/AuthHeader'
import MainHeader from '../../Components/MainHeader'

const OnlineOrders = () => {
    return (
        <SafeAreaView style={MyStyling.container}>
            <OrdersList data={myOrdersVendorData} />
        </SafeAreaView>
    )
}

export default OnlineOrders

const styles = StyleSheet.create({})