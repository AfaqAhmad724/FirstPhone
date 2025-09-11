import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Images } from '../Assets'
import { hp, wp } from '../Constants/Responsive'

const AddListingSection = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(3), alignItems: 'center' }}>
            <Text style={styles.devices}>Devices</Text>
            <View style={styles.addView}>
                <Image source={Images.add} style={styles.img} />
                <Text style={styles.addNewText}>Add New</Text>
            </View>
        </View>
    )
}

export default AddListingSection

const styles = StyleSheet.create({
    devices: {
        color: Colors.black,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.m
    },
    addNewText: {
        marginLeft: wp(1),
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.s
    },
    addView: {
        flexDirection: 'row',
        // alignItems: 'center'
    },
    img: {
        width: wp(5),
        height: wp(5)
    }
})