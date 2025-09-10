import {
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Images } from '../Assets';
import { Colors } from '../Constants/Colors';
import { useNavigation } from '@react-navigation/native';

const HomeTextInput = props => {
    const navigation = useNavigation()

    return (
        <View style={[styles.inputContainer, props?.inputContainer]}>
            <Image style={[styles.vectorstyle]} source={props?.icon} resizeMode='contain' />
            <TextInput
                placeholder={props?.placeholder}
                placeholderTextColor={props?.placeholderTextColor}
                keyboardType={props?.keyboardType}
                style={styles.placeholderstyle}
            />
            <TouchableOpacity onPress={() => navigation.navigate('SearchFilter')}>
                <Image style={styles.filterIcon} source={Images.filter} resizeMode='contain' />

            </TouchableOpacity>
        </View>
    );
};

export default HomeTextInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: wp(1.8),
        marginTop: hp(1.8),
        backgroundColor: Colors.bg,
    },
    vectorstyle: {
        marginLeft: wp(2.6),
        width: wp(6),
        height: hp(5),
    },
    filterIcon: {
        marginRight: wp(1),
        width: wp(9),
        height: wp(9),
    },
    placeholderstyle: {
        fontFamily: Fonts.medium,
        fontSize: wp(3.6),
        color: 'black',
        flex: 1,
        marginHorizontal: wp(0.8),

    },
    passwordicon: {
        color: '#B4B4B4',
        marginRight: wp(2),
    },
});