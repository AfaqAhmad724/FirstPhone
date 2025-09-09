import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { orderPlaceData } from '../Constants/DummyData'
import OrderCard from './OrderCard'

const OrderCardFlatList = () => {
    return (
        <View>
            <FlatList
                data={orderPlaceData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <OrderCard data={item} />
                )} />
        </View>
    )
}

export default OrderCardFlatList

const styles = StyleSheet.create({})