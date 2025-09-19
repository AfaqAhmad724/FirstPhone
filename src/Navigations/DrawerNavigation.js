import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { wp } from '../Constants/Responsive';
import CustomDrawer from './CustomDrawer';
import { BottomNavigations } from './BottomNavigations';
import { StatusBar } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName='BottomNavigations'
            screenOptions={{
                drawerStyle: {
                    width: wp(63),
                },
            }}
        >
            <Drawer.Screen
                name="BottomNavigations"
                component={BottomNavigations}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
}
