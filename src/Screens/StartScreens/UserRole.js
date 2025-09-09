import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Strings } from '../../Constants/Strings';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import { Colors } from '../../Constants/Colors';
import Btn from '../../Components/Btn';
import VendorRoleBox from '../../Components/VendorRoleBox';
import CustomerRoleBox from '../../Components/CustomerRoleBox';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserRole = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null)

    const handleUserFlow = () => {
        if (selectedId == 1) {
            navigation.navigate('AuthNavigation')
        }
        else {
            navigation.navigate('AuthNavigation')
            // return null
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerStyle}>
                <Text style={styles.title}>{Strings.userRoleTitle}</Text>
                <Text style={styles.subtitle}>{Strings.userRoleSubtitle}</Text>
            </View>

            <View style={styles.CutomerVendor}>
                <CustomerRoleBox id={1} selectedId={selectedId} onSelect={setSelectedId} />
                <Text style={styles.orText}>{Strings.orText}</Text>
                <VendorRoleBox id={2} selectedId={selectedId} onSelect={setSelectedId} />
            </View>

            <View style={styles.BtnView}>
                <Btn title={Strings.getStarted} onPress={() => handleUserFlow()} />
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
        marginTop: hp(1),
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs1,
        color: Colors.lightGrey,
        textAlign: 'center',
        paddingHorizontal: wp(5),
    },
    CutomerVendor: {
        marginTop: hp(3.5),
    },
    orText: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.sm,
        color: Colors.primary,
        marginVertical: hp(1),
        alignSelf: 'center',
    },
    BtnView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: hp(9)
    }
});
