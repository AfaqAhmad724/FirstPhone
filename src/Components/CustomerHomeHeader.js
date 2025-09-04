import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';
import { wp, hp } from '../Constants/Responsive';
import { Fontsize } from '../Constants/Fontsize';
import { Fonts } from '../Constants/Fonts';
import { Strings } from '../Constants/Strings';
import CustomInputText from './CustomInputText';
import HomeTextInput from './HomeTextInput';

const CustomerHomeHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.locationStyle}>

                {/* Left: Menu Icon */}
                <View style={styles.menuContainer}>
                    <Image source={Images.menu} style={styles.menuIcon} resizeMode="contain" />
                </View>

                {/* Center: Location Icon + Text */}
                <View style={styles.locationContainer}>
                    <View style={styles.locationRow}>
                        <Image source={Images.location} style={styles.locationIcon} resizeMode="contain" />
                        <Text style={styles.locationText}>
                            {Strings.locationName}
                        </Text>
                    </View>
                </View>

                {/* Right: Notification Bell with Badge */}
                <View style={styles.notificationContainer}>
                    <Image source={Images.notificationSimple} style={styles.bellIcon} resizeMode="contain" />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>5</Text>
                    </View>
                </View>
            </View>


            <HomeTextInput
                placeholder="Search here"
                icon={Images.search}
                placeholderTextColor={Colors.gray}
                keyboardType="email-address"
                backgroundColor={Colors.bg}
                vectorstyle={{ width: wp(6) }}
            />
            <Text style={styles.mobileModal}>{Strings.mobileModals}</Text>

        </View>
    );
};

export default CustomerHomeHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
        paddingTop: hp(3),
        borderBottomRightRadius: wp(6),
        borderBottomLeftRadius: wp(6)
    },
    locationStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuContainer: {
        backgroundColor: Colors.bg,
        padding: wp(2),
        borderRadius: hp(5),
    },
    menuIcon: {
        width: wp(5),
        height: wp(5),
    },
    locationContainer: {
        flex: 1,
        marginLeft: wp(3),
        marginRight: wp(3),
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        width: wp(4),
        height: wp(4),
        marginRight: wp(1),
        marginBottom: hp(1.5)
    },
    locationText: {
        color: Colors.bg,
        fontSize: Fontsize.xs2,
        fontFamily: Fonts.medium,
        lineHeight: hp(2),
    },
    notificationContainer: {
        position: 'relative',
    },
    bellIcon: {
        width: wp(6),
        height: wp(6),
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
    mobileModal: {
        marginTop: hp(1),
        color: Colors.bg,
        fontSize: Fontsize.xs,
        fontFamily: Fonts.regular,
    }
});
