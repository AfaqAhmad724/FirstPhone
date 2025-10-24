import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'

const RepairingService = (props) => {
    const setRepairing = props?.setRepairing

    return (
        <View style={[styles.radioContainer, props?.radioContainer]}>
            <TouchableOpacity
                onPress={() => setRepairing(!props?.repairing)}
                activeOpacity={0.7}>
                <View style={[styles.radioButtonOuter, props?.radioButtonOuter]}>
                    {
                        props?.repairing &&
                        <View style={[styles.radioButtonInner, props?.radioButtonInner]} />
                    }
                </View>
            </TouchableOpacity>
            <Text style={[styles.titleText, props?.titleStyle]}>{props?.title || 'Repairing Services'}</Text>
        </View>
    )
}

export default RepairingService

const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(0.5),
        marginTop: hp(1)
    },
    radioButtonOuter: {
        height: hp(2.3),
        width: hp(2.3),
        borderRadius: hp(2),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp(2),
        backgroundColor: Colors.grey300
    },
    radioButtonInner: {
        height: hp(1),
        width: hp(1),
        borderRadius: hp(0.75),
        backgroundColor: Colors.primary,
    },
    titleText: {
        fontSize: Fontsize.xs1,
        fontFamily: Fonts.medium,
        color: Colors.black,
    },
})