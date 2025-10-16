import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import OrderPlaced from '../../Components/OrderPlaced';
import { MyStyling } from '../../Constants/Styling';
import { Strings } from '../../Constants/Strings';
import { useRoute } from '@react-navigation/native';

const Order = () => {
  const route = useRoute();
  const type = route?.params?.type;
  console.log('type', type);

  return (
    <SafeAreaView style={MyStyling.container}>
      <OrderPlaced type={type} />
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({});
