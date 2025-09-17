import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RequestFormInputs from '../../Components/RequestFormInputs';
import DeviceSpecFlatlist from '../../Components/DeviceSpecFlatlist';
import CustomInputText from '../../Components/CustomInputText';
import { ConditionData } from '../../Constants/DummyData';
import { Strings } from '../../Constants/Strings';
import { Images } from '../../Assets';
import { hp, wp } from '../../Constants/Responsive';
import { Fontsize } from '../../Constants/Fontsize';
import { Fonts } from '../../Constants/Fonts';
import { Colors } from '../../Constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyStyling } from '../../Constants/Styling';
import MainHeader from '../../Components/MainHeader';
import PickImage from '../../Components/PickImage';
import Btn from '../../Components/Btn';
import { useNavigation } from '@react-navigation/native';

const NewListing = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={MyStyling.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(5) }}
      >
        <MainHeader title={'Add New Listing'} />
        <View style={{ marginTop: hp(1) }}>
          <RequestFormInputs
            title={'Brand '}
            secondTitle={'Model'}
            icon={Images.brand}
            secondIcon={Images.model}
            placeholder={'Enter Brand'}
            secondPlaceholder={'Enter Model'}
            mainView={{ marginTop: hp(1.5) }}
          />
          <RequestFormInputs
            title={'Storage Capacity '}
            secondTitle={'RAM Capacity'}
            icon={Images.brand}
            secondIcon={Images.model}
            placeholder={'Storage'}
            secondPlaceholder={'RAM Capacity'}
            mainView={{ marginTop: hp(1.5) }}
          />
          <Text style={styles.titleText}>{Strings.priceRange}</Text>
          <CustomInputText
            inputContainer={styles.inputContainer}
            placeholder={'Enter Price'}
          />
          <DeviceSpecFlatlist
            title={'Condition'}
            data={ConditionData}
            selectionText={Strings.conditionText}
          />
          <Text style={styles.titleText}>About Mobile</Text>
          <CustomInputText
            inputContainer={styles.inputContainer1}
            multiline={true}
            placeholder={'Enter Description'}
          />
          <Text style={styles.titleText}>Add Photos Or Video</Text>
          <PickImage />
          <Btn
            title={'Preview'}
            btnContainer={{ marginTop: hp(5) }}
            onPress={() => navigation.navigate('Preview')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewListing;

const styles = StyleSheet.create({
  titleText: {
    marginTop: hp(1.5),
    fontSize: Fontsize.xsm,
    fontFamily: Fonts.medium,
    color: Colors.black,
  },
  inputContainer: {
    marginTop: 0,
    paddingHorizontal: wp(2),
    alignItems: 'flex-start',
  },
  inputContainer1: {
    marginTop: 0,
    height: hp(20),
    maxHeight: hp(20),
    paddingHorizontal: wp(2),
    alignItems: 'flex-start',
  },
});
