import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PlaceOrderCard from '../../Components/PlaceOrderCard'
import { myOrdersData } from '../../Constants/DummyData'
import { hp, wp } from '../../Constants/Responsive'
import { Colors } from '../../Constants/Colors'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'
import { Strings } from '../../Constants/Strings'
import { Text } from 'react-native'

const CancelledTabs = () => {
    const renderItem = ({ item }) => (
        console.log('item', item),

        <View>
            <Text style={styles.orderText}>Canceled Orders</Text>
            <Text style={styles.address}>{Strings.cancelledOrder}</Text>
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
            data={myOrdersData.filter(order => order.status === 'cancelled')}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

export default CancelledTabs

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