import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Profile from '../Screens/CommonScreens/Profile';
import Home from '../Screens/BottomTabs/Home';
import ProductListing from '../Screens/CommonScreens/ProductListing';
import Chat from '../Screens/CommonScreens/Chat';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Images } from '../Assets';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import MyCartScreen from '../Screens/CommonScreens/MyCartScreen';
import Dashboard from '../Screens/SellerBottomTabs/Dashboard';
import { useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast'

const BOTTOM_STACK = createBottomTabNavigator();

export const BottomNavigations = () => {
    const userRole = useSelector((state) => state?.ROLE?.userData)

    const tabBarIcon =
        imageSource =>
            ({ focused }) =>
            (
                <View
                    style={[
                        styles.container,
                        {
                            borderWidth: focused ? wp(0.5) : null,
                            backgroundColor: focused ? Colors.bg : 'transparent',
                            marginTop: focused ? hp(-5) : 0,
                        },
                    ]}>
                    <Image
                        style={[
                            styles.img,
                            {
                                tintColor: focused ? Colors.primary : Colors.bottomBarIcon,
                            },
                        ]}
                        source={imageSource}
                        resizeMode="contain"
                    />
                </View>
            );

    return (
        <BOTTOM_STACK.Navigator
            initialRouteName={userRole == 'Customer' ? 'Home' : 'Dashboard'}
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'below-icon',
                tabBarStyle: {
                    backgroundColor: Colors.bg,
                    paddingBottom: hp(1),
                    height: hp(7.5),
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.bottomBarIcon,
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: styles.text,
            }}>
            {
                userRole == 'Customer' &&
                <BOTTOM_STACK.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: tabBarIcon(Images.home),
                        tabBarButton: props => (
                            <TouchableOpacity {...props} activeOpacity={0.9} />
                        ),
                    }}
                />
            }
            {userRole == 'Seller' &&
                <BOTTOM_STACK.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        tabBarIcon: tabBarIcon(Images.dashboard),
                        tabBarButton: props => (
                            <TouchableOpacity {...props} activeOpacity={0.9} />
                        ),
                    }}
                />
            }
            <BOTTOM_STACK.Screen
                name="Cart"
                component={MyCartScreen}
                options={{
                    tabBarIcon: tabBarIcon(Images.cart),
                    tabBarButton: props => (
                        userRole == 'Seller' ?
                            <TouchableOpacity {...props} activeOpacity={0.9} onPress={() => {

                                Toast.show('Please log in as a Customer to access your Cart.', Toast.LONG);

                            }} />
                            :
                            <TouchableOpacity {...props} activeOpacity={0.9} />
                    ),
                }}
            />
            <BOTTOM_STACK.Screen
                name="Sell"
                component={ProductListing}
                options={{
                    tabBarIcon: tabBarIcon(Images.sell),
                    tabBarButton: props => (
                        <TouchableOpacity {...props} activeOpacity={0.9} />
                    ),
                }}
            />
            <BOTTOM_STACK.Screen
                name="Messages"
                component={Chat}
                options={{
                    tabBarIcon: tabBarIcon(Images.chat),
                    tabBarButton: props => (
                        <TouchableOpacity {...props} activeOpacity={0.9} />
                    ),
                }}
            />
            <BOTTOM_STACK.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: tabBarIcon(Images.setting),
                    tabBarButton: props => (
                        <TouchableOpacity {...props} activeOpacity={0.9} />
                    ),
                }}
            />
        </BOTTOM_STACK.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(13),
        height: wp(13),
        borderRadius: wp(7),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.primary,
    },
    img: {
        width: wp(7),
        height: wp(7),
    },
    text: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.xs,
    },
});
