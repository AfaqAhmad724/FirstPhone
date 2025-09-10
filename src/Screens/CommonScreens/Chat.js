import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChatItemsList from '../../Components/ChatItemsList'
import MainHeader from '../../Components/MainHeader'
import { Colors } from '../../Constants/Colors'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'
import { hp } from '../../Constants/Responsive'
import ChatSearchBar from '../../Components/ChatSearchBar'
import { MyStyling } from '../../Constants/Styling'

const Chat = () => {
    return (
        <SafeAreaView style={MyStyling.container}>
            <MainHeader title={'chat'} />
            <ChatSearchBar />
            <Text style={styles.orderText}>Vendors</Text>
            <ChatItemsList />
        </SafeAreaView>
    )
}

export default Chat

const styles = StyleSheet.create({
    orderText: {
        marginTop: hp(.5),
        color: Colors.black,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xsm
    },
})
