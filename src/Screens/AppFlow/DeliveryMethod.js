import { StyleSheet, Text, FlatList, View } from 'react-native';
import React from 'react';
import DeliveryMethodComponent from '../../Components/DeliveryMethodComponent';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import Btn from '../../Components/Btn';
import { options } from '../../Constants/DummyData';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../../Components/MainHeader';
import { MyStyling } from '../../Constants/Styling';
import { SafeAreaView } from 'react-native-safe-area-context';

const DeliveryMethod = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = React.useState(null);

  return (
    <SafeAreaView style={MyStyling.container}>
      <MainHeader title={'Delivery Method'} />
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Payment Options</Text>
        <Text style={styles.define}>
          Select how you want to receive your mobile.
        </Text>

        <FlatList
          data={options}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DeliveryMethodComponent
              item={item}
              isSelected={item.id === selectedId}
              onPress={() => setSelectedId(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.btncontainer}>
          <Btn
            title={'Proceed to Payment'}
            onPress={() => navigation.navigate('ChooseShipping')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryMethod;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: hp(5),
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
  },
  btncontainer: {
    marginTop: hp(1.3),
  },
});
