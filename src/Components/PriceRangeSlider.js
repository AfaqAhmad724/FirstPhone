import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Colors } from '../Constants/Colors';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import CustomInputText from './CustomInputText';
import { Images } from '../Assets';

const PriceRangeSlider = () => {
    const [range, setRange] = useState([0, 1000000]);

    const handleInputChange = (value, type) => {
        const num = parseInt(value) || 0;
        if (type === 'min') {
            setRange([num, range[1]]);
        } else {
            setRange([range[0], num]);
        }
    };

    return (
        <View>
            {/* Inputs */}
            <View style={styles.pricingView}>
                <CustomInputText
                    value={String(range[0])}
                    placeholder="Starting"
                    icon={Images.price}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                    onChangeText={val => handleInputChange(val, 'min')}
                />
                <Text style={styles.selection}>to</Text>
                <CustomInputText
                    value={String(range[1])}
                    placeholder="Ending"
                    icon={Images.price}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                    onChangeText={val => handleInputChange(val, 'max')}
                />
            </View>

            {/* Labels */}
            <View style={styles.labels}>
                <Text style={styles.labelText}>{range[0] / 100000} Lac</Text>
                <Text style={styles.labelText}>{range[1] / 100000} Lac</Text>
            </View>

            {/* Slider */}
            <MultiSlider
                values={range}
                onValuesChange={setRange}
                min={0}
                max={1000000}
                step={100000}
                sliderLength={wp(84)}
                selectedStyle={{ backgroundColor: Colors.primary, height: wp(.8) }}
                unselectedStyle={{ backgroundColor: Colors.silverGrey }}
                containerStyle={{ paddingHorizontal: wp(3) }}
                markerStyle={styles.marker}
                pressedMarkerStyle={styles.pressedMarker}
            />
        </View>
    );
};

export default PriceRangeSlider;

const styles = StyleSheet.create({
    labels: {
        marginTop: hp(1.3),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelText: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.s,
        color: Colors.semiTransparentBlack,
    },
    selection: {
        color: Colors.semiTransparentBlack,
        fontSize: Fontsize.s,
        fontFamily: Fonts.regular,
        marginHorizontal: wp(1.5),
    },
    pricingView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputContainer: {
        width: wp(41.7),
        marginTop: 0,
    },
    marker: {
        backgroundColor: Colors.bg,
        borderColor: Colors.primary,
        borderWidth: wp(.5),
        height: wp(6),
        width: wp(6),
        borderRadius: wp(10),
    },
    pressedMarker: {
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderWidth: wp(.7),
    },
});

