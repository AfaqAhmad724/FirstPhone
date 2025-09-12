import { LogBox, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainNavigation from './src/Navigations/MainNavigation'
import { Colors } from './src/Constants/Colors'

const App = () => {
  useEffect(() => {
    try {
      console.log('✅ App Started Successfully');
    } catch (error) {
      console.log('❌ App Error:', error);
    }

    // 🔇 Hide all yellow-box warnings
    // LogBox.ignoreAllLogs(true);

    // 🔇 Hide red-box errors in dev mode (not recommended for debugging)
    // console.error = () => { };
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={Colors.primary} barStyle={'dark-content'} />
      <MainNavigation />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
