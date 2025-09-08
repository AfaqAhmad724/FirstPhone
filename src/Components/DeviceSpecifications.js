import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { deviceData, deviceSpecsData } from '../Constants/DummyData'
import DeviceCard from './DeviceCard'
import { hp, wp } from '../Constants/Responsive'
import DeviceSpecsRow from './DeviceSpecsRow'
import HideAndSeeDetails from './HideAndSeeDetails'
import { Divider } from 'react-native-elements'
import { Colors } from '../Constants/Colors'

const DeviceSpecifications = (props) => {
    const [checkStatus, setCheckStatus] = useState(true)
    return (
        <>
            <HideAndSeeDetails onSelect={setCheckStatus} checkStatus={checkStatus} title={props?.title} />
            {!checkStatus && <Divider style={styles.divider} />}
            {checkStatus && <FlatList
                data={props?.data}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (<DeviceSpecsRow {...item} />)} />}
        </>
    )
}

export default DeviceSpecifications

const styles = StyleSheet.create({
    divider: {
        backgroundColor: Colors.silverGrey,
        marginVertical: hp(1)
    }
})