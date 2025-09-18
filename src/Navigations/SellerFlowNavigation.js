import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceDetail from '../Screens/AppFlow/DeviceDetail';
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
import SellerDrawerNavigation from './SellerDrawerNavigation';
import SalesReport from '../Screens/SellerAppFlow/SalesReport';
import CustomerListing from '../Screens/SellerAppFlow/CustomerListing';
import SellerNewListing from '../Screens/SellerAppFlow/SellerNewListing';
import DeviceReceipt from '../Screens/SellerAppFlow/DeviceReceipt';
import MobileRequest from '../Components/MobileRequest';
import RequestMobile from '../Screens/SellerAppFlow/RequestMobile';
import OnlineOrders from '../Screens/SellerAppFlow/OnlineOrders';
import EditProfile from '../Screens/CommonScreens/EditProfile';
import Premium from '../Screens/SellerAppFlow/Premium';

export default function SellerFlowNavigation() {
    const SELLER_FLOW_STACk = createNativeStackNavigator();
    return (
        <SELLER_FLOW_STACk.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SellerDrawerNavigation">
            <SELLER_FLOW_STACk.Screen name="SellerDrawerNavigation" component={SellerDrawerNavigation} />
            <SELLER_FLOW_STACk.Screen name="DeviceDetail" component={DeviceDetail} />
            <SELLER_FLOW_STACk.Screen name="SalesReport" component={SalesReport} />
            <SELLER_FLOW_STACk.Screen name="Profile" component={Profile} />
            <SELLER_FLOW_STACk.Screen name="Notifications" component={Notifications} />
            <SELLER_FLOW_STACk.Screen name="CustomerListing" component={CustomerListing} />
            <SELLER_FLOW_STACk.Screen name="MyOrders" component={MyOrders} />
            <SELLER_FLOW_STACk.Screen name="OrderLists" component={OrderLists} />
            <SELLER_FLOW_STACk.Screen name="TrackOrder" component={TrackOrder} />
            <SELLER_FLOW_STACk.Screen name="Receipt" component={Receipt} />
            <SELLER_FLOW_STACk.Screen name="SellerNewListing" component={SellerNewListing} />
            <SELLER_FLOW_STACk.Screen name="RequestForm" component={RequestForm} />
            <SELLER_FLOW_STACk.Screen name="NewListing" component={NewListing} />
            <SELLER_FLOW_STACk.Screen name="Preview" component={Preview} />
            <SELLER_FLOW_STACk.Screen name="DeviceReceipt" component={DeviceReceipt} />
            <SELLER_FLOW_STACk.Screen name="RequestMobile" component={RequestMobile} />
            <SELLER_FLOW_STACk.Screen name="OnlineOrders" component={OnlineOrders} />
            <SELLER_FLOW_STACk.Screen name="Order" component={Order} />
            <SELLER_FLOW_STACk.Screen name="EditProfile" component={EditProfile} />
            <SELLER_FLOW_STACk.Screen name="Premium" component={Premium} />


        </SELLER_FLOW_STACk.Navigator>
    );
}
