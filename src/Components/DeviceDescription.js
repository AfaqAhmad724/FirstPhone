import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Strings } from '../Constants/Strings'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import HideAndSeeDetails from './HideAndSeeDetails'

const DeviceDescription = (props) => {
    const [checkStatus, setCheckStatus] = useState(true)

    return (
        <View>
            <HideAndSeeDetails onSelect={setCheckStatus} checkStatus={checkStatus} title={props?.title} info={props?.info} />
            {checkStatus &&
                <Text style={styles.description}>{Strings.description}</Text>
            }
        </View>
    )
}

export default DeviceDescription

const styles = StyleSheet.create({
    description: {
        color: Colors.gray,
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xs
    }
})