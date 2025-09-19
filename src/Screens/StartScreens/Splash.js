import React, { useEffect } from 'react';
import { StyleSheet, View, Image, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import { wp, hp } from '../../Constants/Responsive';
import { MyStyling } from '../../Constants/Styling';
import { Colors } from '../../Constants/Colors';
import { Images } from '../../Assets';

const Splash = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('UserRole');
        }, 3500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={MyStyling.container1}>
            <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />

            <ImageBackground
                source={require('../../Assets/Images/splashBg.png')}
                style={styles.bg}
                resizeMode="cover">
                <View style={styles.center}>
                    <Image
                        source={Images.splashLogo}
                        style={styles.logo}
                        resizeMode="contain"
                        tintColor={Colors.bg}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default Splash;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: Colors.primary,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: wp(90),
        height: hp(60),
    },
});
