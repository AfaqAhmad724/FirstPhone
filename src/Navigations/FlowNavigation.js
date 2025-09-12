import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceDetail from '../Screens/AppFlow/DeviceDetail';
import DrawerNavigation from './DrawerNavigation';
import SearchFilter from '../Screens/AppFlow/SearchFilter';
import Notifications from '../Screens/CommonScreens/Notifications';
import PlaceOrder from '../Screens/AppFlow/PlaceOrder';
import MyOrders from '../Screens/CommonScreens/MyOrders';
import OrderLists from '../Screens/CommonScreens/OrderLists';
import TrackOrder from '../Screens/CommonScreens/TrackOrder';
import Receipt from '../Screens/CommonScreens/Receipt';
import SearchHistory from '../Screens/AppFlow/SearchHistory';
import RequestForm from '../Screens/AppFlow/RequestForm';
import NewListing from '../Screens/AppFlow/NewListing';
import Preview from '../Screens/AppFlow/Preview';
import DeliveryMethod from '../Screens/AppFlow/DeliveryMethod';
import ChooseShipping from '../Screens/AppFlow/ChooseShipping';
import ShipingAddress from '../Screens/AppFlow/ShipingAddress';
import Order from '../Screens/CommonScreens/Order';
import Profile from '../Screens/CommonScreens/Profile';

export default function FlowNavigation() {
  const FLOW_STACk = createNativeStackNavigator();
  return (
    <FLOW_STACk.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="DrawerNavigation">
      <FLOW_STACk.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <FLOW_STACk.Screen name="DeviceDetail" component={DeviceDetail} />
      <FLOW_STACk.Screen name="SearchFilter" component={SearchFilter} />
      <FLOW_STACk.Screen name="Profile" component={Profile} />
      <FLOW_STACk.Screen name="Notifications" component={Notifications} />
      <FLOW_STACk.Screen name="PlaceOrder" component={PlaceOrder} />
      <FLOW_STACk.Screen name="MyOrders" component={MyOrders} />
      <FLOW_STACk.Screen name="OrderLists" component={OrderLists} />
      <FLOW_STACk.Screen name="TrackOrder" component={TrackOrder} />
      <FLOW_STACk.Screen name="Receipt" component={Receipt} />
      <FLOW_STACk.Screen name="SearchHistory" component={SearchHistory} />
      <FLOW_STACk.Screen name="RequestForm" component={RequestForm} />
      <FLOW_STACk.Screen name="NewListing" component={NewListing} />
      <FLOW_STACk.Screen name="Preview" component={Preview} />
      <FLOW_STACk.Screen name="DeliveryMethod" component={DeliveryMethod} />
      <FLOW_STACk.Screen name="ChooseShipping" component={ChooseShipping} />
      <FLOW_STACk.Screen name="ShipingAddress" component={ShipingAddress} />
      <FLOW_STACk.Screen name="Order" component={Order} />

    </FLOW_STACk.Navigator>
  );
}
