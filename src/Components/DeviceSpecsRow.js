import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { Divider } from 'react-native-elements'

const DeviceSpecsRow = (props) => {
    return (
        <>
            <View style={styles.mainStyle}>
                <View style={styles.imgBrand}>
                    <View style={styles.imgView}>
                        <Image
                            source={props?.image}
                            style={styles.imgStyle}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.title}>{props?.brandTitle}</Text>
                </View>
                <View style={styles.textView}>
                    <Text
                        style={[
                            styles.title,
                            { fontFamily: Fonts.regular, textAlign: 'right' },
                        ]}
                    >
                        {props.productTitle}
                    </Text>
                </View>
            </View>

            {/* Divider below each row */}
            <Divider style={styles.dividerStyle} />
        </>

    )
}

export default DeviceSpecsRow

const styles = StyleSheet.create({
    mainStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(.5)
    },
    imgBrand: {
        width: wp(50),
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgView: {
        padding: hp(1),
        marginRight: wp(2),
        borderRadius: hp(3),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.transparentBlack,
    },
    imgStyle: {
        width: wp(4),
        height: wp(4),
    },
    title: {
        color: Colors.black,
        fontSize: Fontsize.s,
        fontFamily: Fonts.medium,
        textAlign: 'right',
    },
    textView: {
        width: wp(40),
    },
    dividerStyle: {
        backgroundColor: Colors.silverGrey,
        marginVertical: hp(1)
    }
})
