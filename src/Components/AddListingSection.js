import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Images } from '../Assets'
import { hp, wp } from '../Constants/Responsive'
import { useNavigation } from '@react-navigation/native'

const AddListingSection = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.mainView}>
            <Text style={styles.devices}>Devices</Text>
            <TouchableOpacity style={styles.addView} onPress={() => navigation.navigate('NewListing')}>
                <Image source={Images.add} style={styles.img} />
                <Text style={styles.addNewText}>Add New</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddListingSection

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(4),
        alignItems: 'center'
    },
    devices: {
        color: Colors.black,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.sm1
    },
    addNewText: {
        marginLeft: wp(1),
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.s,
        height: hp(2.3)
    },
    addView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: wp(4.3),
        height: wp(4.3)
    }
})