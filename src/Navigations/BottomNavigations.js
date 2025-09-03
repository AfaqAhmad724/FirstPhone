import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { Images } from '../Assets';
import Profile from '../Screens/CommonScreens/Profile';
import Home from '../Screens/BottomTabs/Home';
import ProductListing from '../Screens/CommonScreens/ProductListing';
import Chat from '../Screens/CommonScreens/Chat';

const BOTTOM_STACK = createBottomTabNavigator();

export const BottomNavigations = () => {
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
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'below-icon',
                tabBarStyle: {
                    backgroundColor: Colors.bottomBar,
                    paddingBottom: hp(1),
                    height: hp(7.5),
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.bottomBarIcon,
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: styles.text,
            }}>
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
            {/* <BOTTOM_STACK.Screen
        name="Wishlist"
        component={}
        options={{
          tabBarIcon: tabBarIcon(Images.cart),
          tabBarButton: props => (
            <TouchableOpacity {...props} activeOpacity={0.9} />
          ),
        }}
      /> */}
            <BOTTOM_STACK.Screen
                name="ProductListing"
                component={ProductListing}
                options={{
                    tabBarIcon: tabBarIcon(Images.sell),
                    tabBarButton: props => (
                        <TouchableOpacity {...props} activeOpacity={0.9} />
                    ),
                }}
            />
            <BOTTOM_STACK.Screen
                name="Chat"
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
                    tabBarIcon: tabBarIcon(Images.profile),
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
