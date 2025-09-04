import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import LoginBody from '../../Components/LoginBody';

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginBody
        status="Welcome Back "
        small="Hello there, sign in to continue"
        remember="Remember Me"
        buttontext="Sign in"
        forgot="Forget Password?"
        google="Google"
        apple="Apple"
        account="If you Don't have an account"
        signup="Sign Up Now"
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
