import { StyleSheet, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const OrderLists = () => {
    const navigation = useNavigation()
    const [btnText, setBtnText] = useState('')
    const userRole = useSelector((state) => state?.ROLE?.userData)

    useEffect(() => {
        handleButtonText()
    }, [])
    const handleButtonText = () => {
        if (userRole == 'Customer') {
            setBtnText('View Receipt')
        }
        else {
            setBtnText('Generate Receipt')
        }
    }

    const handleNavigation = () => {
        if (userRole == 'Customer') {
            navigation.navigate('Receipt')
        }
        else {
            navigation.navigate('DeviceReceipt')
        }
    }

    return (
        <SafeAreaView style={MyStyling.container}>
            <MainHeader title={'Order List'} />
            <Text style={styles.orderListText}>Order List</Text>
            <OrderCardFlatList />
            <OrderTotal price={'1,508,997'} shippingCharges={'500'} total={'1,509,497'} />
            <Btn title={'Track order'} btnContainer={{ backgroundColor: Colors.secondary }} onPress={() => navigation.navigate('TrackOrder')} />
            <Btn title={btnText} onPress={() => handleNavigation()} />

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