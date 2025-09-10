import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import ChatItem from './ChatItem'
import { chatData } from '../Constants/DummyData'
import { Colors } from '../Constants/Colors'
import { hp } from '../Constants/Responsive'

const ChatItemsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={chatData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ChatItem
                        {...item}
                    />
                )}
            />
        </View>
    )
}

export default ChatItemsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
    },
})