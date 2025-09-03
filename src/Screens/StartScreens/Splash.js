import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../Constants/Colors'

const Splash = ({ navigation }) => {
    useEffect(() => {
        navigation.navigate('UserRole')
    })
    return (
        <View style={{ flex: 1, backgroundColor: Colors.primary }}>
            <Text>Splash</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})