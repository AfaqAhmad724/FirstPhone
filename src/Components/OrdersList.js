import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceOrderCard from './PlaceOrderCard'
import { myOrdersData } from '../Constants/DummyData'
import { hp } from '../Constants/Responsive'

const OrdersList = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={{ marginTop: hp(.5) }}>
            <PlaceOrderCard
                {...item}
            />
        </View>
    )
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: hp(1.5) }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default OrdersList

const styles = StyleSheet.create({})