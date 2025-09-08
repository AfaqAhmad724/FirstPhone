import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Btn from './Btn';
import { Strings } from '../Constants/Strings';
import { hp, wp } from '../Constants/Responsive';

const AddToCartCounter = () => {
    const [count, setCount] = useState(1);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => {
        if (count > 1) setCount(prev => prev - 1);
    };

    return (
        <View>
            <Btn
                title={Strings.addTocart}
                btnContainer={styles.btnContainer}
                onPress={() => { }}
            />

            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={decrement} style={styles.sideButton}>
                    <Text style={styles.symbol}>-</Text>
                </TouchableOpacity>

                <View style={styles.countContainer}>
                    <Text style={styles.countText}>{count}</Text>
                </View>

                <TouchableOpacity onPress={increment} style={styles.sideButton}>
                    <Text style={styles.symbol}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddToCartCounter;

const styles = StyleSheet.create({
    btnContainer: {
        width: wp(43),
        alignSelf: 'flex-start',
    },
    counterContainer: {
        marginTop: hp(2),
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: '#999',
        borderRadius: wp(4),
        overflow: 'hidden',
        width: wp(30),
        height: wp(10),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sideButton: {
        width: wp(10),
        height: '100%',
        backgroundColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    symbol: {
        color: 'white',
        fontSize: wp(5),
        fontWeight: 'bold',
    },
    countContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countText: {
        fontSize: wp(4.5),
        fontWeight: 'bold',
        color: 'black',
    },
});
