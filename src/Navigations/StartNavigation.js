import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/StartScreens/Splash';
import UserRole from '../Screens/StartScreens/UserRole';

const START_STACK = createNativeStackNavigator();

export default function StartNavigation() {
  return (
    <START_STACK.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}>
      <START_STACK.Screen name="SplashScreen" component={Splash} />
      <START_STACK.Screen name="UserRole" component={UserRole} />
    </START_STACK.Navigator>
  );
}

const styles = StyleSheet.create({});
