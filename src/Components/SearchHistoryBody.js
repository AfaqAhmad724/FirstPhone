import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { hp, wp } from '../Constants/Responsive'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Colors } from '../Constants/Colors'
import { Images } from '../Assets'

const recentSearches = [
    { id: '1', text: 'Samsung 128GB' },
    { id: '2', text: 'iPhone 14 Pro Max' },
    { id: '3', text: 'Used mobiles Lahore' },
]

const SearchHistoryBody = ({ onClearAll, onRemove }) => {
    const renderItem = ({ item }) => (
        <View style={styles.itemRow}>
            <Text style={styles.itemText}>{item.text}</Text>
            <TouchableOpacity onPress={() => onRemove?.(item.id)}>
                <Image source={Images.cross} style={styles.crossIcon} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            {/* Header Row */}
            <View style={styles.headerRow}>
                <Text style={styles.headerTitle}>Recent</Text>
                <TouchableOpacity onPress={onClearAll}>
                    <Text style={styles.clearAll}>Clear All</Text>
                </TouchableOpacity>
            </View>

            {/* List */}
            <FlatList
                data={recentSearches}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
            />
        </View>
    )
}

export default SearchHistoryBody

const styles = StyleSheet.create({
    container: {
        paddingTop: hp(1),
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp(0.5),
    },
    headerTitle: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.sm1,
        color: Colors.black,
    },
    clearAll: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.sm1,
        color: Colors.primary,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: hp(.5),
    },
    itemText: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s,
        color: Colors.darkNeutralGray,
    },
    crossIcon: {
        width: wp(4.5),
        height: wp(4.5),
        tintColor: Colors.mediumGrey,
    },
})