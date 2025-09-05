import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../Assets'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { hp, wp } from '../Constants/Responsive'

const DeviceCard = (data) => {
    return (
        <View style={styles.cardMain}>
            <Image source={data?.image} style={styles.img} resizeMode='contain' />
            <Text style={styles.titleText}>{data?.title}</Text>
            <View style={styles.shopView}>
                <Image source={Images.shopName} />
                <Text style={styles.shopText} numberOfLines={2}>{data?.shopName}</Text>
            </View>
            <View style={styles.priceView}>
                <Text style={styles.priceText}>Rs {data?.price}</Text>
                <View style={styles.locationView}>
                    <Image source={Images.location} tintColor={Colors.primary} style={styles.menuIcon} resizeMode='contain' />
                    <Text style={styles.distanceText}>{data?.distance}</Text>
                </View>
            </View>
        </View>
    )
}

export default DeviceCard

const styles = StyleSheet.create({
    cardMain: {
        marginVertical: hp(1),
        paddingVertical: hp(1),
        width: wp(42),
        paddingHorizontal: wp(2),
        marginHorizontal: wp(.5),
        backgroundColor: Colors.bg,
        shadowColor: Colors.shadowColor,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderRadius: wp(2),
        shadowOffset: {
            width: 2,
            height: 2,
        },
    },
    img: {
        width: wp(25),
        height: wp(25),
        alignSelf: 'center'
    },
    titleText: {
        marginTop: hp(.5),
        color: Colors.black,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xs2,
    },
    shopText: {
        color: Colors.gray,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs,
        marginHorizontal: wp(1)
    },
    priceText: {
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.s,
    },
    shopView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    distanceText: {
        color: Colors.gray,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs1,
    },
    menuIcon: {
        width: wp(3.5),
        height: wp(3.5),
        marginRight: wp(1)
    },
    locationView: { flexDirection: 'row', alignItems: 'center' }
})