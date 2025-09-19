import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { wp } from '../Constants/Responsive';
import { BottomNavigations } from './BottomNavigations';
import SellerCustomDrawer from './SellerCustomDrawer';

const SellerDrawer = createDrawerNavigator();

export default function SellerDrawerNavigation() {
    return (
        <SellerDrawer.Navigator
            drawerContent={props => <SellerCustomDrawer {...props} />}
            initialRouteName='BottomNavigations'
            screenOptions={{
                drawerStyle: {
                    width: wp(63),
                },
            }}
        >
            <SellerDrawer.Screen
                name="BottomNavigations"
                component={BottomNavigations}
                options={{ headerShown: false }}
            />
        </SellerDrawer.Navigator>
    );
}
