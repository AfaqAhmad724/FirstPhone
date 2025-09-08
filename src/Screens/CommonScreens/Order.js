import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import OrderPlaced from '../../Components/OrderPlaced';
import { Colors } from '../../Constants/Colors';

const Order = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="light-content" />
      <OrderPlaced
        order="ORDER PLACED SUCCESSFULLY!"
        define="Thank you! Your order has been placed and is now being processed. You
        can track your order now."
      />
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
