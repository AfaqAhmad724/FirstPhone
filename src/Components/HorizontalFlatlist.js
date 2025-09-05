import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { deviceData } from '../Constants/DummyData'
import DeviceCard from './DeviceCard'
import { hp, wp } from '../Constants/Responsive'

const HorizontalFlatlist = () => {
    return (
        <View style={{ paddingHorizontal: wp(5) }}>
            <FlatList
                data={deviceData}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    // <View style={{ width: wp(47) }}>
                    <DeviceCard {...item} />
                    // </View>
                )} />
        </View>
    )
}

export default HorizontalFlatlist

const styles = StyleSheet.create({})