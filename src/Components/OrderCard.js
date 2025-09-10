import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { wp, hp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'
import { Images } from '../Assets'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'

const OrderCard = ({ data }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image source={Images.phone1} style={styles.backImage} />
            </View>

            <View style={styles.detailsWrapper}>
                <Text style={styles.title} numberOfLines={2}>{data?.name}</Text>

                <View style={styles.storeWrapper}>
                    <Image
                        source={Images.shopName}
                        style={styles.storeIcon}
                    />
                    <Text style={styles.storeText} numberOfLines={2}>{data?.store}</Text>
                </View>

                <Text style={styles.price} numberOfLines={2}>Rs {data?.price}</Text>
                <Text style={styles.qty} numberOfLines={2}>Qty: {data?.quantity}</Text>
            </View>

            <View style={styles.DetailView}>
                <Text style={styles.detailText}>View Detail</Text>
            </View>
        </View>
    )
}

export default OrderCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: Colors.offWhite,
        borderRadius: wp(3),
        padding: wp(3),
        marginBottom: hp(2),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    imageWrapper: {
        width: wp(20),
        height: wp(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    backImage: {
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
        fontFamily: Fonts.regular,
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
    storeText: {
        width: wp(55),
        color: Colors.mediumGrey,
        fontSize: wp(2.8),
        marginLeft: wp(1),
    },
    price: {
        width: wp(60),
        color: Colors.primary,
        fontFamily: Fonts.bold,
        fontSize: Fontsize.xsm,
        marginTop: hp(0.8),
    },
    qty: {
        width: wp(60),
        color: Colors.mediumGrey,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xs2,
        marginTop: hp(0.5),
    },
    DetailView: {
        paddingVertical: wp(1),
        paddingHorizontal: wp(2.5),
        borderRadius: hp(5),
        borderWidth: wp(.2),
        borderColor: Colors.primary,
        backgroundColor: Colors.lightGreen
    },
    detailText: {
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xxm
    },
})
