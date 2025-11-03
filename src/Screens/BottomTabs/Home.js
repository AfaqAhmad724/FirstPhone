import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Images } from '../../Assets';
import { MyStyling } from '../../Constants/Styling';
import { Colors } from '../../Constants/Colors';
import { hp, wp } from '../../Constants/Responsive';
import CustomerHomeHeader from '../../Components/CustomerHomeHeader';
import { Fontsize } from '../../Constants/Fontsize';
import { Fonts } from '../../Constants/Fonts';
import VerticalFlatlist from '../../Components/VerticalFlatlist';
import HorizontalFlatlist from '../../Components/HorizontalFlatlist';
import ViewAllDevices from '../../Components/ViewAllDevices';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import Api, { configAxiosHeaders } from '../Services/Api_Services';
import Toast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';

const Home = () => {
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const [nearbyData, setNearbyData] = useState([]);
  const userData = useSelector(s => s?.AUTH?.userData);

  useEffect(() => {
    userData?.token && configAxiosHeaders(userData.token);
    isFocused && getNearby();
  }, [isFocused, userData]);

  const getNearby = () => {
    const latitude = 31.5204;
    const longitude = 74.3587;
    const radius = 1000;

    setIsLoading(true);
    Api.getNearby(latitude, longitude, radius)
      .then(res => {
        if (res?.status === 200) {
          console.log('✅ Nearby Data:', res?.data?.data);
          setNearbyData(res?.data?.data || []);
        } else {
          Toast.show('No nearby data found', Toast.SHORT);
        }
      })
      .catch(error => {
        console.log('❌ getNearby Error:', error?.response?.data);
        Toast.show('Failed to fetch nearby data', Toast.SHORT);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <SafeAreaView style={MyStyling.container1}>
      {isFocused && (
        <StatusBar
          backgroundColor={Colors.primary}
          barStyle={'light-content'}
        />
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(5) }}
      >
        <CustomerHomeHeader check={true} />

        <View style={styles.dateStyle}>
          <Text style={styles.dateText}>Date</Text>
          <Image source={Images.sorting} />
        </View>

        <ViewAllDevices title={'Nearby'} />
        <View style={{ paddingHorizontal: wp(5) }}>
          <VerticalFlatlist data={nearbyData} isLoading={isLoading} />
        </View>

        <ViewAllDevices title={'Top Selling'} />
        <HorizontalFlatlist />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  dateText: {
    color: Colors.gray,
    fontSize: Fontsize.s,
    fontFamily: Fonts.semibold,
    marginRight: wp(1),
  },
  dateStyle: {
    marginTop: hp(0.5),
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
