import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../Constants/Colors'
import { Fontsize } from '../../Constants/Fontsize';
import { Fonts } from '../../Constants/Fonts';

const Splash = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('UserRole');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: Fontsize.xl, fontFamily: Fonts.bold }}>Splash</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})