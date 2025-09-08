import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Constants/Colors'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { hp } from '../Constants/Responsive'
import HideAndSeeDetails from './HideAndSeeDetails'
import { Divider } from 'react-native-elements'

const WarrantyDetail = (props) => {
    const [checkStatus, setCheckStatus] = useState(true)
    return (
        <View style={styles.container}>
            <HideAndSeeDetails onSelect={setCheckStatus} checkStatus={checkStatus} title={props?.title} />
            {!checkStatus && <Divider style={styles.divider} />}
            {checkStatus &&
                <View style={styles.warantyView}>
                    <View>
                        <Text style={styles.label}>Start Date</Text>
                        <Text style={styles.date}>July 25, 2025</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>End Date</Text>
                        <Text style={styles.date}>Oct 25, 2025</Text>
                    </View>
                </View>
            }
            {checkStatus && <Divider style={styles.dividerStyle} />}

        </View>
    )
}

export default WarrantyDetail

const styles = StyleSheet.create({
    container: {
        marginTop: hp(1),
    },
    label: {
        color: Colors.dimGrey,
        fontSize: Fontsize.s,
        fontFamily: Fonts.medium,
    },
    date: {
        color: Colors.black,
        fontSize: Fontsize.mm,
        fontFamily: Fonts.medium,
    },
    warantyView: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    divider: {
        backgroundColor: Colors.silverGrey,
        marginVertical: hp(1)
    },
    dividerStyle: {
        backgroundColor: Colors.silverGrey,
        marginVertical: hp(1)
    }
})
