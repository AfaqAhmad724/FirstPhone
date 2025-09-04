import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import React from 'react';
import SignUpBody from '../../Components/SignUpBody';
import { Colors } from '../../Constants/Colors';

const Register = () => {
    return (
        <SafeAreaView style={styles.fullscreen}>
            <ScrollView>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                <SignUpBody
                    label="Sign Up"
                    setAccount="Set Up Your Account"
                    small="Hello there, sign up to continue"
                    placeholder="Name"
                    placeholderTextColor="#CBCBCB"
                    color="black"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        backgroundColor: Colors.bg,
    },
});
