import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import CustomInputText from './CustomInputText';
import CheckBox from './CheckBox';
import AuthHeader from './AuthHeader';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';

const SignUpBody = props => {
    return (
        <View style={styles.backgroundstyle}>
            <AuthHeader label="Sign Up" />

            <View style={styles.innerContainer}>
                <Text style={styles.setheading}>{props?.setAccount}</Text>
                <Text style={styles.smalltext}>{props?.small}</Text>

                <Image
                    source={Images.Logo}
                    style={styles.firstphonestyle}
                />

                <CustomInputText
                    placeholder="Name"
                    icon={Images.personName}
                    placeholderTextColor="#9F9F9F"
                />

                <CustomInputText
                    placeholder="Email"
                    icon={Images.email}
                    placeholderTextColor="#9F9F9F"
                    keyboardType="email-address"
                />

                <CustomInputText
                    placeholder="Phone Number"
                    icon={Images.phone}
                    placeholderTextColor="#9F9F9F"
                    keyboardType="numeric"
                />
                <CustomInputText
                    placeholder="Password"
                    icon={Images.password}
                    placeholderTextColor="#9F9F9F"
                    isPassword={true}
                />

                <CustomInputText
                    placeholder="Confirm Password"
                    icon={Images.password}
                    placeholderTextColor="#9F9F9F"
                    isPassword={true}
                />

                <CheckBox
                    buttontext="Sign Up"
                    logintext="Login Now"
                    policytext="Privacy Policy"
                    agreetext=" I agree to "
                    condition="Terms & Conditions"
                    andthe="and the"
                />
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
        fontFamily: Fonts.bold,
        marginLeft: wp(5.5),
        marginTop: hp(2.5),
        fontSize: wp(5.3),
    },

    smalltext: {
        marginLeft: wp(5.7),
        fontSize: wp(3.1),
    },

    firstphonestyle: {
        width: wp(72),
        height: hp(15),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginRight: wp(1.1),
        marginTop: hp(0.7),
    },

    innerContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: wp(8),
        borderTopRightRadius: wp(8),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CBCBCB',
        borderRadius: wp(1.8),
        marginHorizontal: wp(5.7),
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
});
