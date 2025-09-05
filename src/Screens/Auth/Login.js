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
        <LoginBody
          status="Welcome Back "
          small="Hello there, sign in to continue"
          remember="Remember me"
          buttontext="Sign in"
          forgot="Forget Password?"
          google="Google"
          apple="Apple"
          account="If you Don't have an account"
          signup="Sign Up Now"
        />
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
