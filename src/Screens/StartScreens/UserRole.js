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
import { SafeAreaView } from 'react-native-safe-area-context';

const UserRole = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerStyle}>
                <Text style={styles.title}>{Strings.userRoleTitle}</Text>
                <Text style={styles.subtitle}>{Strings.userRoleSubtitle}</Text>
            </View>

            <View style={styles.CutomerVendor}>

                <CustomerRoleBox />

                <Text style={styles.orText}>{Strings.orText}</Text>

                <VendorRoleBox />
            </View>

            <View style={styles.BtnView}>
                <Btn title={Strings.getStarted} />
            </View>
        </SafeAreaView>
    );
};

export default UserRole;

const styles = StyleSheet.create({
    headerStyle: {
        paddingHorizontal: wp(5),
    },
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        paddingTop: hp(6),
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
    CutomerVendor: {
        marginTop: hp(3),
        // alignItems: 'center'
    },
    orText: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.sm,
        color: Colors.primary,
        marginVertical: hp(1),
    },
    BtnView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: hp(8)
    }
});
