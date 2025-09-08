import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { Strings } from '../Constants/Strings';

const CustomDropdown = props => {
    const [isFocus, setIsFocus] = useState(false);
    const [isradiopress, setIsRadioPres] = useState(false)
    const [selectedValue, setSelectedValue] = useState(props?.value || null);

    const radioChecked = props?.radioChecked || false;

    return (
        <View style={{ marginVertical: hp(1) }}>
            {/* Title + Radio button */}
            <View style={styles.radioContainer}>
                <TouchableOpacity
                    onPress={() => setIsRadioPres(!isradiopress)}
                    activeOpacity={0.7}>
                    {
                        radioChecked &&
                        <View style={styles.radioButtonOuter}>
                            {
                                isradiopress &&
                                <View style={styles.radioButtonInner} />
                            }
                        </View>
                    }
                </TouchableOpacity>
                <Text style={styles.titleText}>{props?.title || 'Select'}</Text>
            </View>


            {/* Dropdown */}
            <Dropdown
                mode={props?.mode || 'default'}
                ref={props?.dropDownRef}
                style={[
                    styles.dropdown,
                    {
                        // borderColor: isradiopress ? Colors.mediumGrey : Colors?.silverGrey,
                        borderColor: radioChecked
                            ? (isradiopress ? Colors.mediumGrey : Colors.silverGrey)
                            : Colors.mediumGrey,

                        width: props?.width || wp(90),
                        opacity: props?.disable ? 0.8 : 1,
                    },
                    props?.dropdown,
                ]}
                placeholderStyle={[
                    styles.placeholderStyle,
                    { color: props?.placeholderColor || Colors.mediumGrey },
                ]}
                selectedTextStyle={[
                    styles.selectedTextStyle,
                    { color: props?.selectedTextStyle || Colors.mediumGrey },
                ]}
                showsVerticalScrollIndicator={false}
                itemTextStyle={{ color: Colors.mediumGrey }}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={[styles.iconStyle, props.iconStyle]}
                data={props?.data}
                search={props?.search ?? false}
                maxHeight={wp(70)}
                labelField={props?.labelField || 'label'}
                valueField={props?.valueField || 'value'}
                placeholder={!isFocus ? props.placeholder || 'Select option' : '...'}
                value={selectedValue}
                dropdownPosition={props?.position || 'bottom'}
                onFocus={() => {
                    props?.onFocus && props?.onFocus();
                    setIsFocus(true);
                }}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setSelectedValue(item.value);
                    props?.onChange && props.onChange(item);
                }}
                disable={props?.disable || props?.loading || (!isradiopress && radioChecked)}  // disable if radio unchecked
                renderLeftIcon={() => (
                    <Image
                        source={props?.areaImage}
                        style={styles.imgStyle}
                        resizeMode='contain'
                        tintColor={
                            radioChecked
                                ? (isradiopress ? Colors.mediumGrey : Colors.silverGrey)
                                : Colors.mediumGrey
                        }
                    />
                )}

                renderRightIcon={() => {
                    return props?.loading ? (
                        <ActivityIndicator size={wp(6)} color={Colors.iconColor} />
                    ) : (
                        // <Entypo color={isradiopress ? Colors.mediumGrey : Colors.silverGrey} name={isFocus ? 'chevron-up' : 'chevron-down'} size={wp(6)} />
                        <Entypo
                            color={
                                radioChecked
                                    ? (isradiopress ? Colors.mediumGrey : Colors.silverGrey)
                                    : Colors.mediumGrey
                            }
                            name={isFocus ? 'chevron-up' : 'chevron-down'}
                            size={wp(6)}
                        />

                    );
                }}
            />
            <Text style={styles.selection}>{props?.selectionText || Strings.SelectmodelText}</Text>


            {props?.errorMessage && (
                <Text style={[styles.errMessage, props?.errMessageStyle]}>
                    {props?.errorMessage}
                </Text>
            )}
        </View>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(0.5),
    },
    radioButtonOuter: {
        height: hp(2.3),
        width: hp(2.3),
        borderRadius: hp(2),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp(2),
        backgroundColor: Colors.grey300
    },
    radioButtonInner: {
        height: hp(1),
        width: hp(1),
        borderRadius: hp(0.75),
        backgroundColor: Colors.primary,
    },
    titleText: {
        fontSize: Fontsize.s,
        fontFamily: Fonts.medium,
        color: Colors.black,
    },
    dropdown: {
        backgroundColor: Colors.bg,
        paddingHorizontal: wp(3),
        paddingVertical: wp(3),
        borderRadius: wp(2),
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeholderStyle: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.s,
    },
    selectedTextStyle: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.s,
    },
    iconStyle: {
        width: hp(3),
        height: hp(3),
    },
    inputSearchStyle: {
        fontSize: Fontsize.xs,
        fontFamily: Fonts.medium,
        color: Colors.black,
    },
    errMessage: {
        color: Colors.red,
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s,
        marginTop: hp(0.7),
    },
    selection: {
        marginTop: hp(.2),
        color: Colors.semiTransparentBlack,
        fontSize: Fontsize.xs,
        fontFamily: Fonts.regular
    },
    imgStyle: {
        width: wp(6),
        height: wp(6),
        marginRight: wp(2),
    }
});
