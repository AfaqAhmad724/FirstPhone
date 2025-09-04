import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/Navigations/MainNavigation';
import Login from './src/Screens/Auth/Login';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <MainNavigation /> */}
      <Login />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
