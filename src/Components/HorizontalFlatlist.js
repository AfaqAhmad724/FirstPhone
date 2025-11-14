import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { deviceData } from '../Constants/DummyData'
import DeviceCard from './DeviceCard'
import { hp, wp } from '../Constants/Responsive'

const HorizontalFlatlist = () => {
    return (
        <View style={{ paddingLeft: wp(5) }}>
            <FlatList
                data={deviceData}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ width: wp(45) }}>
                        {/* <DeviceCard {...item} /> */}
                        <DeviceCard data={item} />

                    </View>
                )} />
        </View>
    )
}

export default HorizontalFlatlist

const styles = StyleSheet.create({})