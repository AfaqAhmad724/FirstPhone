import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainNavigation from './src/Navigations/MainNavigation'
import Home from './src/Screens/BottomTabs/Home'
import { Colors } from './src/Constants/Colors'
import Login from './src/Screens/Auth/Login'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={Colors.primary} barStyle={'dark-content'} />
      <MainNavigation />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
