import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { MyStyling } from '../../Constants/Styling';
import MainHeader from '../../Components/MainHeader';
import VerticalFlatlist from '../../Components/VerticalFlatlist';
import { wp } from '../../Constants/Responsive';
import { Fonts } from '../../Constants/Fonts';
import { useRoute } from '@react-navigation/native';

const AllDevices = () => {
  const route = useRoute();
  const { title } = route.params || { title: 'Nearby' };

  return (
    <SafeAreaView style={MyStyling.container}>
      <MainHeader title="All Devices" />
      <Text style={styles.nearText}>{title}</Text>
      <VerticalFlatlist />
    </SafeAreaView>
  );
};

export default AllDevices;

const styles = StyleSheet.create({
  nearText: {
    marginLeft: wp(0.7),
    fontFamily: Fonts.semibold,
    marginTop: wp(7),
  },
});
