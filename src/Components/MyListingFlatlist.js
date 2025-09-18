import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyDevicesCard from './MyDevicesCard'
import { myListingData, orderPlaceData } from '../Constants/DummyData'
import { hp } from '../Constants/Responsive'

const MyListingFlatlist = ({ data }) => {
    return (
        <View style={{ marginTop: hp(1) }}>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <MyDevicesCard data={item} />
                )} />
        </View>
    )
}

export default MyListingFlatlist

const styles = StyleSheet.create({})