import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Strings } from '../../Constants/Strings';
import { hp, wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import { Colors } from '../../Constants/Colors';
import Btn from '../../Components/Btn';
import VendorRoleBox from '../../Components/VendorRoleBox';
import CustomerRoleBox from '../../Components/CustomerRoleBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HandleBackHandler } from '../../Functions/BackHandler';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { USER_ROLEDATA } from '../../Redux/Slices/RoleSlice';

const UserRole = ({ navigation }) => {
    const userData = useSelector((state) => state?.ROLE?.userData)
    console.log('UserData', userData);

    const [selectedId, setSelectedId] = useState(null);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     HandleBackHandler();
    // }, []);

    const handleUserFlow = () => {
        if (!selectedId) {
            Toast.show('Please select a role first!', Toast.SHORT);
            return;
        }

        if (selectedId === 1) {
            dispatch(USER_ROLEDATA('Customer'));
            navigation.navigate('AuthNavigation');
        } else {
            dispatch(USER_ROLEDATA('Seller'));
            navigation.navigate('AuthNavigation');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.bg} barStyle={'dark-content'} />

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
                <Btn title={Strings.getStarted} onPress={handleUserFlow} />
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
        marginBottom: hp(9),
    },
});
