import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import VerifyOtp from '../Screens/Auth/VerifyOtp';
import ResetPassword from '../Screens/Auth/ResetPassword';

const AUTH_STACK = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <AUTH_STACK.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <AUTH_STACK.Screen name="Login" component={Login} />
      <AUTH_STACK.Screen name="Register" component={Register} />
      <AUTH_STACK.Screen name="ForgotPassword" component={ForgotPassword} />
      <AUTH_STACK.Screen name="VerifyOtp" component={VerifyOtp} />
      <AUTH_STACK.Screen name="ResetPassword" component={ResetPassword} />
    </AUTH_STACK.Navigator>
  );
}

const styles = StyleSheet.create({});
