import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceDetail from '../Screens/AppFlow/DeviceDetail';
import DrawerNavigation from './DrawerNavigation';
import SearchFilter from '../Screens/AppFlow/SearchFilter';
import MyProfile from '../Screens/CommonScreens/MyProfile';
import Notifications from '../Screens/CommonScreens/Notifications';
import ResetPassword from '../Screens/Auth/ResetPassword';
import OrderPlaced from '../Components/OrderPlaced';
import PlaceOrder from '../Screens/AppFlow/PlaceOrder';

export default function FlowNavigation() {
  const FLOW_STACk = createNativeStackNavigator();
  return (
    <FLOW_STACk.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="DrawerNavigation">
      <FLOW_STACk.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <FLOW_STACk.Screen name="DeviceDetail" component={DeviceDetail} />
      <FLOW_STACk.Screen name="SearchFilter" component={SearchFilter} />
      <FLOW_STACk.Screen name="MyProfile" component={MyProfile} />
      <FLOW_STACk.Screen name="Notifications" component={Notifications} />
      <FLOW_STACk.Screen name="PlaceOrder" component={PlaceOrder} />


    </FLOW_STACk.Navigator>
  );
}
