import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Strings } from '../../Constants/Strings';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import { Colors } from '../../Constants/Colors';
import Btn from '../../Components/Btn';
import CustomDrawer from '../../Navigations/CustomDrawer';
import VendorRoleBox from '../../Components/VendorRoleBox';
import CustomerRoleBox from '../../Components/CustomerRoleBox';

const UserRole = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Strings.userRoleTitle}</Text>
            <Text style={styles.subtitle}>{Strings.userRoleSubtitle}</Text>

            <CustomerRoleBox />

            <Text style={styles.orText}>{Strings.orText}</Text>

            <VendorRoleBox />

            <Btn title={Strings.getStarted} />
        </View>
    );
};

export default UserRole;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        paddingHorizontal: wp(5),
        paddingTop: hp(6),
        alignItems: 'center',
    },
    title: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.m,
        color: Colors.darkBlue,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: Fonts.medium,
        marginTop: hp(1),
        fontSize: Fontsize.xs1,
        color: Colors.lightGrey,
        textAlign: 'center',
        paddingHorizontal: wp(5),
    },
    card: {
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: wp(3),
        paddingVertical: hp(2.5),
        paddingHorizontal: wp(4),
        shadowColor: Colors.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
        // marginBottom: hp(2),
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: wp(30),
        height: wp(30),
        marginRight: wp(4),
    },
    textBox: {
        flex: 1,
    },
    cardTitle: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.m,
        color: Colors.bg,
        marginBottom: hp(0.8),
    },
    cardDesc: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s,
        color: Colors.bg,
        lineHeight: hp(2.4),
    },
    orText: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.s,
        color: Colors.primary,
        marginVertical: hp(1),
    },
});
