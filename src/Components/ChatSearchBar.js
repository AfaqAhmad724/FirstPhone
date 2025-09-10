import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from '../Constants/Colors'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'
import { hp, wp } from '../Constants/Responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ChatSearchBar = ({ placeholder = "Search", onChangeText, value }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={Colors.gray}
                onChangeText={onChangeText}
                value={value}
            />
            <Ionicons name="search-outline" size={Fontsize.l} color={Colors.gray} />
        </View>
    )
}

export default ChatSearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: wp(6),
        paddingHorizontal: wp(4),
        marginTop: hp(2),
        marginBottom: hp(1),
        height: hp(5),
    },
    input: {
        flex: 1,
        fontSize: Fontsize.s,
        fontFamily: Fonts.regular,
        color: Colors.black,
    },
})
