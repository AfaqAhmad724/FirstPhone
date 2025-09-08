import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Fonts } from '../Constants/Fonts';
import { wp, hp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';
import { Fontsize } from '../Constants/Fontsize';
import { useNavigation } from '@react-navigation/native';

const MainHeader = props => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.vectorStyle} onPress={() => navigation.goBack()}>
                <Image
                    source={Images.arrowleft}
                    style={styles.arrowIcon}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Text style={styles.setHeading}>{props?.title}</Text>
            <View style={styles.notification}>
                <Image source={Images.notificationBell} resizeMode='contain' style={styles.img} />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>5</Text>
                </View>
            </View>
        </View>
    );
};

export default MainHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(3.5),
        alignItems: 'center'
    },
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
    },
    setHeading: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.m1,
        color: Colors.darkBlue,
    },
    img: {
        width: wp(6.5),
        height: wp(6.5)
    },
    badge: {
        position: 'absolute',
        top: -hp(0.6),
        right: -wp(.1),
        backgroundColor: Colors.red,
        width: wp(4),
        height: wp(4),
        borderRadius: wp(2.25),
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        color: Colors.bg,
        fontSize: Fontsize.xxxs,
        fontFamily: Fonts.bold,
    },
});