import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceDetail from '../Screens/AppFlow/DeviceDetail';

export default function FlowNavigation() {
  const FLOW_STACk = createNativeStackNavigator();
  return (
    <FLOW_STACk.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="DrawerNavigation">
      {/* <FLOW_STACk.Screen name="DrawerNavigation" component={DrawerNavigation} /> */}
      <FLOW_STACk.Screen name="DeviceDetail" component={DeviceDetail} />

    </FLOW_STACk.Navigator>
  );
}
