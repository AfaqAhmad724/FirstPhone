import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Images } from '../Assets'
import { Strings } from '../Constants/Strings'

const MyDevicesCard = ({ data }) => {
    const status = data?.status
    const handleStatus = (status) => {
        return status == 'pending' ? Strings.pending : status == 'approved' ? Strings.approved : Strings?.soldOut
    }
    return (
        <View style={styles.card}>
            <View style={[styles.repairingView, { backgroundColor: status == 'approved' ? Colors.primary : Colors.redOrange }]}>
                <Text style={styles.repairing}>{handleStatus(data?.status)}</Text>
            </View>
            {status == 'approved' &&
                <View style={styles.soldMarkView}>
                    <Text style={styles.repairing}>{Strings.markSold}</Text>
                </View>
            }
            <View style={styles.imageWrapper}>
                <Image source={Images.phone1} style={styles.backImage} />
            </View>

            <View style={styles.detailsWrapper}>
                <Text style={styles.title} numberOfLines={2}>{data?.name}</Text>

                <View style={styles.storeWrapper}>
                    <Image
                        source={Images.personName}
                        style={styles.storeIcon}
                    />
                    <Text style={styles.personText} numberOfLines={2}>{data?.personName}</Text>
                </View>

                <Text style={styles.price} numberOfLines={2}>Rs {data?.price}</Text>
            </View>

            <View style={styles.DetailView}>
                <Image source={Images.option} style={styles.imgStyle} resizeMode='contain' />
            </View>
        </View>
    )
}

export default MyDevicesCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: Colors.offWhite,
        borderRadius: wp(3),
        padding: wp(4.5),
        marginBottom: hp(2),
        // alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.05,
        // shadowRadius: 4,
        // elevation: 2,
    },
    imageWrapper: {
        width: wp(20),
        height: wp(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    backImage: {
        width: wp(23),
        height: wp(23),
        resizeMode: 'contain',
    },
    frontImage: {
        width: wp(13),
        height: wp(20),
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
    },
    detailsWrapper: {
        flex: 1,
        marginLeft: wp(4),
    },
    title: {
        width: wp(60),
        fontFamily: Fonts.medium,
        fontSize: Fontsize.sm,
        color: Colors.black,
    },
    storeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(0.5),
    },
    storeIcon: {
        width: wp(4),
        height: wp(4),
        resizeMode: 'contain',
    },
    personText: {
        width: wp(55),
        color: Colors.mediumGrey,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs,
        marginLeft: wp(.5),
    },
    price: {
        width: wp(60),
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xsm,
        marginTop: hp(0.8),
    },
    DetailView: {
        justifyContent: 'center'

    },
    detailText: {
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xxm
    },
    imgStyle: {
        width: wp(5),
        height: wp(5),
    },
    soldMarkView: {
        right: wp(2),
        padding: wp(.4),
        position: 'absolute',
        flexDirection: 'row',
        paddingHorizontal: wp(1.5),
        borderRadius: wp(3),
        backgroundColor: Colors.primary,
        marginTop: hp(2.5)
    },
    repairingView: {
        right: wp(.1),
        padding: wp(.2),
        position: 'absolute',
        flexDirection: 'row',
        paddingHorizontal: wp(.7),
        borderTopRightRadius: wp(1.5),
        backgroundColor: Colors.redOrange,
    },

    repairing: {
        color: Colors.bg,
        fontSize: Fontsize.xxxs,
        fontFamily: Fonts.medium,
        marginLeft: wp(.5)
    },
    reparingImg: { width: wp(1.5), height: wp(1.5) },
})