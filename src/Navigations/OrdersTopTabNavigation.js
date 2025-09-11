import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Colors } from '../Constants/Colors'
import DeliveredTabs from '../Screens/TopTabs/DeliveredTabs'
import CancelledTabs from '../Screens/TopTabs/CancelledTabs'
import ActiveTabs from '../Screens/TopTabs/ActiveTabs'
import { Fontsize } from '../Constants/Fontsize'
import { View } from 'react-native'

const Tab = createMaterialTopTabNavigator()

const OrdersTopTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: Fontsize.xsm },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.black,
                tabBarStyle: {
                    backgroundColor: Colors.bg,
                    elevation: 0,
                    position: 'relative',
                },
                sceneStyle: { backgroundColor: Colors.bg },
                tabBarIndicator: ({ state }) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 3,
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,

                        }}
                    >
                        {state.routes.map((_, i) => (
                            <View
                                key={i}
                                style={{
                                    flex: 1,
                                    backgroundColor:
                                        i === state.index ? Colors.primary : Colors.silverGrey,
                                }}
                            />
                        ))}
                    </View>
                ),
            }}
        >
            <Tab.Screen name="Active" component={ActiveTabs} />
            <Tab.Screen name="Delivered" component={DeliveredTabs} />
            <Tab.Screen name="Cancelled" component={CancelledTabs} />
        </Tab.Navigator>
    )
}

export default OrdersTopTabNavigation
