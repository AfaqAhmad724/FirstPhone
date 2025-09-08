import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Constants/Colors'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { hp, wp } from '../Constants/Responsive'

const DeviceSpecsBox = ({ title, index, selectedIndex, onSelect }) => {
    const isSelected = selectedIndex == index

    return (
        <TouchableOpacity onPress={() => onSelect(index)}>
            <Text style={[styles.boxText, { color: isSelected ? Colors.bg : Colors.black, backgroundColor: isSelected ? Colors.primary : Colors.transparentBlack, fontFamily: isSelected ? Fonts.semibold : Fonts.regular }]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default DeviceSpecsBox

const styles = StyleSheet.create({
    boxText: {
        fontSize: Fontsize.s,
        padding: wp(2),
        paddingHorizontal: wp(3),
        borderRadius: wp(1.5)
    }
})