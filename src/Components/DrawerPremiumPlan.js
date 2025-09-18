import { Pressable, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Images } from '../Assets';
import { Fontsize } from '../Constants/Fontsize';

const DrawerPremiumPlan = ({ img, title, subtitle, days, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <ImageBackground
                source={Images.Background}
                style={styles.box}
                imageStyle={styles.bgImage}
            >
                <Image source={img} style={styles.crown} />

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>

                <View style={styles.daysStyle}>
                    <Image source={Images.clock} style={styles.imgStyle} />
                    <Text style={styles.days}>{days} Days Left</Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
};

export default DrawerPremiumPlan;

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: hp(7), // 🔹 smaller height for drawer
        borderRadius: wp(2),
        marginTop: hp(1),
        marginHorizontal: wp(2),
        overflow: 'hidden',
    },
    bgImage: {
        borderRadius: wp(2.6),
    },
    crown: {
        width: wp(12),
        height: wp(12),
        resizeMode: 'contain',
        marginLeft: wp(1),
    },
    textContainer: {
        justifyContent: 'center',
    },
    title: {
        lineHeight: hp(2),
        fontSize: Fontsize.sm,
        color: Colors.bg,
        fontFamily: Fonts.medium,
        // backgroundColor: 'red'
    },
    subtitle: {
        fontSize: Fontsize.xu,
        color: Colors.bg,
        fontFamily: Fonts.regular,
    },
    days: {
        fontSize: Fontsize.xm1,
        color: Colors.bg,
        fontFamily: Fonts.regular,
        marginLeft: wp(.6),
    },
    imgStyle: {
        marginTop: hp(.15),
        width: wp(2.5),
        height: wp(2.5),
        resizeMode: 'contain',
    },
    daysStyle: {
        flexDirection: 'row',
        marginRight: wp(1.5),
        alignSelf: 'flex-start',
        marginTop: hp(.3)
    },
});
