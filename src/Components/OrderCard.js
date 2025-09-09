import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { wp, hp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'
import { Images } from '../Assets'

const OrderCard = ({ data }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image source={Images.phone1} style={styles.backImage} />
            </View>

            <View style={styles.detailsWrapper}>
                <Text style={styles.title}>{data?.name}</Text>

                <View style={styles.storeWrapper}>
                    <Image
                        source={Images.shopName}
                        style={styles.storeIcon}
                    />
                    <Text style={styles.storeText}>{data?.store}</Text>
                </View>

                <Text style={styles.price}>Rs {data?.price}</Text>
                <Text style={styles.qty}>Qty: {data?.quantity}</Text>
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
        marginVertical: hp(1),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
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
        fontSize: wp(4.5),
        fontWeight: '600',
        color: '#000',
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
        color: '#9E9E9E',
        marginLeft: wp(2),
        fontSize: wp(3.5),
    },
    price: {
        color: '#2ECC71',
        fontWeight: 'bold',
        fontSize: wp(4.5),
        marginTop: hp(0.8),
    },
    qty: {
        color: '#555',
        fontWeight: '500',
        fontSize: wp(3.8),
        marginTop: hp(0.5),
    },
})
