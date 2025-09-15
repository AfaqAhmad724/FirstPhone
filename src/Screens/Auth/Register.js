import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';
import React from 'react';
import SignUpBody from '../../Components/SignUpBody';
import { Colors } from '../../Constants/Colors';

const Register = () => {
    return (
        <SafeAreaView style={styles.fullscreen}>
            <ScrollView>
                <SignUpBody
                    label="Sign Up"
                    setAccount="Set Up Your Account"
                    small="Hello there, sign up to continue asdfsadfasdfasd"
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
