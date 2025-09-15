import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { myOrdersData } from '../../Constants/DummyData'
import PlaceOrderCard from '../../Components/PlaceOrderCard'
import { Strings } from '../../Constants/Strings'
import { hp, wp } from '../../Constants/Responsive'
import { Colors } from '../../Constants/Colors'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'
import { useSelector } from 'react-redux'

const ActiveTabs = () => {
    const userRole = useSelector((state) => state?.ROLE?.userData)
    const selectedText = userRole == 'Customer' ? Strings.activeOrder : Strings.sellerActiveOrder
    const renderItem = ({ item }) => (
        <View>
            <Text style={styles.orderText}>Active Orders</Text>
            <Text style={styles.address}>{selectedText}</Text>
            <PlaceOrderCard
                orderId={item.orderId}
                shopName={item.shopName}
                totalPrice={item.totalPrice}
                totalProducts={item.totalProducts}
                date={item.date}
                status={item.status}
            />
        </View>

    )

    return (
        <FlatList
            data={myOrdersData.filter(order => order.status === 'active')}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

export default ActiveTabs

const styles = StyleSheet.create({
    orderText: {
        marginTop: hp(1),
        color: Colors.black,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.sm1,
    },
    address: {
        fontSize: Fontsize.xs1,
        color: Colors.mediumGrey,
        maxWidth: wp(88),
        fontFamily: Fonts.regular,
    },
})