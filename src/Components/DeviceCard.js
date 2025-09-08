import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../Assets'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { hp, wp } from '../Constants/Responsive'
import { useNavigation } from '@react-navigation/native'

const DeviceCard = (data) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.cardMain} onPress={() => navigation.navigate('DeviceDetail')}>
            <View style={styles.repairingView}>
                <Image source={Images.repairing} style={styles.reparingImg} />
                <Text style={styles.repairing}>Repairing Services </Text>
            </View>

            <Image source={data?.image} style={styles.img} resizeMode='contain' />

            <Text style={styles.titleText}>{data?.title}</Text>

            <View style={styles.shopView}>
                <Image source={Images.shopName} />
                <Text style={styles.shopText} numberOfLines={2}>{data?.shopName}</Text>
            </View>

            <View style={styles.priceView}>

                <View style={styles.priceBox}>
                    <Text style={styles.rsText}>Rs</Text>
                    <View style={{ flexShrink: 1, }}>
                        <Text style={styles.priceText} numberOfLines={2}>
                            {data?.price}
                        </Text>
                    </View>
                </View>

                <View style={styles.locationBox}>
                    <Image
                        source={Images.colorLocation}
                        tintColor={Colors.primary}
                        style={styles.menuIcon}
                        resizeMode="contain"
                    />
                    <View style={{ flexDirection: "row", flexShrink: 1, }}>
                        <Text style={[styles.distanceText, { flexShrink: 1 }]} numberOfLines={2}>
                            {data?.distance}
                        </Text>
                        <Text style={styles.distanceText}> km</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
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

    repairingView: {
        flex: 1,
        right: wp(.1),
        padding: wp(.3),
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        paddingHorizontal: wp(.5),
        borderTopRightRadius: wp(1),
        backgroundColor: Colors.primary,
    },

    repairing: {
        color: Colors.bg,
        fontSize: Fontsize.xxxxs,
        fontFamily: Fonts.semibold,
        marginLeft: wp(.5)
    },
    reparingImg: { width: wp(1.5), height: wp(1.5) },

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

    shopView: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    priceView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    priceBox: {
        width: "60%",
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    priceText: {
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.s,
        marginLeft: wp(1),
    },

    rsText: {
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.s,
    },

    locationBox: {
        width: "40%",
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },

    distanceText: {
        color: Colors.gray,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xxs,
    },

    menuIcon: {
        width: wp(3.5),
        height: wp(3.5),
        marginRight: wp(.5),
    },
})
