import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import LoginBody from '../../Components/LoginBody';
import { Colors } from '../../Constants/Colors';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
          backgroundColor={Colors.primary}
          barStyle={'light-content'}
        />
        <LoginBody />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
});
