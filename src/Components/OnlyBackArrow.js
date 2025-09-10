import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../Assets'
import { useNavigation } from '@react-navigation/native'
import { wp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'

const OnlyBackArrow = () => {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity style={styles.vectorStyle} onPress={() => navigation.goBack()}>
                <Image
                    source={Images.arrowleft}
                    style={styles.arrowIcon}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}

export default OnlyBackArrow

const styles = StyleSheet.create({
    vectorStyle: {
        width: wp(7.0),
        height: wp(7),
        backgroundColor: Colors.primary,
        borderRadius: wp(2.3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowIcon: {
        width: wp(4),
        height: wp(4),
    }
})