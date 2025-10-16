import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import Cart from '../../Components/Cart';
import { Fonts } from '../../Constants/Fonts';
import Btn from '../../Components/Btn';
import { Images } from '../../Assets';
import { Fontsize } from '../../Constants/Fontsize';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../../Components/MainHeader';
import { MyStyling } from '../../Constants/Styling';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cartData } from '../../Constants/DummyData';

const MyCartScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Cart
      image={item.image}
      phone={item.phone}
      mobile={item.mobile}
      priceprop={item.priceprop}
    />
  );

  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(5) }}
      >
        <MainHeader title={'My Cart'} />
        <View style={styles.innerContainer}>
          {/* Cart Items FlatList */}
          <FlatList
            data={cartData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            // showsVerticalScrollIndicator={false}
          />

          {/* Subtotal + Checkout Section */}
          <View style={styles.total}>
            <Text
              style={[
                styles.subtotalstyle,
                { flexShrink: 1, maxWidth: wp('40%') },
              ]}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Subtotal:
            </Text>
            <Text
              style={[
                styles.subtotalstyle,
                {
                  flexShrink: 1,
                  maxWidth: wp('40%'),
                  color: Colors.primary,
                },
              ]}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Rs 4,979,988
            </Text>
          </View>

          <Btn
            title={'Checkout'}
            image={Images.checkout}
            onPress={() => navigation.navigate('DeliveryMethod')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCartScreen;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: hp(1.5),
    // flex: 1,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3.8%'),
  },
  subtotalstyle: {
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.m,
    color: Colors.black,
  },
  rupees: {
    fontFamily: Fonts.semibold,
    color: Colors.primary,
    fontSize: Fontsize.m,
  },
});
