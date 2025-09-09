import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
import React from 'react';
import DeliveryMethodComponent from '../../Components/DeliveryMethodComponent';
import { Images } from '../../Assets';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import Btn from '../../Components/Btn';
import { options } from '../../Constants/DummyData';

const DeliveryMethod = () => {
  return (
    <SafeAreaView style={styles.innerContainer}>
      <Text style={styles.heading}>Payment Options</Text>
      <Text style={styles.define}>
        Select how you want to receive your mobile.
      </Text>

      <FlatList
        data={options}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <DeliveryMethodComponent item={item} />}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.btncontainer}>
        <Btn title={'Proceed to Payment'} />
      </View>
    </SafeAreaView>
  );
};

export default DeliveryMethod;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: hp(10),
    marginLeft: wp(5.3),
    marginRight: wp(5.3),
  },
  heading: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.m,
    color: Colors.black,
  },
  define: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.fz,
    color: Colors.shadowgray,
    marginBottom: hp(2),
  },
  btncontainer: {
    marginTop: hp(1.3),
  },
});
