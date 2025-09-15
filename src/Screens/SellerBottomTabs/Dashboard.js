import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyStyling } from '../../Constants/Styling'
import { Images } from '../../Assets'
import { useNavigation } from '@react-navigation/native'

const Dashboard = ({ }) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={MyStyling.container}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <Image source={Images.menu} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({})