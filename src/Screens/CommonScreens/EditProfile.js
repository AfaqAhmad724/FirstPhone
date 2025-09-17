import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { MyStyling } from '../../Constants/Styling';
import { Colors } from '../../Constants/Colors';
import ProfileScreen from '../../Components/ProfileScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainHeader from '../../Components/MainHeader';

const EditProfile = () => {
    return (
        <SafeAreaView style={MyStyling.container}>
            <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
            <MainHeader title="My Profile" />
            <ProfileScreen />
        </SafeAreaView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({});