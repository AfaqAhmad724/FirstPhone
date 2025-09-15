import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import NotificationComponent from '../../Components/NotfificationComponent';

const Notifications = () => {
  return (
    <SafeAreaView>
      <View style={styles.Notifications}>
        <PasswordHeader header={'Notifications'} />
        <NotificationComponent />
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  Notifications: {
    marginLeft: 19,
  },
});
