import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { hp, wp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'

const ChatItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props?.onPress}>
            <Image source={props?.profileImage} style={styles.profileImage} />

            <View style={styles.textContainer}>
                <View style={styles.row}>
                    <Text style={styles.nameText}>{props?.name}</Text>
                    <Text style={styles.timeText}>{props?.time}</Text>
                </View>

                <View style={styles.messageRow}>
                    <Text style={styles.messageText} numberOfLines={1}>
                        {props?.message}
                    </Text>
                    {props?.unreadCount > 0 && (
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>{props?.unreadCount}</Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ChatItem

const BADGE_SIZE = hp(2.2)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(1.3),
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.lightGrey,
    },
    profileImage: {
        width: hp(6),
        height: hp(6),
        borderRadius: hp(3),
        resizeMode: 'cover',
    },
    textContainer: {
        flex: 1,
        marginLeft: wp(3),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nameText: {
        color: Colors.black,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.sm,
    },
    timeText: {
        color: Colors.grey,
        fontFamily: Fonts.regular,
        fontSize: Fontsize.s,
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp(0.1),
    },
    messageText: {
        flex: 1,
        color: Colors.grey,
        fontFamily: Fonts.regular,
        fontSize: Fontsize.xs2,
        marginRight: wp(2),
    },
    unreadBadge: {
        width: BADGE_SIZE,
        height: BADGE_SIZE,
        borderRadius: wp(4),
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadText: {
        color: Colors.bg,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xxs,
    },
})
