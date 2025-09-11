import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyDevicesCard from './MyDevicesCard'
import { orderPlaceData } from '../Constants/DummyData'

const MyListingFlatlist = () => {
    return (
        <View>
            <FlatList
                data={orderPlaceData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <MyDevicesCard data={item} />
                )} />
        </View>
    )
}

export default MyListingFlatlist

const styles = StyleSheet.create({})