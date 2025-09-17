import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomInputText from './CustomInputText';
import CheckBox from './CheckBox';
import AuthHeader from './AuthHeader';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';
import Btn from './Btn';
import { Fontsize } from '../Constants/Fontsize';
import { navigate } from '../Navigations/RootNavigation';
import { Strings } from '../Constants/Strings';
import RepairingService from './RepairingService';
import UploadingBox from './UploadingBox';
import PickImage from './PickImage';
import { useSelector } from 'react-redux';

const SignUpBody = props => {
    const userRole = useSelector((state) => state?.ROLE?.userData)

    return (
        <View style={styles.backgroundstyle}>
            <AuthHeader label="Sign Up" />

            <View style={styles.innerContainer}>
                <Text style={styles.setheading}>{Strings.setUpAccount}</Text>
                <Text style={styles.smalltext}>{Strings.signUpText}</Text>

                <Image
                    source={Images.Logo}
                    style={styles.firstphonestyle}
                />

                <CustomInputText
                    placeholder="Enter Name"
                    icon={Images.personName}
                />

                <CustomInputText
                    placeholder="Enter Email"
                    icon={Images.email}
                    keyboardType="email-address"
                />

                <CustomInputText
                    placeholder="Enter Phone Number"
                    icon={Images.phone}
                    keyboardType="numeric"
                />
                <CustomInputText
                    placeholder="Enter Password"
                    icon={Images.password}
                    isPassword={true}
                />

                <CustomInputText
                    placeholder="Enter Confirm Password"
                    icon={Images.password}
                    isPassword={true}
                />
                {userRole == 'Seller' &&

                    <View>
                        <CustomInputText
                            placeholder="Enter Location"
                            icon={Images.colorLocation}
                        />

                        <RepairingService radioContainer={{ marginTop: hp(2) }} radioButtonInner={styles.radioButtonInner} radioButtonOuter={styles.radioButtonOuter} titleStyle={styles.titleStyle} radioChecked={true} title={Strings.servicesText} />

                        <UploadingBox title={Strings.fronSideCNIC} />
                        <UploadingBox title={Strings.backSideCNIC} />

                        <Text style={styles.titleText}>{Strings.shopPics}</Text>
                        <PickImage register={true} />
                    </View>
                }

                <CheckBox
                    buttontext="Sign Up"
                    logintext="Login Now"
                    policytext="Privacy Policy"
                    agreetext=" I agree to "
                    condition="Terms & Conditions"
                    andthe="and the"
                />

                <Btn title={'Sign Up'} onPress={() => navigate('Verificationbody', { register: true })} />
                <View style={styles.accountStyle}>
                    <Text style={styles.lowertext}>
                        If you have an account{' '}
                    </Text>
                    <TouchableOpacity onPress={() => navigate('Login')}>
                        <Text style={styles.logintext}>Login Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUpBody;

const styles = StyleSheet.create({
    signupcontainer: {
        backgroundColor: '#4AB95A',
        height: hp(12.3),
        justifyContent: 'center',
    },

    label: {
        fontFamily: Fonts.bold,
        marginLeft: wp(5.6),
        color: Colors.bg,
        fontSize: wp(4.2),
        paddingTop: hp(4.9),
    },

    setheading: {
        fontFamily: Fonts.semibold,
        // marginLeft: wp(5),
        marginTop: hp(2.5),
        fontSize: wp(5.7),
        color: Colors.black,
        height: hp(4)
    },

    smalltext: {
        fontSize: wp(3.1),
    },

    firstphonestyle: {
        width: wp(72),
        height: wp(34),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: hp(0.7),
    },

    innerContainer: {
        flex: 1,
        backgroundColor: Colors.bg,
        borderTopLeftRadius: wp(8),
        borderTopRightRadius: wp(8),
        paddingHorizontal: wp(5),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CBCBCB',
        borderRadius: wp(1.8),
    },
    vectorstyle: {
        marginLeft: wp(2.4),
        width: wp(3.8),
        height: hp(4.9),
        resizeMode: 'contain',
        alignSelf: 'flex-start',
    },
    placeholderstyle: {
        fontFamily: Fonts.medium,
        fontSize: wp(3.6),
        color: 'black',
        flex: 1,
        marginLeft: wp(0.8),
    },
    backgroundstyle: {
        flex: 1,
        backgroundColor: '#4AB95A',
    },
    lowertext: {
        fontSize: Fontsize.xs1,
        fontFamily: Fonts.regular,
        color: Colors.black,
    },
    logintext: {
        marginLeft: wp(0.3),
        color: Colors.primary,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xs1
    },
    accountStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp(3)
    },
    titleStyle: {
        fontSize: Fontsize.xs,
        fontFamily: Fonts.medium,
    },
    radioButtonOuter: {
        height: hp(2.0),
        width: hp(2.0),
    },
    radioButtonInner: {
        height: hp(.9),
        width: hp(.9),
    },
    titleText: {
        marginTop: hp(1.5),
        fontSize: Fontsize.m,
        fontFamily: Fonts.regular,
        color: Colors.gray,
    },
});
