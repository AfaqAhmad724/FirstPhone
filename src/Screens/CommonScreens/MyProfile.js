import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { MyStyling } from '../../Constants/Styling';
import { Colors } from '../../Constants/Colors';
import PasswordHeader from '../../Components/PasswordHeader';
import ProfileScreen from '../../Components/ProfileScreen';

const MyProfile = () => {
  return (
    <SafeAreaView style={MyStyling.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
      <PasswordHeader header="My Profile" />
      <ProfileScreen />
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({});
