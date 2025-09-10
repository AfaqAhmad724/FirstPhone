// import React from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// import { Colors } from '../Constants/Colors'
// import Activetabs from '../Screens/TopTabs/Activetabs'
// import DeliveredTabs from '../Screens/TopTabs/DeliveredTabs'
// import CancelledTabs from '../Screens/TopTabs/CancelledTabs'

// const Tab = createMaterialTopTabNavigator()

// const OrdersTopTabNavigation = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarLabelStyle: { fontSize: 14 },
//                 tabBarActiveTintColor: Colors.primary,
//                 tabBarInactiveTintColor: Colors.black,
//                 tabBarIndicatorStyle: { backgroundColor: Colors.primary, height: 3 },
//                 tabBarStyle: { backgroundColor: Colors.white, elevation: 0 },
//             }}
//         >
//             <Tab.Screen name="Active" component={Activetabs} />
//             <Tab.Screen name="Delivered" component={DeliveredTabs} />
//             <Tab.Screen name="Cancelled" component={CancelledTabs} />
//         </Tab.Navigator>
//     )
// }

// export default OrdersTopTabNavigation