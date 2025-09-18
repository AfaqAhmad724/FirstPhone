import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Btn from './Btn';
import { Strings } from '../Constants/Strings';
import { hp, wp } from '../Constants/Responsive';
import { useNavigation } from '@react-navigation/native';
import { BottomNavigation, BottomRouteNavigation } from '../Navigations/RootNavigation';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';
import { Fonts } from '../Constants/Fonts';

const AddToCartCounter = () => {
    const navigation = useNavigation()
    const [count, setCount] = useState(1);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => {
        if (count > 1) setCount(prev => prev - 1);
    };

    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => setQuantity(prev => prev + 1);
    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Btn
                title={Strings.addTocart}
                btnContainer={styles.btnContainer}
                onPress={() => BottomRouteNavigation('DrawerNavigation', 'BottomNavigations', 'Cart')}
            />

            {/* <View style={styles.counterContainer}>
                <TouchableOpacity onPress={decrement} style={styles.sideButton}>
                    <Text style={styles.symbol}>-</Text>
                </TouchableOpacity>

                <View style={styles.countContainer}>
                    <Text style={styles.countText}>{count}</Text>
                </View>

                <TouchableOpacity onPress={increment} style={styles.sideButton}>
                    <Text style={styles.symbol}>+</Text>
                </TouchableOpacity>
            </View> */}
            <View style={styles.quantityBox}>
                {/* Minus */}
                <TouchableOpacity style={styles.qtyBtn} onPress={decreaseQty}>
                    <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>

                {/* Separator Line */}
                <View style={[styles.verticalLine, { marginRight: wp(2) }]} />

                {/* Quantity Number */}
                <Text style={styles.qtyNumber}>{quantity}</Text>

                {/* Separator Line */}
                <View style={[styles.verticalLine, { marginLeft: wp(2) }]} />

                {/* Plus */}
                <TouchableOpacity style={styles.qtyBtn} onPress={increaseQty}>
                    <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddToCartCounter;

const styles = StyleSheet.create({
    btnContainer: {
        width: wp(60),
        alignSelf: 'flex-start',
        paddingVertical: wp(1.5),

    },
    counterContainer: {
        marginTop: hp(2),
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: '#999',
        borderRadius: wp(1.5),
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
    quantityBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: wp(1.5),
        backgroundColor: Colors.bg,
        borderColor: Colors.lf,
    },
    qtyBtn: {
        width: wp(3.7),
        height: wp(3.7),
        borderRadius: wp(3),
        backgroundColor: Colors.mediumGrey,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp(2)
    },
    qtyText: {
        fontSize: Fontsize.xxxs,
        fontFamily: Fonts.semibold,
        color: Colors.bg,
        textAlign: 'center',
    },
    qtyNumber: {
        marginTop: hp(.4),
        fontSize: Fontsize.s,
        fontFamily: Fonts.semibold,
        color: Colors.black,
        marginHorizontal: wp(2),
    },
    verticalLine: {
        height: hp(4.3),
        width: 1.3,
        backgroundColor: Colors.silverGrey,
    },
});
