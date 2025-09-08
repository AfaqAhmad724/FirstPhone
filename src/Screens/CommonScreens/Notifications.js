import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PasswordHeader from '../../Components/PasswordHeader';
import NotificationComponent from '../../Components/NotfificationComponent';

const Notifications = () => {
  return (
    // <View>
    //   <Text>Notifications</Text>
    // </View>
    <SafeAreaView>
      <View style={styles.Notifications}>
        <PasswordHeader header={'Notifications'} />
        <NotificationComponent
          heading="Order Placed Successfully"
          headingtwo="Order Shipped"
          headingthree="Order Delivered"
          message="Your order has been placed and is now being processed."
          messagetwo="Your order is out for delivery. We’ll notify you once it arrives."
          messagethree="Your order has been delivered successfully. Enjoy your new mobile!
"
        />
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
