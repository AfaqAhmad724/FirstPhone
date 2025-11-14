import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { deviceData } from '../Constants/DummyData';
import DeviceCard from './DeviceCard';
import { hp, wp } from '../Constants/Responsive';

const VerticalFlatlist = ({ data, isloading }) => {
  return (
    <FlatList
      // data={data}
      data={deviceData}
      numColumns={2}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={{ width: wp(47) }}>
          <DeviceCard data={item} />
        </View>
      )}
    />
  );
};

export default VerticalFlatlist;

const styles = StyleSheet.create({});
