import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import LoginBody from '../../Components/LoginBody';

const Login = () => {
  return (
    <SafeAreaView>
      <LoginBody
        status="Welcome Back "
        small="Hello there, sign in to continue"
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
