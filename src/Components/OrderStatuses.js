import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { hp, wp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { Images } from '../Assets'
import { orderSteps } from '../Constants/DummyData'

const OrderStatuses = () => {
    const renderItem = ({ item, index }) => {
        const isCompleted = item.status === 'completed'
        const isLast = index === orderSteps.length - 1

        return (
            <View style={styles.row}>
                <View style={styles.timelineContainer}>
                    <View
                        style={[styles.circle, { backgroundColor: isCompleted ? Colors.primary : Colors.neutralGrey },]}>
                        <Image
                            source={Images.done}
                            style={styles.checkIcon}
                            resizeMode="contain"
                        />
                    </View>

                    {!isLast && (
                        <View style={[styles.line, { backgroundColor: isCompleted ? Colors.primary : Colors.neutralGrey }]} />
                    )}
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>

                <Image source={item.icon} style={styles.rightIcon} resizeMode="contain" />
            </View>
        )
    }

    return (
        <FlatList
            data={orderSteps}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            scrollEnabled={false}
            contentContainerStyle={{ paddingVertical: hp(2) }}
        />
    )
}

export default OrderStatuses

const styles = StyleSheet.create({
    row: {
        height: hp(9),
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    timelineContainer: {
        alignItems: 'center',
    },
    circle: {
        width: wp(6),
        height: wp(6),
        borderRadius: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        width: wp(3),
        height: wp(3),
    },
    line: {
        flex: 1,
        width: wp(1)
    },
    content: {
        flex: 1,
        paddingLeft: wp(4),
        justifyContent: 'center',
    },
    title: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xsm1,
        color: Colors.black,
    },
    date: {
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s,
        color: Colors.eyecolor,
        marginTop: hp(0.3),
    },
    rightIcon: {
        width: wp(6.5),
        height: wp(6.5),
        marginRight: wp(2),
    },
})