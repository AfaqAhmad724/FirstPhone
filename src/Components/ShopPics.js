import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { wp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'
import { Fontsize } from '../Constants/Fontsize'
import { Images } from '../Assets'

const ShopPics = (props) => {
    return (
        <View style={styles.noImageBox} >
            <Image source={props?.src} style={styles.imgStyle} />
        </View>
    )
}

export default ShopPics

const styles = StyleSheet.create({
    noImageBox: {
        opacity: 0.6,
        margin: wp(.9),
    },
    imgStyle: {
        width: wp(28.5),
        height: wp(25),
    }
})
