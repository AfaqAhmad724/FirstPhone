import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { hp, wp } from '../Constants/Responsive'
import { Images } from '../Assets'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const PlaceOrderCard = (props) => {
    const navigation = useNavigation()
    const userRole = useSelector((state) => state?.ROLE?.userData)

    const handleNavigation = () => {
        if (userRole == 'Seller' && props?.status == 'active') {
            navigation.navigate('OrderLists')
        }
        else if (
            userRole === 'Seller' &&
            (props?.status === 'delivered' || props?.status === 'cancelled')
        ) {
            navigation.navigate('DeviceDetail', { check: true })
        }
    }

    return (
        <Pressable style={styles.container} onPress={() => handleNavigation()}>
            {/* Order ID */}
            <Text style={styles.orderIdText} numberOfLines={2}>
                Order Id <Text style={styles.orderIdValue}>#{props?.orderId}</Text>
            </Text>

            {/* Shop Name */}
            <View style={styles.row}>
                <Image source={Images.shopName} style={styles.icon} />
                <Text style={styles.shopNameText} numberOfLines={2}>{props?.shopName}</Text>
            </View>

            {/* Price */}
            <Text style={styles.orderIdText} numberOfLines={2}>
                Total Price: <Text style={styles.priceValue}>{props?.totalPrice}</Text>
            </Text>

            {/* Products */}
            <Text style={styles.orderIdText} numberOfLines={2}>
                Total Products: <Text style={styles.orderIdValue}>{props?.totalProducts}</Text>
            </Text>

            {/* Date */}
            <Text style={styles.orderIdText} numberOfLines={2}>
                Date: <Text style={styles.orderIdValue}>{props?.date}</Text>
            </Text>

            {/* Action Icons */}

            <View style={styles.iconRow}>
                {props?.status === 'active' ? (
                    userRole === 'Customer' ? (
                        <View style={styles.buttonsStyle}>
                            <TouchableOpacity onPress={props?.onCallPress}>
                                <Image source={Images.whatsapp} style={styles.actionIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props?.onChatPress}>
                                <Image source={Images.messages} style={styles.actionIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props?.onSettingPress}>
                                <Image source={Images.whatsapp} style={styles.directionImg} />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.optionView}>
                            <Image source={Images.option} style={styles.imgStyle} resizeMode="contain" />
                        </View>
                    )
                ) : props?.status === 'delivered' ? (
                    userRole == 'Customer' ?
                        <View style={styles.reOrderView}>
                            <Text style={styles.reOrder}>Re-Order</Text>
                        </View>
                        :
                        <TouchableOpacity style={styles.DetailView} onPress={() => navigation.navigate('Receipt')}>
                            <Image source={Images.receipt} style={styles.img} />
                            <Text style={styles.detailText}>View Receipt</Text>
                        </TouchableOpacity>
                ) : props?.status === 'cancelled' ? (
                    <TouchableOpacity style={styles.DetailView} onPress={() => navigation.navigate('Receipt')}>
                        <Image source={Images.receipt} style={styles.img} />
                        <Text style={styles.detailText}>View Receipt</Text>
                    </TouchableOpacity>
                ) : null}
            </View>
        </Pressable>
    )
}

export default PlaceOrderCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.offWhite,
        borderRadius: hp(1),
        paddingHorizontal: hp(1.5),
        paddingVertical: hp(1),
        marginVertical: hp(.8),
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    orderIdText: {
        color: Colors.primary,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs2,
        width: wp(70)
    },
    orderIdValue: {
        color: Colors.gray,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs2,
    },
    row: {
        width: wp(70),
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: hp(1.8),
        height: hp(1.8),
        marginRight: hp(0.5),
        resizeMode: 'contain',
    },
    shopNameText: {
        color: Colors.gray,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs2,
    },
    priceText: {
        marginTop: hp(1),
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.m,
    },
    priceValue: {
        color: Colors.gray,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs2
    },
    productCountText: {
        color: Colors.primary,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.m,
    },
    productValue: {
        color: Colors.black,
        fontFamily: Fonts.bold,
    },
    dateText: {
        marginTop: hp(0.5),
        color: Colors.grey,
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s,
    },
    iconRow: {
        position: 'absolute',
        right: hp(1.5),
        marginTop: hp(1.4),
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: hp(12),
    },
    buttonsStyle: {
        height: hp(10),
        justifyContent: 'space-evenly',
    },
    actionIcon: {
        width: hp(2.1),
        height: hp(2.1),
        resizeMode: 'contain',
    },
    directionImg: {
        width: hp(2.1),
        height: hp(2.1),
    },
    reOrderView: {
        backgroundColor: Colors.primary,
        padding: wp(1.3),
        paddingHorizontal: wp(2.2),
        borderRadius: wp(1.5)
    },
    reOrder: {
        color: Colors.bg,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xxxs
    },
    DetailView: {
        flexDirection: 'row',
        paddingVertical: wp(1),
        paddingHorizontal: wp(1.5),
        borderRadius: hp(5),
        borderWidth: wp(.2),
        borderColor: Colors.primary,
        backgroundColor: Colors.lightGreen,
        justifyContent: 'space-between'
    },
    detailText: {
        marginLeft: wp(.5),
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xxm
    },
    img: {
        width: wp(2.6),
        height: wp(2.6),
    },
    optionView: {
        justifyContent: 'center',
    },
    imgStyle: {
        width: wp(5),
        height: wp(5),
    },
})