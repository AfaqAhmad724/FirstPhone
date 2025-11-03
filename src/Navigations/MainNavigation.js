import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartNavigation from './StartNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import FlowNavigation from './FlowNavigation';
import { navigationRef } from './RootNavigation';
import SellerFlowNavigation from './SellerFlowNavigation';
import { useSelector } from 'react-redux';
import { configAxiosHeaders } from '../Screens/Services/Api_Services';

export default function MainNavigation() {
  const MAIN_STACK = createNativeStackNavigator();
  const userData = useSelector(state => state?.AUTH?.userData);
  useEffect(() => {
    if (userData?.token) {
      configAxiosHeaders(userData.token);
    }
  }, [userData]);
  return (
    <NavigationContainer ref={navigationRef}>
      <MAIN_STACK.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="StartNavigation"
      >
        <MAIN_STACK.Screen name="StartNavigation" component={StartNavigation} />
        <MAIN_STACK.Screen name="AuthNavigation" component={AuthNavigation} />
        <MAIN_STACK.Screen name="FlowNavigation" component={FlowNavigation} />
        <MAIN_STACK.Screen
          name="SellerFlowNavigation"
          component={SellerFlowNavigation}
        />
      </MAIN_STACK.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
